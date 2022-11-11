/**
 * file: src/utils/email-validator.ts
 * date: 11/10/2022
 * description: file responsible for validating the email
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { EmailValidator } from "../presentation/protocols/email-validator";
import validator from 'validator';

export class EmailValidatorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return validator.isEmail(email);
  }
}