import React from 'react';
import { mount, shallow } from 'enzyme';
import ProductMock from '../../__mocks__/ProductMock';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render del component Product', () => {
    const PRODUCT = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(PRODUCT.length).toEqual(1);
  });

  test('Comprobar el botón de comprar', () => {
    const handleAddToCart = jest.fn();

    const WRAPPER = mount(
      <ProviderMock>
        <Product {...{ handleAddToCart }} product={ProductMock} />
      </ProviderMock>,
    );

    WRAPPER.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
    expect(WRAPPER.find('button').simulate('click'));
  });
});
