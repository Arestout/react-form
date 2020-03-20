import React from 'react';

const Avatar = props => {
    const { avatar, changeAvatar, error } = props;

    return (
        <>
            <img className="mb-4" src={avatar} alt="" width="100%" />
            <div className="mb-4">
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="avatar"
                        name="avatar"
                        onChange={changeAvatar}
                        required
                    />
                    <label className="custom-file-label" htmlFor="avatar">
                        Choose avatar
                    </label>
                </div>
                {error ? <div className="invalid-feedback">{error}</div> : null}
            </div>
        </>
    );
};

export default Avatar;
