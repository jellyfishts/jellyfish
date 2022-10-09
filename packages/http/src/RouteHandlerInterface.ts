export interface RouteHandlerInterface {
  handle(request: Request, response: Response): Response;
}
