import CircularSlider from "@fseehawer/react-circular-slider";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Switch from "@mui/material/Switch";
import "./CLevelImplementation.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className: string;
}

const tempArray = Array.from({ length: 56 }, (v, k) => k + 55);
const pressureArray = Array.from({ length: 61 }, (v, k) => k + 20);

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

function CLevelImplementation(): JSX.Element {
  const [value, setValue] = React.useState(0);
  const [profile, setProfile] = React.useState({
    number: 1,
    temperature: 90,
    pressure: 55
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="cimplementation">
      <Tabs centered value={value} onChange={handleChange}>
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="Temp & Pressure" {...a11yProps(1)} />
      </Tabs>
      <TabPanel className="cimplementation__home" value={value} index={0}>
        <div className="cimplementation__title">
          <h1 className="blue">WELCOME</h1>
          <h2>Jordan</h2>
          <div className="cimplementation__switch-container">
            <div>Shower</div>
            <div className="cimplementation__switch">
              <div>Off</div>
              <Switch></Switch>
              <div>On</div>
            </div>
          </div>
        </div>
        <div className="cimplementation__data">
          <div className="cimplementation__data-values">
            <h1 className="cimplementation__value1 blue">7</h1>
            <h1 className="cimplementation__value2 blue">19 min</h1>
            <h1 className="cimplementation__value3 blue">42 gal</h1>
          </div>
          <div className="cimplementation__data-descriptions">
            <h2 className="cimplementation__value1">Showers this week</h2>
            <h2 className="cimplementation__value2">Average shower time</h2>
            <h2 className="cimplementation__value3">Water used last shower</h2>
          </div>
        </div>
      </TabPanel>
      <TabPanel
        className="cimplementation__temp-pressure"
        value={value}
        index={1}
      >
        <div className="cimplementation__values">
          <div className="cimplementation__sliders">
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
        <div className="cimplementation__profiles">
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
    </div>
  );
}

export default CLevelImplementation;
