import React, { useState } from "react";
import Billings from "../../components/billings/Billings";
import Personal from "../../components/personal/Personal";
import Usage from "../../components/usage/Usage";
import './settings.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const allTabs = {
    "Personal": Personal,
    "Billings": Billings,
    "Usage": Usage,
}

const Settings = () => {
    
    const [tab, setTabs] = useState('Personal')
    const Component = allTabs[tab]

    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    
    <div>
      <div className="settings">
        <div className="nav">
        <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
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
