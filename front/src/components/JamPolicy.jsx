import React, { useEffect, useState } from 'react';
import { fetchJAMPolicy } from '../services/api';

const JamPolicy = () => {
    const [policy, setPolicy] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchJAMPolicy()
            .then(data => setPolicy(data.policy))
            .catch(err => setError('Failed to load JAM Policy'));
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(policy);
        alert('JAM Policy copied to clipboard!');
    };

    return (
        <div className="jam-policy">
            <h3>JAM Policy</h3>
            <span className="copy-icon" onClick={handleCopy}>📋</span>
            {error ? <p>{error}</p> : <div className="jam-policy-content"><pre>{policy}</pre></div>}
        </div>
    );
};

export default JamPolicy;
