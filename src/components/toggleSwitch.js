import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch() {
  const [checked, setChecked] = useState(false);
  const [lightMode, setLightMode] = useState(false)
  lightMode ? document.body.classList.add('light') : document.body.classList.remove('light')
 
  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true)
      setChecked(true)
      document.body.classList.add('light')
    } else {
      setLightMode(false)
      setChecked(false)
      document.body.classList.remove('light')
    }
  }
  return (
    <div  style={{textAlign: "center"}}>
      <ReactSwitch
        checked={checked}
        onChange={handleMode}
      />
    </div>
  );
}

export default ToggleSwitch;