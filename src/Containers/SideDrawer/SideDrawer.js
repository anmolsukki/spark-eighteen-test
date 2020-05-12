import React from 'react';
import { Link } from 'react-router-dom';
import SideDrawerClass from './SideDrawer.module.css';

const sideDrawer = (props) => {
  let drawerClasses = [SideDrawerClass.sideDrawer];
  if (props.show) {
    drawerClasses = `${SideDrawerClass.sideDrawer} ${SideDrawerClass.open}`;
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        {props.navClass.map((item) => {
          return (
            <li key={item.link}>
              <Link
                to={item.link}
                className={`${SideDrawerClass.navOption} ${
                  item.isSelected === true ? SideDrawerClass.active : ''
                }`}
                onClick={() => props.bacDrawer() && props.addClass(item)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default sideDrawer;
