export interface IShopProps {
  position: Boolean;
}
export interface ISneaker {
  _id: String;
  name: string;
  price: Number;
  relaseYear: String;
  imageURL: string;
  brand: String;
  createdAt: Date;
}
export interface ISneakerState {
  sneakers: ISneaker[];
  value: number;
}
