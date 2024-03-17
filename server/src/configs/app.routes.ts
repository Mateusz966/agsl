// Root
const usersRoot = 'users';
const authRoot = 'auth';
const dishesRoot = 'dishes';
const shoppingListRoot = 'shopping-list';

// Api Versions
const v1 = 'v1';

export const routesV1 = {
  version: v1,
  user: {
    root: usersRoot,
    delete: `/${usersRoot}/:id`,
  },
  auth: {
    root: authRoot,
    dashboard: {
      'sign-in': `${authRoot}/dashboard/sign-in`,
    },
    mobile: {
      'sign-in': `${authRoot}/mobile/sign-in`,
    },
  },
  dishes: {
    root: dishesRoot,
    get: `${dishesRoot}/:id`,
    all: dishesRoot,
  },
  shoppingList: {
    root: shoppingListRoot,
    get: `${shoppingListRoot}/:id`,
    modifyList: `${shoppingListRoot}/:listId/ingredients`,
  },
};
