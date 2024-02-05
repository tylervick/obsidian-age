import age from 'age-encryption';

export interface ICryptService {
  encrypt(file: Uint8Array): Promise<void>;
  decrypt(file: Uint8Array): Promise<Uint8Array>;
}

export class CryptService implements ICryptService {
  private readonly ready: Promise<void>;
  private encrypter: age.Encrypter;
  private decrypter: age.Decrypter;

  constructor() {
    this.ready = new Promise<void>((resolve, reject) => {
      age()
        .then(({ Encrypter, Decrypter }) => {
          this.encrypter = new Encrypter();
          this.decrypter = new Decrypter();
          resolve();
        })
        .catch((err) => {
          reject(`Failed to initialize age: ${err}`);
        });
    });
  }

  public async encrypt(file: Uint8Array) {
    await this.ready;
    this.encrypter.encrypt(file);
  }

  public async decrypt(file: Uint8Array): Promise<Uint8Array> {
    await this.ready;
    return this.decrypter.decrypt(file);
  }
}
