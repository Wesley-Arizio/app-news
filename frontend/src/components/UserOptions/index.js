import React from 'react';

import '../FormUserAccount/styles.css';
import './styles.css';

const Options = ({ onPressed }) => {
    return (
        <div className="main-options">
            <input className="input-submit-form" type="button" value="Sign In" onClick={() => onPressed('signin')} />
            <input className="input-submit-form" type="button" value="Sing Up" onClick={() => onPressed('signup')} />
        </div>
    );
}

export default Options;