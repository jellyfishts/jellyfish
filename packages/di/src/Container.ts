import { ContainerCallback, ContainerInterface } from "./ContainerInterface";

export class Container implements ContainerInterface {
  protected callbacks: Map<string, ContainerCallback> = new Map<
    string,
    ContainerCallback
  >();

  get<T>(id: string): T {
    const callback = this.callbacks.get(id);

    if (callback === undefined) {
      throw new Error();
    }

    return <T>callback(this);
  }

  set(id: string, callback: ContainerCallback): ContainerInterface {
    this.callbacks.set(id, callback);

    return this;
  }

  has(id: string): boolean {
    return this.callbacks.has(id);
  }
}
