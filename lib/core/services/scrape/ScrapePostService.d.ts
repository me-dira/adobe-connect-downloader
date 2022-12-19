import { WpScrapperAxios } from '@core/entity/Axios';
import { WpInfo } from '@interface/abstract/WpInfo';
import { Service } from '@interface/abstract/Service';
import { IScrapeProvider } from '@interface/entity/IScrape';
import { IScrapeLoadOption } from '@interface/entity/IScrape';
export declare class ScrapePostService extends Service implements IScrapeProvider {
    private axios;
    constructor(axios: WpScrapperAxios);
    load(readOptions: IScrapeLoadOption): Promise<WpInfo>;
}
