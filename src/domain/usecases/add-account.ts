/**
 * file: src/domain/usecases/add-account.ts
 * date: 10/26/2022
 * description: file responsible for the 'AddAccount' use case
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { AccountModel } from "../models/account";

export interface AddAccountModel {
  name: string,
  email: string,
  password: string,
}

export interface AddAccount {
  add(account: AddAccountModel): Promise<AccountModel>
}