import React, { useState } from "react";
import Billings from "../../components/billings/Billings";
import Personal from "../../components/personal/Personal";
import Usage from "../../components/usage/Usage";
import './settings.css'

const allTabs = {
    "Personal": Personal,
    "Billings": Billings,
    "Usage": Usage,
}

const Settings = () => {
    
    const [tab, setTabs] = useState('Personal')

    const Component = allTabs[tab]
  return (
    
    <div>
      <div className="settings">
        <div className="nav">
            navbar
        </div>
        <div className="settings-options">
            <div className="settings-top">
            <h2>Settings</h2>
            <ul className="settings-tabs">
                <li className="settings-tabs" onClick={() =>setTabs('Personal')}>Personal</li>
                <li className="settings-tabs" onClick={() =>setTabs('Billings')}>Billings</li>
                <li className="settings-tabs" onClick={() =>setTabs('Usage')}>Usage</li>
                <li className="settings-tabs">Elements</li>
                <li className="settings-tabs">Plans</li>
            </ul>
            </div>
            <div className="settings-container">
            {
               Component && <Component />
            }
            
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Settings;
