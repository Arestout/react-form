import React from 'react';
import Field from './Fields/Field';

const Basic = props => {
    const {
        firstName,
        lastName,
        onChange,
        errors,
        gender,
        password,
        repeatPassword
    } = props;

    return (
        <>
            <Field
                id="firstName"
                labelText="First name"
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                name="firstName"
                onChange={onChange}
                error={errors.firstName}
            />

            <Field
                id="lastName"
                labelText="Last name"
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                name="lastName"
                onChange={onChange}
                error={errors.lastName}
            />

            <Field
                id="password"
                labelText="Password"
                type="password"
                placeholder="Enter password"
                value={password}
                name="password"
                onChange={onChange}
                error={errors.password}
            />

            <Field
                id="repeatPassword"
                labelText="Repeat password"
                type="password"
                placeholder="Enter repeat password"
                value={repeatPassword}
                name="repeatPassword"
                onChange={onChange}
                error={errors.repeatPassword}
            />

            <fieldset className="form-group">
                <div>Gender</div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={gender === 'male'}
                        onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="male">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={gender === 'female'}
                        onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                        Female
                    </label>
                </div>
            </fieldset>
        </>
    );
};

export default Basic;
