import React from 'react';
import DefaultAvatar from '../../img/default-avatar.png';

const Avatar = props => {
    const { avatar, onChange, errors } = props;

    const onChangeAvatar = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            onChange({
                target: {
                    name: 'avatar',
                    value: event.target.result
                }
            });
        };
        reader.onerror = event => {
            console.error(event);
        };
        reader.readAsDataURL(file);
    };

    return (
        <>
            <img
                className="mb-4"
                src={avatar || DefaultAvatar}
                alt=""
                width="100%"
            />
            <div className="mb-4">
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="avatar"
                        name="avatar"
                        onChange={onChangeAvatar}
                    />
                    <label className="custom-file-label" htmlFor="avatar">
                        Choose avatar
                    </label>
                </div>
                {errors.avatar ? (
                    <div className="invalid-feedback">{errors.avatar}</div>
                ) : null}
            </div>
        </>
    );
};

export default Avatar;
