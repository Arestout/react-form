import React, { Component } from 'react';
import Basic from './Steps/Basic';
import Contacts from './Steps/Contacts';
import Avatar from './Steps/Avatar';
import Finish from './Steps/Finish';
import Navigation from './Buttons/Navigation';
import Reset from './Buttons/Reset';
import StepsBox from './StepsBox';

const REGEX_NAME = new RegExp(/^[a-z ,.'-]{5,}$/i);
const REGEX_EMAIL = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const REGEX_MOBILE = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/gm);

export default class MainForm extends Component {
    constructor() {
        super();

        this.state = {
            step: 1,
            values: {
                firstName: '',
                lastName: '',
                password: '',
                repeatPassword: '',
                gender: 'male',
                email: '',
                mobile: '',
                country: '',
                city: '',
                avatar: ''
            },
            errors: {}
        };
    }

    onChange = event => {
        const { name, value } = event.target;
        this.setState(state => ({
            values: {
                ...state.values,
                [name]: value
            }
        }));
    };

    getOptionItems = items => {
        return items.map(item => (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ));
    };

    getCitiesOptions = items => {
        const country = Number(this.state.values.country);
        const filteredCities = Object.entries(items).filter(
            el => el[1].country === country
        );

        return filteredCities.map(([id, city]) => (
            <option key={id} value={id}>
                {city.name}
            </option>
        ));
    };

    checkErrors = () => {
        const {
            firstName,
            lastName,
            password,
            repeatPassword,
            email,
            mobile,
            city,
            avatar
        } = this.state.values;
        const { step } = this.state;
        const errors = {};

        switch (step) {
            case 1:
                if (!REGEX_NAME.test(firstName)) {
                    errors.firstName = 'Must be 5 characters or more';
                }

                if (!REGEX_NAME.test(lastName)) {
                    errors.lastName = 'Must be 5 characters or more';
                }

                if (password.length < 5) {
                    errors.password = 'Must be 5 characters or more';
                }

                if (repeatPassword !== password) {
                    errors.repeatPassword = 'Must be equal passwords';
                }
                break;

            case 2:
                if (!REGEX_EMAIL.test(email)) {
                    errors.email = 'Invalid email address';
                }

                if (!REGEX_MOBILE.test(mobile)) {
                    errors.mobile = 'Invalid mobile number';
                }

                if (city === '') {
                    errors.location = 'Required';
                }
                break;

            case 3:
                if (avatar === '') {
                    errors.avatar = 'Required';
                }
                break;

            default:
        }

        return errors;
    };

    nextStep = e => {
        e.preventDefault();

        const errors = this.checkErrors();

        if (Object.keys(errors).length > 0) {
            this.setState({
                errors
            });
        } else {
            this.setState(state => ({
                step: state.step + 1,
                errors: {}
            }));
        }
    };

    prevStep = () => {
        this.setState(state => ({
            step: state.step - 1
        }));
    };

    resetForm = () => {
        this.setState({
            step: 1,
            values: {
                firstName: '',
                lastName: '',
                password: '',
                repeatPassword: '',
                gender: 'male',
                email: '',
                mobile: '',
                country: '',
                city: '',
                avatar: ''
            },
            errors: {}
        });
    };

    render() {
        const { step } = this.state;

        return (
            <form className="form card-body">
                <StepsBox step={step} />

                {step === 1 ? (
                    <Basic
                        values={this.state.values}
                        onChange={this.onChange}
                        errors={this.state.errors}
                    />
                ) : null}

                {step === 2 ? (
                    <Contacts
                        values={this.state.values}
                        onChange={this.onChange}
                        errors={this.state.errors}
                        getOptionItems={this.getOptionItems}
                        getCitiesOptions={this.getCitiesOptions}
                    />
                ) : null}

                {step === 3 ? (
                    <Avatar
                        avatar={this.state.values.avatar}
                        onChange={this.onChange}
                        errors={this.state.errors}
                    />
                ) : null}

                {step === 4 ? <Finish values={this.state.values} /> : null}

                {step < 4 ? (
                    <Navigation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        step={this.state.step}
                    />
                ) : (
                    <Reset resetForm={this.resetForm} />
                )}
            </form>
        );
    }
}
