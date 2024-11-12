const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe('userList array tests', () => {
  test('contains the element "admin"', () => {
    expect(userList).toContain('admin');
  });

  test('first element is "Nick"', () => {
    expect(userList[0]).toBe('Nick');
  });

  test('last element is "new_user_2"', () => {
    expect(userList[userList.length - 1]).toBe('new_user_2');
  });

  test('length of the array is 5', () => {
    expect(userList.length).toBe(5);
  });

  test('the 3rd element has type string', () => {
    expect(typeof userList[2]).toBe('string');
  });

  test('array does not have an 8th element', () => {
    expect(userList[7]).toBeUndefined();
  });
});
