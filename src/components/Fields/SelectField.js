import React from 'react';
import classNames from 'classnames';

const SelectField = props => {
    const {
        id,
        value,
        labelText,
        location,
        name,
        onChange,
        error,
        getOptions
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
                <option value="">Choose your {name}</option>
                {getOptions(location)}
            </select>
            {error ? <div className="invalid-feedback">{error}</div> : null}
        </div>
    );
};

export default SelectField;
