import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchJAMPolicy = async () => {
    try {
        const response = await axios.get(`${API_URL}/policy`);
        return response.data;
    } catch (error) {
        console.error('Error fetching JAM Policy', error);
        throw error;
    }
};

export const saveActions = async (userId, selectedActions) => {
    try {
        const response = await axios.post(`${API_URL}/actions`, { userId, selectedActions });
        return response.data;
    } catch (error) {
        console.error('Error saving actions', error);
        throw error;
    }
};
