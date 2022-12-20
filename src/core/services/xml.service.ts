import {AppService} from '@interface/abstract/Service';
import {autoInjectable} from 'tsyringe';

@autoInjectable()
export class XmlService extends AppService {
  public read(chunkSize: number) {}
}
