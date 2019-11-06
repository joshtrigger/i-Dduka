import { UserState } from './user-state.interface';
import { ProductState } from './product-state.interface';

export interface StoreState {
  products: ProductState;
  users: UserState;
}
