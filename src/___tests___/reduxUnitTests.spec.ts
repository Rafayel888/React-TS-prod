import { store } from '../redux/store';
import { addItem, removeItem } from '../redux/cart/slice';

// describe('redux', () => {
//   test('Adds a new Prod', () => {
//     let state = store.getState().cart;
//     const initialCount = state.items.length;
//     store.dispatch(
//       addItem({
//         id: '1',
//         name: 'anna',
//         price: 450,
//         imageUrl: '',
//         description: '',
//         sizes: '',
//         typesSize: 87,
//         count: 0,
//       }),
//     );
//     state = store.getState().cart;
//     const newlyAddProd = state.items.find((prod) => prod.id === '4');
//     expect(newlyAddProd?.name).toBe('anna');
//     expect(newlyAddProd?.price).toBe(450);
//     expect(state.items.length).toBeGreaterThan(initialCount);
//   });

//   test('Deletes a prod from list with id', () => {
//     let state = store.getState().cart;
//     const initialCount = state.items.length;

//     store.dispatch(removeItem('1'));
//     state = store.getState().cart;

//     expect(state.items.length).toBeLessThan(initialCount); // Checking if new length smaller than inital length, which is 3
//   });
// });


