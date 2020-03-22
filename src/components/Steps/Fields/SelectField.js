import React from 'react';
import classNames from 'classnames';

const SelectField = props => {
    const {
        id,
        value,
        labelText,
        name,
        onChange,
        error,
        defaultOption,
        options
    } = props;

    return (
        <div className="form-group">
            <label htmlFor={id}>{labelText}</label>
            <select
                className={classNames('form-control', { invalid: error })}
                id={id}
                value={value}
                name={name}
                onChange={onChange}
            >
                <option value="">{defaultOption}</option>
                {options}
            </select>
            {error ? <div className="invalid-feedback">{error}</div> : null}
        </div>
    );
};

export default SelectField;
