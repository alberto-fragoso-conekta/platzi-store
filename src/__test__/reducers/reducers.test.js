import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar initialState', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const INITIAL_STATE = {
      cart: [],
    };
    const PAYLOAD = ProductMock;
    const ACTION = {
      type: 'ADD_TO_CART',
      payload: PAYLOAD,
    };
    const EXPECTED = {
      cart: [
        ProductMock,
      ],
    };
    expect(reducer(INITIAL_STATE, ACTION)).toEqual(EXPECTED);
  });
});
