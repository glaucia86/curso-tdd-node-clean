/**
 * file: src/presentation/protocols/controller.ts
 * date: 10/14/2022
 * description: file responsible for the 'Controller' interface
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { HttpRequest, HttpResponse } from './http';

export interface Controller {
  handle(httpRequest: HttpRequest): HttpResponse
}