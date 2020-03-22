import React, { Component } from 'react';
import classNames from 'classnames';

const stepNames = ['Basic', 'Contacts', 'Avatar', 'Finish'];

export default class StepsBox extends Component {
    render() {
        const { step } = this.props;

        return (
            <div className="steps mb-4">
                {stepNames.map((stepName, index) => (
                    <div
                        key={index}
                        className={classNames(
                            'step',
                            { 'is-active': step === index + 1 },
                            { 'is-completed': step > index + 1 }
                        )}
                    >
                        <div className="step__marker">{index + 1}</div>
                        <div className="step__title mt-1">{stepName}</div>
                    </div>
                ))}
            </div>
        );
    }
}
