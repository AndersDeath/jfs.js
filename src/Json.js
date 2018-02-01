import fs from 'fs'

export class Json {
    constructor(storagePath, data, server) {
        this.storagePath = storagePath;
        this.data = data;
        this.server = server;
    }
    start() {
        this.data.forEach(element => {
            if (Object.keys(element).length > 0) {
                fs.readFile(this.storagePath + '/' + element.json + '.json', 'utf-8', (err, contents) => {
                    this.server.sendJson(element.url, contents);
                });
            }
        });
    }
}