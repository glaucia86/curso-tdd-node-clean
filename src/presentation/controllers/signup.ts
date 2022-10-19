/**
 * file: src/presentation/controllers/signup.ts
 * date: 10/14/2022
 * description: file responsible for the 'SignUp' function
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { HttpResponse, HttpRequest } from '../protocols/http';
import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'));
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'));
    }
  }
}
