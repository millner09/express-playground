import { jest } from "@jest/globals";

jest.unstable_mockModule("../../db/index.js", () => ({
  query: jest.fn(),
  // etc.
}));

const { query } = await import("../../db/index.js");
const { getAllUsers, getUserById, createUser } = await import(
  "../../services/userService.js"
);

test("getAllUsers should fetch users", async () => {
  const users = [{ name: "Adam Millner", email: "adam.millner@gmail.com" }];

  query.mockResolvedValue({ rows: users });

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))
  const getAllUsersResult = await getAllUsers();
  return expect(getAllUsersResult).toEqual(users);
});

beforeEach(() => {
  query.mockClear();
});

test("getUserById should fetch user", async () => {
  const users = [
    { id: 1, name: "Adam Millner", email: "adam.millner@gmail.com" },
  ];
  query.mockResolvedValue({ rows: users });

  const getUserByIdResult = await getUserById(users[0].id);
  return expect(getUserByIdResult).toEqual(users[0]);
});

test("getUserById should return undefined when no users are found", async () => {
  const users = [];
  query.mockResolvedValue({ rows: users });

  const getUserByIdResult = await getUserById(1);
  return expect(getUserByIdResult).toEqual(undefined);
});

test("createUser should return the created user when they are successfully created", async () => {
  const newUser = {
    id: 1,
    name: "Adam Millner",
    email: "adam.millner@gmail.com",
  };

  query.mockResolvedValue({ rows: [newUser] });

  const createUserResult = await createUser({
    name: newUser.name,
    email: newUser.email,
  });
  return expect(createUserResult).toEqual(newUser);
});
