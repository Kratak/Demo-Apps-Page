import { v4 as uuid } from 'uuid';

class Uuid {
  readonly uuid: string;

  constructor(uuid: string) {
    this.uuid = uuid;
  }

  static generate(): string {
    return new Uuid(uuid()).uuid;
  }
}

export default Uuid;
