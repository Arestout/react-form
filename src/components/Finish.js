import React from 'react';
import countries from '../data/countries';
import cities from '../data/cities';

const Finish = props => {
    const { avatar, firstName, lastName, email, mobile, country, city } = props;
    const selectedCountry = countries.find(item => item.id === +country);

    return (
        <div className="container-fluid">
            <div className="row mb-4">
                <div className="col-4">
                    <img src={avatar} alt="" width="100%" />
                </div>
                <div className="col-8 d-flex align-items-center">
                    <h4>
                        {firstName} {lastName}
                    </h4>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <p>
                        <strong>Email:</strong> {email}
                    </p>
                    <p>
                        <strong>Mobile:</strong> {mobile}
                    </p>
                    <p>
                        <strong>Location:</strong> {selectedCountry.name},{' '}
                        {cities[city].name}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Finish;
