import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const FOOTER = mount(<Footer />);

  test('Render del component Footer', () => {
    expect(FOOTER.length).toEqual(1);
  });

  test('Render del titulo', () => {
    expect(FOOTER.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () => {
    const FOOTER = create(<Footer />);
    expect(FOOTER.toJSON()).toMatchSnapshot();
  });
});
