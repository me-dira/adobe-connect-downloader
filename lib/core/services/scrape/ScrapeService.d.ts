import { IScrapeLoadOption, IScrapeProvider } from '@interface/entity/IScrape';
import { Service } from '@interface/abstract/Service';
import { WpInfo } from '@interface/abstract/WpInfo';
import { ScrapeAdapter } from './ScrapeAdapter';
export declare class ScrapeService extends Service implements IScrapeProvider {
    private scrapeAdapter;
    constructor(scrapeAdapter: ScrapeAdapter);
    load(loadOptions: IScrapeLoadOption): Promise<WpInfo>;
}
