const express = require('express');
const path = require('path');
const qrCode = require('qrcode');
const cors = require('cors');

const app = express();

const corseOptions = {
    origin:"http://localhost:3000",
    credentials: true
}
app.use(cors(corseOptions))

const port = process.env.port || 5000;

app.use(express.json())


app.get("/", async (req, res,next) => {
try {
    const data = await qrCode.toDataURL("https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4")
    res.status(200).json(data)
} catch (error) {
    
}
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})