// All properties that a User has
import { UserModel } from '@modules/user/database/user.model';

export interface UserProps {
  email: string;
  password: string;
  role: UserRoles;
  nick: string;
}

// Properties that are needed for a user creation
export interface CreateUserProps {
  email: string;
  password: string;
  nick: string;
}

export enum UserRoles {
  admin = 'admin',
  user = 'user',
}

export type UserEntityPersistent = Omit<
  UserModel,
  'dish' | 'dishPhoto' | 'shoppingList'
>;
