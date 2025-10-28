const express = require('express');
const cors = require('cors')
const response = require("./component/response")
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.post("/image", (req, res) => {
    const image = req.body;

    response(200, image, "success", res)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});