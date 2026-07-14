import { ImageSourcePropType } from "react-native";
export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  quantity: number;
  categoryId: string;
  brand: string;
  shelfNumber: number;
  aisleNumber: number;
  shelfSection: string;
  image: ImageSourcePropType;
  description: string;
  storeId: string;
}