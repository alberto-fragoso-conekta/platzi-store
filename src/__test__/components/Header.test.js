import React from 'react';
import { create } from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('Render del componente Header', () => {
    const HEADER = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(HEADER.length).toEqual(1);
  });

  test('Render del titulo', () => {
    const HEADER = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(HEADER.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header Snapshot', () => {
  test('Comprobar la UI del componente Header', () => {
    const HEADER = create(
      <ProviderMock>
        <Header /> 
      </ProviderMock>,
    );
    expect(HEADER.toJSON()).toMatchSnapshot();
  });
});
