/**
 * file: src/presentation/errors/server-error.ts
 * date: 10/21/2022
 * description: file responsible for the 'ServerError' class
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export class ServerError extends Error {
  constructor() {
    super('Internal server error');
    this.name = 'ServerError';
  }
}