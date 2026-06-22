import jwt from "jsonwebtoken";

export interface JwtPayload {
  id: string;
}

export const generateToken = ({ id }: JwtPayload) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: "7d" });
};
