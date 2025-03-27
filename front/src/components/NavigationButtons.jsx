import React from 'react';

const NavigationButtons = ({ onBack, onNext }) => {
    return (
        <div>
            <button onClick={onBack}>Back</button>
            <button onClick={onNext}>Next</button>
        </div>
    );
};

export default NavigationButtons;