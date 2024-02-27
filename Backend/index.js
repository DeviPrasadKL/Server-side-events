const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
};
app.use(cors(corsOptions));

app.get('/events', cors(corsOptions), (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    setInterval(() => {
        const data = { message: `Hello world! (${new Date().toISOString()})` }
        console.log("Sent Message = ", data);
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    }, 2000)
})

app.listen(3000, () => console.log("Server is running on 3000"))