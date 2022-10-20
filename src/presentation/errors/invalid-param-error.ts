/**
 * file: src/presentation/errors/invalid-param-error.ts
 * date: 10/18/2022
 * description: file responsible for the 'InvalidParamError' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export class InvalidParamError extends Error {
  constructor(paramName: string) {
    super(`Invalid param: ${paramName}`);
    this.name = 'InvalidParamError';
  }
}