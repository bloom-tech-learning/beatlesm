
// Write your Character component here
import styled from 'styled-components';
import React from 'react';

const StyledContent = styled.div `
    width: 75%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    margin: 3px;
    border: 1px solid green;
`

// destructure the object character
export default function Helper({data}) {
    
    console.log('data: ', data); 
    debugger   
    return (
        <StyledContent>
            {}
                      
        </StyledContent>

    )
}

