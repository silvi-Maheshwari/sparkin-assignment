import React, { useState } from 'react';

const actionsList = [
    // "Start-Stop Resources", "Pause-Resume Resources", "Resource Cleanup",
    "EC2", "RDS", "Light Sail", "Amazon Neptune", "Redshift Clusters", "Aurora Serverless V2",
    "Terminate EC2", "Delete EBS Volume", "Delete EBS Snapshot", "Delete RDS Snapshot"
];

const ActionSelection = ({ selectedActions, setSelectedActions }) => {
    const handleCheckboxChange = (action) => {
        setSelectedActions(prev => 
            prev.includes(action) ? prev.filter(a => a !== action) : [...prev, action]
        );
    };
    
    return (
        <div>
            <h3>Select Actions</h3>
            <div> Start-Stop Resources</div>
            {actionsList.map(action => (
                
                <label key={action}>
                    
                    <input 
                        type="checkbox" 
                        value={action} 
                        checked={selectedActions.includes(action)} 
                        onChange={() => handleCheckboxChange(action)}
                    />
                    {action}
                </label>
            ))}
        </div>
    );
};

export default ActionSelection;