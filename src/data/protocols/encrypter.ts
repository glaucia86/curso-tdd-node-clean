/**
 * file: src/data/protocols/encrypter.ts
 * date: 11/15/2022
 * description: file responsible for the 'Encrypter' interface
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export interface Encrypter {
  encrypt(value: string): Promise<string>;
}
