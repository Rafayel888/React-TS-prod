import '@testing-library/jest-dom';
import { fetchProducts } from '../redux/products/asyncActions';
import { Home } from '../pages/Home';
import { cleanup } from '@testing-library/react';
import axios from 'axios';
import { store } from '../redux/store';
import App from '../App';
import { render } from '@testing-library/react';
// afterEach(() => {
//   cleanup;
//   jest.restoreAllMocks();
// })

// jest.mock("axios");

// test('should fetch prod', () => {
  
// });
