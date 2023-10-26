import express from "express"
import cors from "cors"

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// API endpoint definitions go here

// Test API
app.get('/', (req, res) => {
    res.send('This is a test.');
});

// Start service
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
