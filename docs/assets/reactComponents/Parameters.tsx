import React, { useEffect, useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import {
  Space,
  Popover,
  Checkbox,
  Tag,
  Select,
  Divider,
  Typography,
  Card
} from 'antd';
import { Input } from 'antd';
import { Liquid } from 'liquidjs';
import TextArea from 'antd/es/input/TextArea';
interface Parameters {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
const liquid = new Liquid();

const { Text } = Typography;

const Parameters: React.FC = () => {
  const [content, setContent] = useState(
    'Hello{%if user.firstName %} {{user.firstName}}{%endif%}!'
  );
  const [preContent, setPreContent] = useState(
    'Hello{%if user.firstName %} {{user.firstName}}{%endif%}!'
  );
  const [parameters, setParameters] = useState<Parameters>({
    user: {
      firstName: 'Bob'
    }
  });
  const [preParameter, setPreParameters] = useState<string>(
    JSON.stringify(
      {
        user: {
          firstName: 'Bob'
        }
      },
      null,
      2
    )
  );
  const [validJSON, setValidJSON] = useState(true);
  const [validContent, setValidContent] = useState(true);

  useEffect(() => {
    try {
      liquid.parseAndRenderSync(preContent, parameters);
      setContent(preContent);
      setValidContent(true);
    } catch (e) {
      setValidContent(false);
    }
    try {
      setParameters(JSON.parse(preParameter));
      setValidJSON(true);
    } catch (e) {
      setValidJSON(false);
    }
  }, [preParameter, preContent]);
  return (
    <div>
      <Card title={`Parameters playground`} style={{ maxWidth: '500px' }}>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Text type="secondary">
            Content before being transfored:
            <Input
              defaultValue={content}
              onChange={(e) => {
                setPreContent(e.target.value);
              }}
            ></Input>
          </Text>
          <Text type="secondary">
            The parameters you pass through the API (json):
            <TextArea
              rows={3}
              defaultValue={JSON.stringify(parameters, null, 2)}
              onChange={(e) => {
                setPreParameters(e.target.value);
              }}
            />
          </Text>

          {validJSON ? (
            <>
              <Text strong>Result:</Text>
              <Text style={{ marginLeft: '10px' }}>
                {validContent ? (
                  liquid.parseAndRenderSync(content, parameters)
                ) : (
                  <div style={{ color: 'red' }}>
                    The tags in the content are not valid.
                  </div>
                )}
              </Text>
            </>
          ) : (
            <div style={{ color: 'red' }}>
              The parameters are not in valid JSON format.
            </div>
          )}
        </Space>
      </Card>
    </div>
  );
};

export default Parameters;
