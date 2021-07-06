
import { capitalize } from './strings';

describe('strings utils', () => {
  test('it test the func', () => {
    expect(capitalize('toDo 1')).toBe('Todo 1')
    // expect(capitalize('TODO 1')).toBe('Todo 1')
  });


});