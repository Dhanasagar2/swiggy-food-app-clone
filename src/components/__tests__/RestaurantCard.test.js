import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardmock.json"
import "@testing-library/jest-dom"


it("should render RestaurantCard Component with props", () => {
    render(<RestaurantCard resData={MOCK_DATA }/>);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
});