import React from 'react';
import Link from '../Link'
import renderer from 'react-test-renderer';
  //npm install  react-test-renderer
it('renders correctly', () => {
 const tree = renderer
   .create(<Link page="www.yahoo.com" />)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});
