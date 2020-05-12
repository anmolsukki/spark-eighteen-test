import React from 'react';
import DrawerToggleClass from './DrawerToggle.module.css';

const drawerToggleButton = (props) => (
  <button className={DrawerToggleClass.toggleButton} onClick={props.click}>
    <div className={DrawerToggleClass.toggleButtonLine} />
    <div className={DrawerToggleClass.toggleButtonLine} />
    <div className={DrawerToggleClass.toggleButtonLine} />
  </button>
);

export default drawerToggleButton;
