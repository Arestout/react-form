import React, { Component } from 'react';
import classNames from 'classnames';

export default class StepsBox extends Component {
    render() {
        const { step } = this.props;
        return (
            <div className="steps mb-4">
                <div
                    className={classNames(
                        'step',
                        { 'is-active': step === 1 },
                        { 'is-completed': step > 1 }
                    )}
                >
                    <div className="step__marker">1</div>
                    <div className="step__title mt-1">Basic</div>
                </div>
                <div
                    className={classNames(
                        'step',
                        { 'is-active': step === 2 },
                        { 'is-completed': step > 2 }
                    )}
                >
                    <div className="step__marker">2</div>
                    <div className="step__title mt-1">Contacts</div>
                </div>
                <div
                    className={classNames(
                        'step',
                        { 'is-active': step === 3 },
                        { 'is-completed': step > 3 }
                    )}
                >
                    <div className="step__marker">3</div>
                    <div className="step__title mt-1">Avatar</div>
                </div>
                <div
                    className={classNames('step', { 'is-active': step === 4 })}
                >
                    <div className="step__marker">4</div>
                    <div className="step__title mt-1">Finish</div>
                </div>
            </div>
        );
    }
}
