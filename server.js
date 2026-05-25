const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello from inside a container! Hostname: ${require('os').hostname()}`);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/render', (req, res) => {
  res.json({ status: 'hello this is render.com ' });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;