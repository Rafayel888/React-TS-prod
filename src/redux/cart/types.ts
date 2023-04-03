export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  typesSize: number;
  sizes: string;
  description: string;
  barCode?: number;
  brand?: string;
  producer?: string;
  typeCare?: string;
  count: number;
};

export interface CartSliceState{
  totalPrice: number;
  items: CartItem[];
}