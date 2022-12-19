"use strict";
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
/**
 * Every peace of income data composited as WpInfo blocks
 * this class contains very essential types.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WpInfo = void 0;
const Entity_1 = require("./Entity");
class WpInfo extends Entity_1.Entity {
    // eslint-disable-next-line no-unused-vars
    constructor(type) {
        super();
        this.type = type;
    }
}
exports.WpInfo = WpInfo;
