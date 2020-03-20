import React from 'react';
import Field from './Fields/Field';
import SelectField from './Fields/SelectField';
import countries from '../data/countries';
import cities from '../data/cities';

const Contacts = props => {
    const {
        email,
        onChange,
        errors,
        mobile,
        country,
        city,
        getOptionItems,
        getCitiesOptions
    } = props;

    return (
        <>
            <Field
                id="email"
                labelText="Email"
                type="text"
                placeholder="Enter your Email"
                value={email}
                name="email"
                onChange={onChange}
                error={errors.email}
            />

            <Field
                id="mobile"
                labelText="Mobile"
                type="text"
                placeholder="Enter your Mobile"
                value={mobile}
                name="mobile"
                onChange={onChange}
                error={errors.mobile}
            />

            <SelectField
                id="country"
                labelText="Country"
                value={country}
                name="country"
                onChange={onChange}
                getOptions={getOptionItems}
                location={countries}
                error={errors.location}
            />

            <SelectField
                id="city"
                labelText="City"
                value={city}
                name="city"
                onChange={onChange}
                getOptions={getCitiesOptions}
                location={cities}
                error={errors.location}
            />
        </>
    );
};

export default Contacts;
