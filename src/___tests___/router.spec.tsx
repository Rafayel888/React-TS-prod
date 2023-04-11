import userEvent from "@testing-library/user-event";
import App from "../App"
import { render,screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

// describe('Test APP', () => {
//   test('Router Test', () => {
//     render(
//       <MemoryRouter>
//         <App/>
//       </MemoryRouter>
//     );
//     const mainLink = screen.getByTestId('main-link');
//     const basketLink = screen.getByTestId('basket-link');
//     userEvent.click(basketLink);
//     expect(screen.getByTestId('basket-page')).toBeInTheDocument();
//     userEvent.click(mainLink)
//     expect(screen.getByTestId('main-page')).toBeInTheDocument();
//   })
// })