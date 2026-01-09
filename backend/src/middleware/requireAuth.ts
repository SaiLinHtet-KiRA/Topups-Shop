import jwt from "jsonwebtoken";
import { AuthorizeError } from "../util/error/errors";

export default function requireAuth(req: any, res: any, next: any) {
  try {
    const token = req.session.token;

    if (!token) throw new AuthorizeError("User is not Authorized");

    const payload = jwt.verify(token, process.env.JWT_SECRET || "jwt_secret");

    req.user = payload;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).send("Invalid token");
  }
}
