/**
 * file: src/presentation/controllers/signup.spect.ts
 * date: 10/14/2022
 * description: file responsible for the 'SignUp' function tests
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { SignUpController } from './signup';
import { MissingParamError } from '../errors/missing-param-error';

const makeSut = (): SignUpController => {
  return new SignUpController();
}

describe('Signup Controller', () => {
  test('Should return 400 if name is not provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  })

  test('Should return 400 if email is not provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('email'));
  })

  test('Should return 400 if  password is not provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('password'));
  })

  test('Should return 400 if password confirmation is not provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
      }
    }

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'));
  })

})