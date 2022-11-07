/**
 * file: src/presentation/controllers/signup.ts
 * date: 10/14/2022
 * description: file responsible for the 'SignUp' function
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Controller, EmailValidator, HttpResponse, HttpRequest, AddAccount } from './signup-protocols';
import { MissingParamError, InvalidParamError } from '../../errors';
import { badRequest, serverError } from '../../helpers/http-helper';

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;
  private readonly addAccount: AddAccount;

  constructor(emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator;
    this.addAccount = addAccount;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const { name, password, passwordConfirmation, email } = httpRequest.body;

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      const isValid = this.emailValidator.isValid(email);

      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }

      const account = this.addAccount.add({
        name,
        email,
        password,
      })

      return {
        statusCode: 200,
        body: account,
      }
    } catch (error) {
      return serverError();
    }
  }
}
