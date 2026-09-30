const { createClient } = require('redis');
const express = require('express');
const router = express.Router();


const client = createClient({
    url: 'redis://localhost:6379'
});

client.on('error', err => console.log('Redis Client Error', err));

(async () => {
    await client.connect();
})();

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        await client.set(`user:${username}`, JSON.stringify({ email }), {EX: 86400});

        res.status(201).json({ message: 'User created successfully', username });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    res.send('Login endpoint');
});

router.post('/logout', async (req, res) => {
    res.send('Logout endpoint');
});

router.get('/me', async (req, res) => {
    res.send('User profile endpoint');
});

module.exports = router;