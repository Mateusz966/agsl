const authRoot = "/auth";
const usersRoot = '/users';
export const appRoutes = {
  v1: {
    auth: {
      root: authRoot,
      ["sign-in"]: `${authRoot}/sign-in`,
    },
    users: {
      create: `/v1/${usersRoot}`
    }
  },
};
