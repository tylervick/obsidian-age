declare namespace age {
  export class Encrypter {
    setPassphrase(s: string): void;
    setScryptWorkFactor(logN: number): void;
    addRecipient(s: string): void;
    encrypt(file: Uint8Array | string): Uint8Array;
  }

  export class Decrypter {
    addPassphrase(s: string): void;
    addIdentity(s: string): void;
    decrypt(file: Uint8Array, outputFormat?: 'uint8array'): Uint8Array;
    decrypt(file: Uint8Array, outputFormat: 'text'): string;
  }
}
