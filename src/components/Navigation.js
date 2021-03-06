import React from 'react';

const Navigation = props => {
    const { step, nextStep, prevStep } = props;

    return (
        <div className="d-flex justify-content-center">
            <button
                type="button"
                className="btn btn-light mr-4"
                disabled={step === 1}
                onClick={prevStep}
            >
                Previous
            </button>
            <button
                type="submit"
                className="btn btn-secondary"
                onClick={nextStep}
            >
                Next
            </button>
        </div>
    );
};

export default Navigation;
