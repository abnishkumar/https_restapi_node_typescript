import express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from '../routes/crmRoutes';
import mongoose from 'mongoose';
const cors = require('cors');
class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost:27017/crm';

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors({
            "Header add Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT"
        }));
        // serving static files 
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl).then(
            () => { console.log('Database is connected') },
            err => { console.log('Can not connect to the database' + err) }
        );

    }
}

export default new App().app;