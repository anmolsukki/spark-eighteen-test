import React from 'react';
import BackDropClass from './BackDrop.module.css';

const backdrop = (props) => <div className={BackDropClass.backdrop} onClick={props.click} />;

export default backdrop;
