import { IProduct } from "./IProduct";

export interface IProductsResponse {
  count: number;
  minPrice: number;
  maxPrice: number;
  result: IProduct[];
}