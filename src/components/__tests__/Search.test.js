import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";




global.fetch=jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("should Search ResList for Burger Text Input ", async () => {
  await act(async() => 
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    )
);

const cardsBeforeSearch = screen.getAllByTestId("resCard");

expect(cardsBeforeSearch.length).toBe(20);

 const searchButton = screen.getByRole("button", { name: "search" });

 const searchInput = screen.getByTestId("searchInput");

 fireEvent.change(searchInput, { target: { value:"burger"}});

 fireEvent.click(searchButton);

 const cardsAfterSearch = screen.getAllByTestId("resCard");

 expect(cardsAfterSearch.length).toBe(2);
});


it("should filter top rated restaurants", async () => {
    await act(async () =>
    render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
    )
);

const cardsBeforeFilter = screen.getAllByTestId("resCard");

expect(cardsBeforeFilter.length).toBe(20);

const topRatedButton = screen.getByRole("button", {name:"Top Rated Restaurants"});
fireEvent.click(topRatedButton);


const cardsAfterFilter=screen.getAllByTestId("resCard");
expect(cardsAfterFilter.length).toBe(4);
}); 