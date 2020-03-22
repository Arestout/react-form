import React from 'react';
import Field from './Fields/Field';
import SelectField from './Fields/SelectField';
import countries from '../../data/countries';
import cities from '../../data/cities';

const Contacts = props => {
    const { email, mobile, country, city } = props.values;
    const { onChange, errors } = props;

    const getOptionsItems = items => {
        return items.map(item => (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ));
    };

    const getCitiesOptions = cities => {
        const filteredCities = Object.entries(cities).filter(
            el => el[1].country === Number(country)
        );
        return getOptionsItems(
            filteredCities.map(([id, city]) => ({
                id,
                name: city.name
            }))
        );
    };

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
                defaultOption="Choose your Country"
                options={getOptionsItems(countries)}
                error={errors.country}
            />

            <SelectField
                id="city"
                labelText="City"
                value={city}
                name="city"
                onChange={onChange}
                defaultOption="Choose your City"
                options={getCitiesOptions(cities)}
                error={errors.city}
            />
        </>
    );
};

export default Contacts;
