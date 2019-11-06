import { ProductState } from '../interfaces/product-state.interface';

export function ProductReducer(state: ProductState, action): ProductState {
  switch (action.type) {
    case 'DISPLAY_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
      case 'SELECTED_PRODUCT':
        return {
          ...state,
          selectedProduct: action.payload
        }
    default:
      return state;
  }
}
