import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';

test("renders without errors", ()=> {
    render(<AnimalForm/>);
});

test("Displays species when user fills in all fields and submits", async ()=> {
    //Arrange: render AnimalForm
    render(<AnimalForm/>);

    //Act:
    // 1. Find the species field.
    const species = screen.getByLabelText(/Species:/i);
    userEvent.type(species, "feline");
    // 2. Type a species into the field.
    // 3. Find the age field.
    const age = screen.getByLabelText(/Age:/i);
    userEvent.type(age, "3");
    // 4. Type an age into the field.
    // 5. Find Notes field
    const notes = screen.getByLabelText(/Notes:/i);
    userEvent.type(notes, "notes");
    // 6. Type notes into the field.

    // 7. Find our button.
    const button = screen.getByRole("button");
    // 8. Click our button.
    userEvent.click(button);

    //Assert:

    //Promise find way
    // const outputP = screen.findByText(/feline/i);
    // outputP.then(output=>  {
    //     expect(output).toBeInTheDocument();
    // });


    //Async find way
    // const output = await screen.findByText(/feline/i);
    // expect(output).toBeInTheDocument();


    //Wait for way
    await waitFor(()=> {
        const output = screen.queryByText(/feline/i);
        expect(output).toBeInTheDocument();
    });

    //  Displays species typed

    // expect(output).toBeInTheDocument();
    // expect(output).toHaveTextContent("feline");
    // expect(output).not.toBeFalsy();
});