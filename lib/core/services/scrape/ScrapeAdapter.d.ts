import { Service } from '@interface/abstract/Service';
import { WpInfo } from '@interface/abstract/WpInfo';
import { IScrapeLoadOption, IScrapeProvider } from '@interface/entity/IScrape';
import { ScrapePostService } from './ScrapePostService';
export declare class ScrapeAdapter extends Service implements IScrapeProvider {
    private scrapePostService;
    constructor(scrapePostService: ScrapePostService);
    load(loadOptions: IScrapeLoadOption): Promise<WpInfo>;
}
