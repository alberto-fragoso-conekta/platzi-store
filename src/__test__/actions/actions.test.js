import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('addToCart', () => {
    const PAYLOAD = ProductMock;
    const EXPECTED = {
      type: 'ADD_TO_CART',
      payload: PAYLOAD,
    };
    expect(actions.addToCart(PAYLOAD)).toEqual(EXPECTED);
  });

  test('removeFromCart', () => {
    const PAYLOAD = ProductMock;
    const EXPECTED = {
      type: 'REMOVE_FROM_CART',
      payload: PAYLOAD,
    };
    expect(actions.removeFromCart(PAYLOAD)).toEqual(EXPECTED);
  });
});
