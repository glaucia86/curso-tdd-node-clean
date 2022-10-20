/**
 * file: src/presentation/protocols/email-validator.ts
 * date: 10/19/2022
 * description: file responsible for the 'EmailValidator' interface
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export interface EmailValidator {
  isValid(email: string): boolean;
}