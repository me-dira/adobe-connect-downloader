"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapePostService = void 0;
const tsyringe_1 = require("tsyringe");
const Axios_1 = require("@core/entity/Axios");
const Service_1 = require("@interface/abstract/Service");
let ScrapePostService = class ScrapePostService extends Service_1.Service {
    // eslint-disable-next-line no-unused-vars
    constructor(axios) {
        super();
        this.axios = axios;
    }
    async load(readOptions) {
        return await this.axios.get(readOptions.address);
    }
};
ScrapePostService = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [Axios_1.WpScrapperAxios])
], ScrapePostService);
exports.ScrapePostService = ScrapePostService;
