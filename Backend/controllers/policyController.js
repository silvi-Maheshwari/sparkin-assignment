exports.getJamPolicy = (req, res) => {
    try {
        res.json({ policy: "JAM (Just-in-Time Access Management) Policy is a security framework designed to grant users the minimum level of access required for their tasks, only when they need it. This approach reduces the risk of unauthorized access and enhances security by enforcing temporary and auditable access permissions." });
    } catch (error) {
        console.error('Error fetching JAM Policy:', error);
        res.status(500).json({ error: 'Failed to load JAM Policy' });
    }
};
