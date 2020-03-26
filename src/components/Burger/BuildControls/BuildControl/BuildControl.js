import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
    <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.more} onClick={props.added}>More</button>
        <button className={classes.less}>Less</button>
    </div>
};

export default buildControl;
