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
exports.ScrapeAdapter = void 0;
const WpInfo_const_1 = require("@constant/WpInfo.const");
const Service_1 = require("@interface/abstract/Service");
const ScrapePostService_1 = require("./ScrapePostService");
const tsyringe_1 = require("tsyringe");
let ScrapeAdapter = class ScrapeAdapter extends Service_1.Service {
    // eslint-disable-next-line no-unused-vars
    constructor(scrapePostService) {
        super();
        this.scrapePostService = scrapePostService;
    }
    load(loadOptions) {
        switch (loadOptions.type) {
            case WpInfo_const_1.WpInfoType.POST:
                return this.scrapePostService.load(loadOptions);
            default:
                throw new Error('Not able to detect data');
        }
    }
};
ScrapeAdapter = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [ScrapePostService_1.ScrapePostService])
], ScrapeAdapter);
exports.ScrapeAdapter = ScrapeAdapter;
