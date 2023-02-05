export interface IShopProps {
  position: Boolean;
}

export interface ISneaker {
  _id: string;
  name: string;
  price: number;
  relaseYear: string;
  posterPathImage: string;
  brand: string;
  createdAt: Date;
  genre: string;
  sizes: number[];
  imgs: string[];
  status: string;
}
export interface ISneakerBasket {
  _id: string;
  name: string;
  price: number;
  relaseYear: string;
  posterPathImage: string;
  brand: string;
  createdAt: Date;
  genre: string;
  size: number;
  imgs: string[];
  status: string;
}
export interface ISneakerState {
  sneakers: ISneaker[];
  basket: ISneaker[];
  value: number;
  sneaker_id: string;
  total: number;
  modal: boolean;
  sneakerActive: ISneaker | null;
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
  position: boolean;
}
