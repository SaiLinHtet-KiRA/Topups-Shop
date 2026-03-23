import jwt from "jsonwebtoken";
import { AuthorizeError } from "../util/error/errors";
import UserService from "../User/User.service";
interface JwtPayload {
  id: string;
}
export default async function requireAuth(req: any, res: any, next: any) {
  try {
    const token = req.session.token;

    if (!token) throw new AuthorizeError("User is not Authorized");

    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET || "jwt_secret",
    ) as JwtPayload;

    const user = await UserService.getById(payload.id);

    req.user = user;

    next();
  } catch (err) {
    return err;
  }
}
