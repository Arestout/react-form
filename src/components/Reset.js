import React from 'react';

const Reset = props => {
    return (
        <div className="d-flex justify-content-center">
            <button
                type="button"
                className="btn btn-primary"
                onClick={props.resetForm}
            >
                Reset
            </button>
        </div>
    );
};

export default Reset;
