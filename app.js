const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// var corsOptions = {
//     origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
