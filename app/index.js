import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';
import serverConf from './config/webserver';

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.get('/', (req, res) => {
    res.send(`AutoService API. Use http://${serverConf.SERVER_HOST}:${serverConf.SERVER_PORT}/api/v1`);
});

app.listen(serverConf.SERVER_PORT, serverConf.SERVER_HOST, () => {
    console.log(`app listening on http://${serverConf.SERVER_HOST}:${serverConf.SERVER_PORT}`);
});