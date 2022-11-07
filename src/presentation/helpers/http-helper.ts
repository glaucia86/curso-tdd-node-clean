/**
 * file: src/presentation/helpers/http-helpers.ts
 * date: 10/18/2022
 * description: file responsible for the 'http-helper' status code responses
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { ServerError } from '../errors';
import { HttpResponse } from '../protocols/http';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
});

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
});