export function ProductReducer(state, action) {
  switch (action.type) {
    case 'DISPLAY_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
