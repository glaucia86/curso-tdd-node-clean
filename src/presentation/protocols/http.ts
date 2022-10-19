/**
 * file: src/presentation/protocols/http.ts
 * date: 10/18/2022
 * description: file responsible for defining the http protocol.
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export interface HttpResponse {
  statusCode: number;
  body: any;
}

export interface HttpRequest {
  body?: any;
}