import { Container } from "../src/Container";
import { ContainerInterface } from "../src/ContainerInterface";

class Foo {
}

describe("Interact with container", () => {
  const container = new Container();
  const foo = new Foo();

  test('Register object with key "foo"', () => {
    expect(container.set("foo", <Foo>() => foo)).toBe(container);
  });

  test('Contains something with key "foo"', () => {
    expect(container.has("foo")).toBe(true);
  });

  test('Get object by key "foo"', () => {
    expect(container.get<Foo>("foo")).toBe(foo);
  });
});
