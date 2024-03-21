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
import UserPreference from './UserPreference';

const { Text } = Typography;
const generateDailyHoursSelectOptions = () => {
  const options: { label: string; value: string }[] = [];
  for (let i = 0; i <= 23; i++) {
    const hour = i < 13 ? i : i - 12;
    const amPm = i < 12 ? 'am' : 'pm';
    options.push({
      label: `${hour}:00 ${amPm}`,
      value: `${hour}:00 ${amPm}`
    });
    options.push({
      label: `${hour}:30 ${amPm}`,
      value: `${hour}:30 ${amPm}`
    });
  }
  return options;
};

const Digest: React.FC = () => {
  const { colorMode } = useColorMode();
  const [instantly, setInstantly] = useState(true);
  const [hourly, seHourly] = useState(false);
  const [daily, setDaily] = useState(false);
  const [dailyTime, setDailyTime] = useState('9:00 am');
  const [weekly, setWeekly] = useState(true);
  const [weeklyTime, setWeeklyTime] = useState('9:00 am');
  const [weeklyDate, setWeeklyDate] = useState('Monday');
  const [monthly, setMonthly] = useState(false);
  const [monthlyTime, setMonthlyTime] = useState('9:00 am');
  const [monthlyDate, setMonthlyDate] = useState('Beginning of Month');
  const [allowUnsubscribe, setAllowUnsubscribe] = useState(true);
  const [emailSubscription, setEmailSubscription] = useState(true);
  const [
    userDefaultPreferenceOption,
    setUserDefaultPreferenceOption
  ] = useState('weekly');
  
  useEffect(() => {
    if (userDefaultPreferenceOption === 'off') {
      setEmailSubscription(false);
    }
  }, [userDefaultPreferenceOption]);

  return (
    <div>
      <Card
        title={`Email Preferences`}
        style={{ marginBottom: '5%', marginLeft: '20%', marginRight: '20%' }}
      >
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Divider>Delivery Options</Divider>
          <Text type="secondary">
            Choose what delivery options to support for this notification:
          </Text>

          <div>
            <Checkbox
              checked={instantly}
              onChange={() => setInstantly(!instantly)}
            >
              Instantly
            </Checkbox>
            <Tag color="green">default</Tag>
          </div>

          <div>
            <Checkbox checked={hourly} onChange={() => seHourly(!hourly)}>
              Hourly
            </Checkbox>
          </div>

          <div>
            <Checkbox
              style={{ width: 90 }}
              checked={daily}
              onChange={() => setDaily(!daily)}
            >
              Daily at
            </Checkbox>
            <Select
              defaultValue="09:00 am"
              style={{ width: 120 }}
              onChange={(value) => setDailyTime(value)}
              options={generateDailyHoursSelectOptions()}
            />
          </div>

          <div>
            <Checkbox
              style={{ width: 90 }}
              checked={weekly}
              onChange={() => setWeekly(!weekly)}
            >
              Weekly
            </Checkbox>
            <Select
              defaultValue="monday"
              style={{ width: 120 }}
              onChange={(value) => console.log(value)}
            >
              <Select.Option value="monday">Monday</Select.Option>
              <Select.Option value="tuesday">Tuesday</Select.Option>
              <Select.Option value="wednesday">Wednesday</Select.Option>
              <Select.Option value="thursday">Thursday</Select.Option>
              <Select.Option value="friday">Friday</Select.Option>
              <Select.Option value="saturday">Saturday</Select.Option>
              <Select.Option value="sunday">Sunday</Select.Option>
            </Select>
            &nbsp;&nbsp; at &nbsp;&nbsp;
            <Select
              defaultValue="09:00 am"
              onChange={(value) => setWeeklyTime(value)}
              options={generateDailyHoursSelectOptions()}
            />
          </div>

          <div>
            <Checkbox
              style={{ width: 90 }}
              checked={monthly}
              onChange={() => setMonthly(!monthly)}
            >
              Monthly
            </Checkbox>
            <Select
              defaultValue="1st of Month"
              style={{ width: 150 }}
              onChange={(value) => setMonthlyDate(value)}
            >
              <Select.Option value="Beginning of Month">
                1st of Month
              </Select.Option>
              <Select.Option value="End of Month">End of Month</Select.Option>
            </Select>
            &nbsp;&nbsp; at &nbsp;&nbsp;
            <Select
              defaultValue="09:00am"
              onChange={(value) => setMonthlyTime(value)}
              options={generateDailyHoursSelectOptions()}
            />
          </div>

          <Popover
            content={
              <div>
                Allows the user to unsubscribe from receiving this notification
                through this channel
              </div>
            }
          >
            <div>
              <Checkbox
                checked={allowUnsubscribe}
                onChange={() => {
                  setAllowUnsubscribe(!allowUnsubscribe);
                }}
              >
                Allow Unsubscribing
              </Checkbox>
            </div>
          </Popover>

          <Divider>The Default Preference</Divider>

          <Space direction="vertical">
            <Text type="secondary">
              This is the default delivery preference for this notification. Can
              be later changed by admins/users per user:
            </Text>
            <Select
              disabled={
                !instantly &&
                !hourly &&
                !daily &&
                !weekly &&
                !monthly &&
                !allowUnsubscribe
              }
              defaultValue="weekly"
              style={{ minWidth: 300 }}
              onChange={(value) => {
                setUserDefaultPreferenceOption(value);
                if (value !== 'off') {
                  setEmailSubscription(true);
                }
              }}
            >
              {instantly && (
                <Select.Option value="instantly">Instantly</Select.Option>
              )}
              {hourly && <Select.Option value="hourly">Hourly</Select.Option>}
              {daily && (
                <Select.Option value="daily">
                  Daily at {dailyTime}
                </Select.Option>
              )}
              {weekly && (
                <Select.Option value="weekly">
                  Weekly at {weeklyDate} {weeklyTime}
                </Select.Option>
              )}
              {monthly && (
                <Select.Option value="monthly">
                  Monthly at {monthlyDate} {monthlyTime}
                </Select.Option>
              )}
              {allowUnsubscribe && (
                <Select.Option value="off">Off / Unsubscribed</Select.Option>
              )}
            </Select>
          </Space>
        </Space>
      </Card>
      <Text
        style={{
          color: colorMode === 'dark' ? '#ffffff' : '#1e1e1e',
          marginLeft: '5%',
          fontSize: 16
        }}
      >
        {[
          `
          If you adjust the settings in the above component, the default `,
          <a href="https://docs.notificationapi.com/components/user-preferences">
            user preference prebuilt component
          </a>,
          ` will be displayed as follows:`
        ]}
      </Text>

      <UserPreference
        allowUnsubscribe={allowUnsubscribe}
        emailSubscription={emailSubscription}
        instantly={instantly}
        hourly={hourly}
        daily={daily}
        weekly={weekly}
        monthly={monthly}
        userDefaultPreferenceOption={userDefaultPreferenceOption}
        setEmailSubscription={setEmailSubscription}
      />
    </div>
  );
};

export default Digest;
