import { Node } from './Node';
import { LinkedList } from './LinkedList';

describe('Linked list methods', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList(
      new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
    );
  });

  test('toString', () => {
    expect(list.toString()).toBe(
      '( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> null'
    );
  });

  test('append', () => {
    list.append(new Node(6));
    expect(list.toString()).toBe(
      '( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> null'
    );
  });

  test('prepend', () => {
    list.prepend(new Node(0));
    expect(list.toString()).toBe(
      '( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> null'
    );
  });

  test('size', () => {
    expect(list.size()).toBe(5);
  });

  test('head', () => {
    expect(list.head().value).toBe(1);
  });

  test('tail', () => {
    expect(list.tail().value).toBe(5);
  });

  test('at (valid)', () => {
    expect(list.at(2).value).toBe(3);
  });

  test('at (invalid index)', () => {
    expect(list.at(5)).toBe(null);
  });

  test('pop', () => {
    expect(list.pop().value).toBe(5);
    expect(list.toString()).toBe('( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null');
  });

  test('contains (true result)', () => {
    expect(list.contains(3)).toBe(true);
  });

  test('contains (false result)', () => {
    expect(list.contains(6)).toBe(false);
  });
});
