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
export default function Character({character}) {
    
    return (
        <StyledContent>
            {character.name}
            <div>{character.birth_year}</div>             
        </StyledContent>

    )
}


/* .character {
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    margin: 3px;
    border: 1px solid green;
  } */
  