import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render (<CheckoutForm />)   
    // type into all six inputs
    //  1. query for all inputs
    //  2. run the change event to add text 
    const firstNameInput = screen.getByLabelText(/First Name:/i)
    const lastNameInput = screen.getByLabelText(/Last Name:/i)
    const addressNameInput = screen.getByLabelText(/Address:/i)
    const cityNameInput = screen.getByLabelText(/City:/i)
    const stateNameInput = screen.getByLabelText(/State:/i)
    const zipNameInput = screen.getByLabelText(/Zip:/i)

     
});

test("shows success message on submit with form details", () => {

    render (<CheckoutForm />)   
    // type into all six inputs
    //  1. query for all inputs
    //  2. run the change event to add text 
    const firstNameInput = screen.getByLabelText(/First Name:/i)
    const lastNameInput = screen.getByLabelText(/Last Name:/i)
    const addressNameInput = screen.getByLabelText(/Address:/i)
    const cityNameInput = screen.getByLabelText(/City:/i)
    const stateNameInput = screen.getByLabelText(/State:/i)
    const zipNameInput = screen.getByLabelText(/Zip:/i)

    // type message
    userEvent.type(firstNameInput, "Warren");
    userEvent.type(lastNameInput, "Longman");
    userEvent.type(addressNameInput, "331 Ladera Dr");
    userEvent.type(cityNameInput, "Vallejo");
    userEvent.type(stateNameInput, "California");
    userEvent.type(zipNameInput, "94591");

   //  Find our button.
   const button = screen.getByRole("button");
   // 8. Click our button.
   userEvent.click(button);

   const outputP = screen.findByText("Warren");
   outputP.then(output=>  {
       expect(output).toBeInTheDocument();
   });
});
