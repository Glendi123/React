import React from 'react';
import s from "./FormsControl.module.css";
//поможет рест оператор и Дискретизация
const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ s.formControl + " " + (hasError ? s.error : "") }>
            <Element {...input} {...props} />
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};
export const Textarea = Element("textarea");
export const Input = Element("input");