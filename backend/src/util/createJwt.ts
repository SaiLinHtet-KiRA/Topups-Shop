import jwt from "jsonwebtoken";

export function createJwt(payload: { id: string }) {
  const token = jwt.sign(payload, process.env.JWT_SECRET || "jwt_secret", {
    expiresIn: 7 * 24 * 60 * 60,
  });
  return token;
}
