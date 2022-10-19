/**
 * file: src/presentation/controllers/signup.ts
 * date: 10/14/2022
 * description: file responsible for the 'SignUp' function
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { HttpResponse, HttpRequest } from '../protocols/http';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }
  }
}