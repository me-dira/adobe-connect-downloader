import { WpInfoType } from '@constant/WpInfo.const';
import { WpInfo } from '@interface/abstract/WpInfo';
export interface IScrapeLoadOption extends IScrapeOptions {
}
export interface IScrapeLoadProvider {
    load(loadOptions: IScrapeLoadOption): Promise<WpInfo>;
}
export interface IScrapeOptions {
    type: WpInfoType;
    address: string;
}
export interface IScrapeProvider extends IScrapeLoadProvider {
}
