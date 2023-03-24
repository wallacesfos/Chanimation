import * as jwt from "jsonwebtoken";

export class Token {
  static async generateToken(user) {
    const expiresIn = null;
    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign(
      {
        IDUser: user.id,
        username: user.username,
        email: user.email,
        IP: user.ip || null,
      },
      secretKey,
      { expiresIn }
    );

    return token;
  }
}
