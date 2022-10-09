import { ContainerInterface } from "./ContainerInterface";

export interface ServiceProviderInterface {
  provide(container: ContainerInterface): ServiceProviderInterface;
}
