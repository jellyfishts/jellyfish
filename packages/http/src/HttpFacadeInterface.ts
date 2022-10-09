import { RouteHandlerInterface } from "./RouteHandlerInterface";

export interface HttpFacadeInterface {
  start(): HttpFacadeInterface;
  addRoute(
    method: string,
    uri: string,
    handler: RouteHandlerInterface,
  ): HttpFacadeInterface;
}
