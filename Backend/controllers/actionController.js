const Action = require('../models/Action');

exports.saveActions = async (req, res) => {
    const { userId, selectedActions } = req.body;

    if (!userId || !Array.isArray(selectedActions) || selectedActions.length === 0) {
        return res.status(400).json({ error: 'Invalid request data' });
    }

    try {
        const action = new Action({ userId, selectedActions });
        await action.save();
        res.json({ message: 'Actions saved successfully' });
    } catch (error) {
        console.error('Error saving actions:', error);
        res.status(500).json({ error: 'Error saving actions' });
    }
};
