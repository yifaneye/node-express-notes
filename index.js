import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => res.send('Hi there!'));

app.listen(PORT, () => console.log('Server is running!'));
