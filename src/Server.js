import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import mime from 'mime-types';

export class Server {
    constructor(port) {
        this.app = express();
        this.port = port;
    }
    start() {
        this.app.use(cors());
        console.log('Server is start port: ', this.port);
        this.app.set('port', (process.env.PORT || this.port))
        this.app.listen(this.app.get('port'), () => {
            console.log('\n')
            console.log('Server Started ' + new Date() + 'on port: ' + this.port);
            console.log('\n')
        })
    }
    sendJson(url, content) {
        this.app.get(url, (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(content);
        });
    }

    sendFile(url, fileName, content) {
        let mimeType = mime.lookup(fileName);
        this.app.get(url, (req, res) => {
            res.setHeader('Content-Type', mimeType);
            res.send(content);
        });
    }
}