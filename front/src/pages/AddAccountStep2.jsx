import React, { useState } from 'react';
import ActionSelection from '../components/ActionSelection';
import JamPolicy from '../components/JamPolicy';
import NavigationButtons from '../components/NavigationButtons';
import { saveActions } from '../services/api';

const AddAccountStep2 = () => {
    const [selectedActions, setSelectedActions] = useState([]);
    const userId = "test-user-123"; // Replace with actual userId from authentication

    const handleNext = async () => {
        try {
            await saveActions(userId, selectedActions);
            alert('Actions saved successfully!');
        } catch (error) {
            alert('Error saving actions');
        }
    };

    return (
        <div>
            <h2>Add Account - Step 2</h2>
            <ActionSelection selectedActions={selectedActions} setSelectedActions={setSelectedActions} />
            <JamPolicy />
            <NavigationButtons onBack={() => alert('Go Back')} onNext={handleNext} />
        </div>
    );
};

export default AddAccountStep2;