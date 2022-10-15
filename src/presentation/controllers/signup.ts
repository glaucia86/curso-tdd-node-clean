/**
 * file: src/presentation/controllers/signup.ts
 * date: 10/14/2022
 * description: file responsible for the 'SignUp' function
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export class SignUpController {
  handle(httpRequest: any): any {
    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    }
  }
}