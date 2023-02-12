
const authRoot = '/auth'
export const appRoutes = {
  auth: {
    root: authRoot,
    ['sign-up']: `${authRoot}/sign-up`
  }
}
