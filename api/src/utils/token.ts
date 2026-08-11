import jwt from 'jsonwebtoken'
import 'dotenv/config'
import type { SignOptions } from 'jsonwebtoken'

interface TokenPayload {
  id: string
  email: string
  iat: number
  exp: number
}

export function generateToken(payload: TokenPayload): string {
  const expiresIn = process.env.JWT_EXPIRES_IN as SignOptions['expiresIn'] | undefined;
  const options: jwt.SignOptions = expiresIn ? { expiresIn } : {};

  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

export function verifyToken(token: string): TokenPayload {
  const decoded = jwt.verify(token, process.env.JWT_SECRET) as TokenPayload
  return decoded
}