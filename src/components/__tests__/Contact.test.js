import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {

    // beforeAll(()=> {
    //     console.log("Before All");
    // })

    // beforeEach(()=>{
    //     console.log("Before Each");
    // })

    // afterAll(()=> {
    //     console.log("after All");
    // })

    // afterEach(()=>{
    //     console.log("after Each");
    // })



    test ("Should load contact us component", () => {
        render(<Contact />);
        
            const heading = screen.getByRole("heading");
        
            //Assertion
            expect(heading).toBeInTheDocument();
        
        });
        
        test ("Should load button inside contact component", () => {
            render(<Contact />);
                const button = screen.getByText("Submit");
            
                //Assertion
                expect(button).toBeInTheDocument();
            
            });
        
        test ("Should load button input name contact component", () => {
            render(<Contact />);
                    const inputName = screen.getByPlaceholderText("name");
                
                    //Assertion
                    expect(inputName).toBeInTheDocument();
                });    
        
        test ("Should load 2 input boxes on the contact component", () => {
                render(<Contact />);
                        const inputBoxes = screen.getAllByRole("textbox");
                    
                        console.log(inputBoxes.length);
                        //Assertion
                        expect(inputBoxes.length).toBe(2);
                    
                    });
});        