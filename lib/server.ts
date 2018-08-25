import app from './app';
import * as https from 'https';
import * as fs from 'fs';
const PORT = 3000;

const httpsOptions = {
    key: fs.readFileSync('./config/privatekey.pem'),
    cert: fs.readFileSync('./config/certificate.pem')
}

// set up a route to redirect http to https
// app.get("*", function (request, response) {
//     response.redirect("https://" + request.headers.host + request.url);
// });

https.createServer(httpsOptions, app).listen(PORT, () => {

    console.log('Express server https listening on port ' + PORT);
});

// app.listen('3001', function () {
//     console.log('Listening http on port ' + '3001');
// });