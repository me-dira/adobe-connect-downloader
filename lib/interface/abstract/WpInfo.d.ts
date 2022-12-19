/**
 * Every peace of income data composited as WpInfo blocks
 * this class contains very essential types.
 */
import { WpInfoType } from '@constant/WpInfo.const';
import { Entity } from './Entity';
export declare abstract class WpInfo extends Entity {
    protected type: WpInfoType;
    constructor(type: WpInfoType);
}
