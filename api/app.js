import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ])
})

export default app;