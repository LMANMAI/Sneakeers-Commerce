export interface IShopProps {
  position: Boolean;
}
export interface ISneaker {
  _id: String;
  name: string;
  price: number;
  relaseYear: String;
  imageURL: string;
  brand: String;
  createdAt: Date;
}
export interface ISneakerState {
  sneakers: ISneaker[];
  basket: ISneaker[];
  value: number;
  sneaker_id: string;
  total: number;
}
export interface IUser {
  firstName: string | null;
  email: string | null;
  id: string;
  createdAt: any;
}
export interface IUserState {
  user: IUser | null;
  authenticated: boolean;
  loading: boolean;
  error: string;
  needVerification: boolean;
  success: string;
}
