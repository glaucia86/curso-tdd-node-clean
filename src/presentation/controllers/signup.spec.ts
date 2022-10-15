/**
 * file: src/presentation/controllers/signup.spect.ts
 * date: 10/14/2022
 * description: file responsible for the 'SignUp' function tests
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { SignUpController } from './signup';

describe('Signup Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Missing param: name'));
  })
})