import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/NavBar';
import { exportAllDeclaration } from '@babel/types';

test('should render Header correctly',()=>{

      const wrapper=shallow(<Header />);
      expect(wrapper).toMatchSnapshot();

});