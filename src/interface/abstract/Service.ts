export abstract class AppService {
  private uuid = Symbol(this.constructor.name);

  public getUUID() {
    return this.uuid;
  }
}
