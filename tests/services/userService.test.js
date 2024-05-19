import { jest } from '@jest/globals';

jest.unstable_mockModule('../../db/index.js', () => ({
    query: jest.fn(),
    // etc.
}));

const { query } = await import('../../db/index.js');
const { getAllUsers } = await import('../../services/userService.js');


test('should fetch users', async () => {
    const users = [{ name: 'Adam Millner', email: "adam.millner@gmail.com" }];

    query.mockResolvedValue({ rows: users });

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))
    const getAllUsersResult = await getAllUsers();
    return expect(getAllUsersResult).toEqual(users);
});