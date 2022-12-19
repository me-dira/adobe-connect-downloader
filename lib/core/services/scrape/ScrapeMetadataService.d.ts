import { WpInfo } from '@interface/abstract/WpInfo';
import { Service } from '@interface/abstract/Service';
import { IScrapeProvider } from '@interface/entity/IScrape';
import { IScrapeLoadOption } from '@interface/entity/IScrape';
export declare class ScrapeMetadataService extends Service implements IScrapeProvider {
    load(readOptions: IScrapeLoadOption): Promise<WpInfo>;
}
