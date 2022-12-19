"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapeMetadataService = void 0;
const Service_1 = require("@interface/abstract/Service");
class ScrapeMetadataService extends Service_1.Service {
    load(readOptions) {
        throw new Error('Method not implemented.' + readOptions.type);
    }
}
exports.ScrapeMetadataService = ScrapeMetadataService;
