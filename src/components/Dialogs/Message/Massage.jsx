import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return <div className={`${s.dialogItemMasseges} `}>{props.name}</div>
}

export default Message;