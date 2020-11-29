import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, onReset}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
            <div className="reset-button" onClick={onReset}>
                초기화
            </div>
        </div>
    );
};

export default Form;