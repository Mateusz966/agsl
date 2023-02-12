import { get } from 'env-var';

export const jwtSecret = get('JWT_SECRET').required().asString();
export const jwtExpirationTime = get('JWT_EXPIRATION_TIME').required().asString();
