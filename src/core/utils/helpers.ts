
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export const isEmptyObject = (obj: any): boolean => {
  return !Object.keys(obj).length;
};

export const randomTokenString = (): string => {
  return crypto.randomBytes(40).toString('hex');
};

