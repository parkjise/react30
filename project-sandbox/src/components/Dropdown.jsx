import React, { useState } from "react";
import Select from "react-select";
import {
  GiConverseShoe,
  GiBodyBalance,
  GiCycling,
  GiPunchingBag,
} from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";

export default function Dropdown() {
  const [selectedOption, setSelectOption] = useState(null);
  const handleChange = (e) => {
    setSelectOption(e);
  };

  const options = [
    {
      text: "Running",
      value: "1",
      icon: <GiConverseShoe className="text-orange" />,
    },
    {
      text: "Swimming",
      value: "2",
      icon: <TbSwimming className="text-orange" />,
    },
    {
      text: "Cycling",
      value: "3",
      icon: <GiCycling className="text-orange" />,
    },
    {
      text: "Bodyweight",
      value: "4",
      icon: <GiBodyBalance className="text-orange" />,
    },
    {
      text: "Bag Workout",
      value: "5",
      icon: <GiPunchingBag className="text-orange" />,
    },
  ];

  return (
    <>
      {selectedOption && (
        <div className="display-3"> {selectedOption.icon}</div>
      )}
      <Select
        placeholder="Select Options"
        value={selectedOption}
        options={options}
        onChange={handleChange}
        getOptionLabel={(e) => (
          <div
            style={{ display: "flex", alignItems: "center", border: "none" }}
          >
            {e.icon}
            <span style={{ marginLeft: 5 }}>{e.text}</span>
          </div>
        )}
      />
    </>
  );
}
