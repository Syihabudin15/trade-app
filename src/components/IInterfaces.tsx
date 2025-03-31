import { User } from "@prisma/client";
export interface IUser extends User {}

export interface MarketData {
  symbol: string;
  price: number;
}
