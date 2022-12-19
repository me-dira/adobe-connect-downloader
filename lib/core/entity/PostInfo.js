"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostInfo = void 0;
const WpInfo_1 = require("@interface/abstract/WpInfo");
const WpInfo_const_1 = require("@constant/WpInfo.const");
class PostInfo extends WpInfo_1.WpInfo {
    constructor() {
        super(WpInfo_const_1.WpInfoType.POST);
    }
}
exports.PostInfo = PostInfo;
