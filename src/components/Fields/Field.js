import React from 'react';
import classNames from 'classnames';

const Field = props => {
    const {
        value,
        id,
        labelText,
        type,
        placeholder,
        name,
        onChange,
        error
    } = props;

    return (
        <div className="form-group">
            <label htmlFor={id}>{labelText}</label>
            <input
                type={type}
                className={classNames('form-control', { invalid: error })}
                placeholder={placeholder}
                id={id}
                value={value}
                name={name}
                onChange={onChange}
            />
            {error ? <div className="invalid-feedback">{error}</div> : null}
        </div>
    );
};

export default Field;
