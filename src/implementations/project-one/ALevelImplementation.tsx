import CircularSlider from "@fseehawer/react-circular-slider";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Switch from "@mui/material/Switch";
import "./ALevelImplementation.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className: string;
}

const tempArray = Array.from({ length: 56 }, (v, k) => k + 55);
const pressureArray = Array.from({ length: 61 }, (v, k) => k + 20);
let noOfShowers = 0;

function getTabStyle(displayCondition: boolean) {
  if (displayCondition) {
    return {
      display: "none"
    };
  }
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, className } = props;

  return (
    <div
      className={className}
      role="tabpanel"
      style={getTabStyle(value !== index)}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function ALevelImplementation(): JSX.Element {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [profile, setProfile] = React.useState({
    number: 1,
    temperature: 90,
    pressure: 55
  });

  const [phone, setPhone] = React.useState({
    name: "Jordan",
    battery: "90%",
    notifications: 2
  });

  const [showerOn, setShowerOn] = React.useState(false);
  const handleShowerOn = (
    event: React.ChangeEvent<HTMLInputElement>,
    isShowerOn: boolean
  ) => {
    setShowerOn(isShowerOn);
    setStart(true);
    setTime(0);
    noOfShowers += 0.5;
  };

  const [bluetoothOn, setBluetoothOn] = React.useState(false);
  const handleBluetoothOn = (
    event: React.ChangeEvent<HTMLInputElement>,
    isBluetoothOn: boolean
  ) => {
    setBluetoothOn(isBluetoothOn);
  };

  const [time, setTime] = React.useState(0);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    let interval: any = null;

    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className="aimplementation">
      <Tabs centered value={value} onChange={handleChange}>
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="Temp & Pressure" {...a11yProps(1)} />
        <Tab label="Connected Devices" {...a11yProps(2)} />
      </Tabs>
      <TabPanel className="aimplementation__home" value={value} index={0}>
        <div className="aimplementation__title">
          <h1 className="blue">WELCOME</h1>
          <h2>Jordan</h2>
          <div className="aimplementation__switch-container">
            <div>Shower</div>
            <div className="aimplementation__switch">
              <div>Off</div>
              <Switch onChange={handleShowerOn} checked={showerOn}></Switch>
              <div>On</div>
            </div>
          </div>
        </div>
        {!showerOn && (
          <div className="aimplementation__data">
            <div className="implementation__col1">
              <h1 className="aimplementation__value1 blue">
                {0 + noOfShowers}
              </h1>
              <h2 className="aimplementation__value1">Showers this week</h2>
            </div>
            <div className="aimplementation__col2">
              <h1 className="aimplementation__value2 blue">0.1 min</h1>
              <h2 className="aimplementation__value2">Average shower time</h2>
            </div>
            <div className="aimplementation__col3">
              <h1 className="aimplementation__value3 blue">0.1 gal</h1>
              <h2 className="aimplementation__value3">
                Water used last shower
              </h2>
            </div>
          </div>
        )}
        {showerOn && (
          <div className="aimplementation__data">
            <div className="aimplementation__col1">
              <div className="aimplementation__timer">
                <h1 className="blue">
                  {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </h1>
                <h1 className="blue">
                  {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                </h1>
              </div>
              <h2 className="aimplementation__value2">Elapsed Shower Time</h2>
            </div>
            <div className="aimplementation__col2">
              <h1 className="aimplementation__value2 blue">
                {Math.floor(time / 6000) * 0.1} gal
              </h1>
              <h2 className="aimplementation__value2">Water used</h2>
            </div>
            <div className="aimplementation__col3">
              <h1 className="aimplementation__value2 blue">
                {profile.temperature} °F
              </h1>
              <h2 className="aimplementation__value2">Average temperature</h2>
            </div>
          </div>
        )}
      </TabPanel>
      <TabPanel
        className="aimplementation__temp-pressure"
        value={value}
        index={1}
      >
        <div className="aimplementation__values">
          <div className="aimplementation__sliders">
            <CircularSlider
              width={200}
              trackSize={16}
              progressSize={16}
              knobSize={30}
              data={tempArray}
              dataIndex={profile.temperature - 55}
              label="Temperature"
              knobPosition="bottom"
              knobColor="#C0C2C9"
              progressColorFrom="#4285F4"
              progressColorTo="#4285F4"
              trackColor="#D3D3D3"
            />
            <CircularSlider
              width={200}
              trackSize={16}
              progressSize={16}
              knobSize={30}
              data={pressureArray}
              dataIndex={profile.pressure - 20}
              label="Pressure"
              knobPosition="bottom"
              knobColor="#C0C2C9"
              progressColorFrom="#4285F4"
              progressColorTo="#4285F4"
              trackColor="#D3D3D3"
            />
          </div>
        </div>
        <div className="aimplementation__profiles">
          <h2>Choose Shower Profile</h2>
          <h3>Current Profile: {profile.number}</h3>
          <button
            onClick={() =>
              setProfile({ number: 1, temperature: 90, pressure: 55 })
            }
          >
            Profile 1
          </button>
          <button
            onClick={() =>
              setProfile({ number: 2, temperature: 105, pressure: 60 })
            }
          >
            Profile 2
          </button>
          <button
            onClick={() =>
              setProfile({ number: 3, temperature: 100, pressure: 40 })
            }
          >
            Profile 3
          </button>
        </div>
      </TabPanel>
      <TabPanel
        className="aimplementation__connected-devices"
        value={value}
        index={2}
      >
        <div className="aimplementation__bluetooth-options">
          <div className="aimplementation__bluetooth-header">
            <h2 className="aimplementation__bluetooth-title">Bluetooth</h2>
            <div className="aimplementation__switch-container2">
              <div>Off</div>
              <Switch
                onChange={handleBluetoothOn}
                checked={bluetoothOn}
              ></Switch>
              <div>On</div>
            </div>
          </div>
          <h2 className="aimplementation__paired-devices">Paired Devices</h2>
          <button
            className="aimplementation__margin-top"
            onClick={() =>
              setPhone({ name: "Jordan", battery: "90%", notifications: 2 })
            }
          >
            Jordan&#39;s Phone
          </button>
          <button
            className="aimplementation__margin-top"
            onClick={() =>
              setPhone({ name: "Jaime", battery: "82%", notifications: 0 })
            }
          >
            Jaime&#39;s Phone
          </button>
        </div>
        {bluetoothOn && (
          <div className="aimplementation__current-device">
            <h2>Currently Connected Device: </h2>
            <h2 className="aimplementation__margin-bottom">
              {phone.name}&#39;s Phone
            </h2>
            <div className="aimplementation__battery">
              Battery Level: {phone.battery}
            </div>
            <div className="aimplementation__notifications">
              Notifications: {phone.notifications}
            </div>
          </div>
        )}
      </TabPanel>
    </div>
  );
}

export default ALevelImplementation;
