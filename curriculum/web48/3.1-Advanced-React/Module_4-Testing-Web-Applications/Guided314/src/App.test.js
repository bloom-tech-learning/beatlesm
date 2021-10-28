import React from 'react';
import { render, screen} from '@testing-library/react';
import App from './App';

test("renders without errors", ()=>{
    render(<App/>);
});

test("when mounts header is rendered", ()=> {
    //Arrange: Render my component
    render(<App/>);

    //Act: Mount our comment. Find the header element

    //Query: Fails on more then one item. returns null if no items
    const header = screen.queryByText(/add new animal/i);
    
    // Get: Fails on more then one item. fails null if no items
    // const header = screen.getByText("Add Old Animal");
    // console.log(header);
    
    // Find: Fails on more then one item. Returns a promise
    // const header = screen.findByText("Add Old Animal");
    // console.log(header);
    
    //Assert: Verify that our header element exists
    expect(header).toBeInTheDocument();
    // expect(header).toBeTruthy();
    // expect(header).toHaveTextContent(/add new animal/i);
});