import fs from 'fs'

export class Files {
    constructor(storagePath, data, server) {
        this.storagePath = storagePath;
        this.data = data;
        this.server = server;
    }
    start() {
        this.data.forEach(element => {
            if (Object.keys(element).length > 0) {
                fs.readFile(this.storagePath + '/' + element.name, (err, contents) => {
                    this.server.sendFile(element.url, element.name, contents);
                });
            }
        });
    }
}