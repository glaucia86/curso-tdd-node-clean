/**
 * file: src/presentation/errors/missing-param-error.ts
 * date: 10/18/2022
 * description: file responsible for the 'MissingParamError' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export class MissingParamError extends Error {
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`);
    this.name = 'MissingParamError';
  }
}