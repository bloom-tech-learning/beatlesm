import React from "react"
import MutationObserver from 'mutationobserver-shim'
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm"

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    //Arrange: render CheckoutForm
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", async () => {
    //Arrange: render CheckoutForm
    render(<CheckoutForm />);

    // ACT Part:

    // 1. Find the first name field.
    const firstNameField = screen.getByLabelText(/first name:/i)
    
    // 2. Type a first name into the field.
    userEvent.type(firstNameField, "First")

    // 3. Find the last name field.
    const lastNameField = screen.getByLabelText(/last name:/i);

    // 4. Type a last name into the field.
    userEvent.type(lastNameField, "Last");

    // 5. Find the address field.
    const addressField = screen.getByLabelText(/address:/i)

    // 6. Type a address into the field.
    userEvent.type(addressField, "123 Address Rd.")
    
    // 7. Find the city field.
    const cityField = screen.getByLabelText(/city:/i)

    // 8. Type a city into the field.
    userEvent.type(cityField, "City")
    
    // 7. Find the state field.
    const stateField = screen.getByLabelText(/state:/i)

    // 8. Type a state into the field.
    userEvent.type(stateField, "CA")
    
    // 9. Find the zip field.
    const zipField = screen.getByLabelText(/zip:/i)

    // 10. Type a zip into the field.
    userEvent.type(zipField, "94123")

    // 11. Find the button.
    const button = screen.getByRole("button")

    // 12. Click our button.
    userEvent.click(button)
    
    // 13. Find a success message element .
    await waitFor (() => {
        const successMessageElement = screen.queryByTestId("successMessage");

        //Assert: 
        //  Verify that a success message appear when all form inputs are filled with valid data.
        expect(successMessageElement).toBeInTheDocument();
    })    

});
