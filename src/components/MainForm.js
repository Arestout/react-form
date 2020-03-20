import React, { Component } from 'react';
import Basic from './Basic';
import Contacts from './Contacts';
import Avatar from './Avatar';
import Finish from './Finish';
import Pagination from './Buttons/Pagination';
import Reset from './Buttons/Reset';
import Steps from './StepsBox';
import defaultAvatar from '../img/default-avatar.png';

export default class MainForm extends Component {
    constructor() {
        super();

        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            password: '',
            repeatPassword: '',
            gender: 'male',
            email: '',
            mobile: '',
            country: '',
            city: '',
            avatar: defaultAvatar,
            errors: {
                firstName: '',
                lastName: '',
                password: '',
                repeatPassword: '',
                age: '',
                email: '',
                mobile: '',
                location: ''
            }
        };
    }

    onChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getOptionItems = items => {
        console.log(
            'Country',
            items.filter(item => item.id === this.state.country)
        );
        return items.map(item => (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ));
    };

    getCitiesOptions = items => {
        const country = +this.state.country;
        const filteredCities = Object.entries(items).filter(
            el => el[1].country === country
        );
        console.log('Filtered', filteredCities);
        return filteredCities.map(([id, city]) => (
            <option key={id} value={id}>
                {city.name}
            </option>
        ));
    };

    changeAvatar = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            this.setState({
                avatar: event.target.result
            });
        };
        reader.onerror = event => {
            console.error(event);
        };
        reader.readAsDataURL(file);
    };

    nextStep = e => {
        const {
            step,
            firstName,
            lastName,
            password,
            email,
            mobile,
            city
        } = this.state;
        const errors = {};
        const checkErrors = () => {
            if (Object.keys(errors).length > 0) {
                this.setState({
                    errors: errors
                });
            } else {
                this.setState({
                    errors: {
                        firstName: '',
                        lastName: '',
                        password: '',
                        repeatPassword: '',
                        age: '',
                        email: '',
                        mobile: ''
                    }
                });

                this.moveToNextStep();
            }
        };

        e.preventDefault();

        switch (step) {
            case 1:
                const nameRegex = new RegExp(/^[a-z ,.'-]{5,}$/i);

                if (!nameRegex.test(firstName)) {
                    errors.firstName = 'Must be 5 characters or more';
                }

                if (!nameRegex.test(lastName)) {
                    errors.lastName = 'Must be 5 characters or more';
                }

                if (this.state.password.length < 8) {
                    errors.password = 'Must be 8 characters or more';
                }

                if (this.state.repeatPassword !== password) {
                    errors.repeatPassword = 'Must be equal passwords';
                }
                break;

            case 2:
                const emailRegex = new RegExp(
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
                const mobileRegex = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/gm);

                if (!emailRegex.test(email)) {
                    errors.email = 'Invalid email address';
                }

                if (!mobileRegex.test(mobile)) {
                    errors.mobile = 'Invalid mobile number';
                }

                if (city === '') {
                    errors.location = 'Required';
                }
                break;

            case 3:
                if (this.state.avatar === defaultAvatar) {
                    errors.avatar = 'Required';
                }
                break;

            default:
                return;
        }

        checkErrors();
    };

    prevStep = e => {
        e.preventDefault();
        this.moveToPrevStep();
    };

    moveToNextStep = () => {
        this.setState(prevState => ({
            step: prevState.step + 1
        }));
    };

    moveToPrevStep = e => {
        this.setState(prevState => ({
            step: prevState.step - 1
        }));
    };

    resetForm = () => {
        this.setState({
            step: 1,
            firstName: '',
            lastName: '',
            password: '',
            repeatPassword: '',
            gender: 'male',
            email: '',
            mobile: '',
            country: '',
            city: '',
            avatar: defaultAvatar,
            errors: {
                firstName: '',
                lastName: '',
                password: '',
                repeatPassword: '',
                age: '',
                email: '',
                mobile: '',
                location: ''
            }
        });
    };

    render() {
        return (
            <>
                <Steps step={this.state.step} />

                {this.state.step === 1 ? (
                    <Basic
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        password={this.state.password}
                        repeatPassword={this.state.repeatPassword}
                        onChange={this.onChange}
                        errors={this.state.errors}
                        gender={this.state.gender}
                    />
                ) : null}

                {this.state.step === 2 ? (
                    <Contacts
                        email={this.state.email}
                        mobile={this.state.mobile}
                        onChange={this.onChange}
                        errors={this.state.errors}
                        country={this.state.country}
                        city={this.state.city}
                        getOptionItems={this.getOptionItems}
                        getCitiesOptions={this.getCitiesOptions}
                    />
                ) : null}

                {this.state.step === 3 ? (
                    <Avatar
                        avatar={this.state.avatar}
                        changeAvatar={this.changeAvatar}
                        error={this.state.errors.avatar}
                    />
                ) : null}

                {this.state.step === 4 ? (
                    <Finish
                        avatar={this.state.avatar}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        mobile={this.state.mobile}
                        country={this.state.country}
                        city={this.state.city}
                    />
                ) : null}

                {this.state.step < 4 ? (
                    <Pagination
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        step={this.state.step}
                    />
                ) : (
                    <Reset resetForm={this.resetForm} />
                )}
            </>
        );
    }
}
