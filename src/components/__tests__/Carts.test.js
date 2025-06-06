import { render , screen, fireEvent} from "@testing-library/react";
import { act } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockRestaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
})
);


it("should Load Restaurant Menu Component", async () => {
    await act(async () => 
        render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
        </BrowserRouter>
    ));

    const accordianHeader = screen.getByText("Veg Pizza (13)");
    
    fireEvent.click(accordianHeader);

    
    expect(screen.getAllByTestId("foodItems").length).toBe(13);

    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

    const addButtons = screen.getAllByRole("button" , { name: "Add+" });
    fireEvent.click(addButtons[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
    fireEvent.click(addButtons[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(15);

    fireEvent.click(screen.getByRole("button", {name:"Clear Cart" }));

    expect(
        screen.getByText("Cart is Empty Add Items to the Cart..😛😛😛😛")
    ).toBeInTheDocument();
});