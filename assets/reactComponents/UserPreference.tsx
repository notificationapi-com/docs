import { LeftOutlined, MailOutlined } from '@ant-design/icons';
import { Card, Checkbox, Col, Row, Switch } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import { blue } from '@ant-design/colors';

type UserPreferenceProps = {
  allowUnsubscribe: boolean;
  emailSubscription: boolean;
  instantly: boolean;
  hourly: boolean;
  daily: boolean;
  weekly: boolean;
  monthly: boolean;
  userDefaultPreferenceOption: string;
  setEmailSubscription: React.Dispatch<React.SetStateAction<boolean>>;
};
const UserPreference = (props: UserPreferenceProps) => {
  const [instantlyState, setInstantlyState] = useState<boolean>();
  const [hourlyState, setHourlyState] = useState<boolean>();
  const [dailyState, setDailyState] = useState<boolean>();
  const [weeklyState, setWeeklyState] = useState<boolean>();
  const [monthlyState, setMonthlyState] = useState<boolean>();
  useEffect(() => {
    setInstantlyState(
      props.userDefaultPreferenceOption === 'instantly' ? true : false
    );
    setHourlyState(
      props.userDefaultPreferenceOption === 'hourly' ? true : false
    );
    setDailyState(props.userDefaultPreferenceOption === 'daily' ? true : false);
    setWeeklyState(
      props.userDefaultPreferenceOption === 'weekly' ? true : false
    );
    setMonthlyState(
      props.userDefaultPreferenceOption === 'monthly' ? true : false
    );
  }, [props]);
  return (
    <Card
      style={{
        marginBottom: '10%',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '5%'
      }}
    >
      <Row style={{ marginBottom: '2%' }}>
        <Title level={4}>
          <LeftOutlined />
          Notification Preference
        </Title>
      </Row>
      <Row style={{ marginBottom: '2%' }}>
        <Col span={8}></Col>
        <Col span={4}>
          <MailOutlined style={{ color: blue.primary, marginRight: '3%' }} />
          Email
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Title level={5}>New Comment </Title>
        </Col>
        <Col span={4}>
          <Switch
            defaultChecked={true}
            disabled={!props.allowUnsubscribe}
            value={!props.allowUnsubscribe ? true : props.emailSubscription}
            onChange={() => {
              props.setEmailSubscription(!props.emailSubscription);
            }}
          />
        </Col>
      </Row>
      {props.emailSubscription && (
        <Row
          style={{
            display: 'flex',
            alignItems: 'left'
          }}
        >
          <Col style={{ marginRight: '8%' }}>
            {props.instantly && (
              <>
                <Row>Instantly</Row>
                <Row
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Checkbox
                    defaultChecked={true}
                    checked={instantlyState}
                    onChange={() => {
                      setInstantlyState(!instantlyState);
                    }}
                  />
                </Row>
              </>
            )}
          </Col>
          <Col style={{ marginRight: '8%' }}>
            {props.hourly && (
              <>
                {' '}
                <Row>Hourly</Row>
                <Row
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Checkbox
                    checked={hourlyState}
                    onChange={() => {
                      setHourlyState(!hourlyState);
                    }}
                  ></Checkbox>
                </Row>{' '}
              </>
            )}
          </Col>
          <Col style={{ marginRight: '8%' }}>
            {props.daily && (
              <>
                {' '}
                <Row>Daily</Row>
                <Row
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Checkbox
                    checked={dailyState}
                    onChange={() => {
                      setDailyState(!dailyState);
                    }}
                  ></Checkbox>
                </Row>
              </>
            )}
          </Col>
          <Col style={{ marginRight: '8%' }}>
            {props.weekly && (
              <>
                {' '}
                <Row>Weekly</Row>
                <Row
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Checkbox
                    checked={weeklyState}
                    onChange={() => {
                      setWeeklyState(!weeklyState);
                    }}
                  ></Checkbox>
                </Row>
              </>
            )}
          </Col>
          <Col style={{ marginRight: '8%' }}>
            {props.monthly && (
              <>
                {' '}
                <Row>Monthly</Row>
                <Row
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Checkbox
                    checked={monthlyState}
                    onChange={() => {
                      setMonthlyState(!monthlyState);
                    }}
                  ></Checkbox>
                </Row>
              </>
            )}
          </Col>
        </Row>
      )}
    </Card>
  );
};
export default UserPreference;
