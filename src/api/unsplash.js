import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ad45c4ab0aac49baa457bf3dacfc46e50e1c436e07b933f11d2ef05702286c60'
    }
});