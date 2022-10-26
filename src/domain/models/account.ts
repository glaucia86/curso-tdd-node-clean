/**
 * file: src/domain/models/account.ts
 * date: 10/26/2022
 * description: file responsible for the 'Account' model
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export interface AccountModel {
  id: string
  name: string,
  email: string,
  password: string
}