export interface ContainerInterface {
  get<T>(id: string): T;
  set(id: string, callback: ContainerCallback): ContainerInterface;
  has(id: string): boolean;
}

export type ContainerCallback = (container: ContainerInterface) => any;
