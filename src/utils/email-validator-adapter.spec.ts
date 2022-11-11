/**
 * file: src/utils/email-validator-adapter.spec.ts
 * date: 11/10/2022
 * description: file responsible for testing the 'EmailValidatorAdapter' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { EmailValidatorAdapter } from "./email-validator-adapter";
import validator from 'validator';

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true;
  }
}));

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter();
};

describe('EmailValidator Adapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = makeSut();
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false);
    const isValid = sut.isValid('invalid_email@mail.com');
    expect(isValid).toBe(false);
  });

  test('Should return true if validator returns true', () => {
    const sut = makeSut();
    const isValid = sut.isValid('valid_email@mail.com');
    expect(isValid).toBe(true);
  });

  test('Should call validator with a correct e-mail', () => {
    const sut = makeSut();
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('any_email@mail.com');
    expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com');
  });
});