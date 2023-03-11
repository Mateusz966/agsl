const authRoot = "/auth";
const usersRoot = "/users";
const dashboardRoot = "/dashboard";
export const appRoutes = {
  api: {
    v1: {
      users: {
        create: `/v1/${usersRoot}`,
      },
      auth: {
        root: authRoot,
        ["sign-in"]: `v1/auth/dashboard/sign-in`,
      },
    },
  },
  app: {
    auth: {
      ["sign-in"]: `${authRoot}/signin`,
    },
    dashboard: {
      root: dashboardRoot,
    },
  },
};
