/**
 * file: src/data/usecases/add-account/db-add-account.spec.ts
 * date: 11/15/2022
 * description: file responsible for testing the 'DbAddAccount' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { DbAddAccount } from "./db-add-account";

describe('DbAddAccount UseCase', () => {
  test('Should return Encrypter with a correct password', async () => {
    class EncrypterStub {
      async encrypt(value: string): Promise<string> {
        return new Promise(resolve => resolve('hashed_password'))
      }
    }

    const encrypterStub = new EncrypterStub();
    const sut = new DbAddAccount(encrypterStub);
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt');
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }

    await sut.add(accountData);
    expect(encryptSpy).toHaveBeenCalledWith('valid_password');
  });
})