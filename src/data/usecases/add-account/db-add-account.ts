/**
 * file: src/data/usecases/add-account/db-add-account.ts
 * date: 11/15/2022
 * description: file responsible for the 'DbAddAccount' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { AccountModel } from "../../../domain/models/account";
import { AddAccount, AddAccountModel } from "../../../domain/usecases/add-account";
import { Encrypter } from "../../protocols/encrypter";

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter;

  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter;
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password);
    return new Promise(resolve => resolve(null));
  }
}