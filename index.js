const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

const index = require('./src/routes/default');
app.use('/', index);

const jemersonMaiaRoute = require('./src/routes/jemerson-maia');
app.use('/jemerson-maia', jemersonMaiaRoute);