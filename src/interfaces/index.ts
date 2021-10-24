export interface IShopProps {
  position: Boolean;
}
export interface ISneaker {
  _id: string;
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
  cartCountProduct: number;
}
