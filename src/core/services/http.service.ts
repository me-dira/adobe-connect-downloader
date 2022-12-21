import {AppService} from '@interface/abstract/Service';
import {autoInjectable} from 'tsyringe';

@autoInjectable()
export class HttpService extends AppService {
  constructor() {
    super();
    this.getUUID();
  }

  public downloadFile() {}
}
