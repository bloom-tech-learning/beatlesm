import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../constants'
import Details from './Details'
import Friend from './Friend'

import { Spinner } from 'reactstrap';

const mockFriends = [
  { id: '1', name: 'Bea', email: 'bea@bea.com', age: 32, hobbies: ['coding', 'science fiction', 'sightseeing'] },
  { id: '2', name: 'Bikesh', email: 'bikesh@bikesh.com', age: 28, hobbies: ['fishing', 'coding', 'death metal'] },
  { id: '3', name: 'Cora', email: 'cora@cora.com', age: 25, hobbies: ['hiking', 'netflix', 'coding'] },
  { id: '4', name: 'Deborah', email: 'deborah@deborah.com', age: 22, hobbies: ['heavy metal', 'coding', 'death metal'] },
  { id: '5', name: 'Devin', email: 'devin@devin.com', age: 35, hobbies: ['reading', 'coding', 'bird watching'] },
  { id: '6', name: 'Micherre', email: 'micherre@micherre.com', age: 24, hobbies: ['hiking', 'heavy metal', 'coding'] },
]

const friendNames = mockFriends.map(fr => ({ id: fr.id, name: fr.name }));
export default function App() {
  const [friends, setFriends] = useState(friendNames)
  const [currentFriendId, setCurrentFriendId] = useState('1')

  const openDetails = id => {
    setCurrentFriendId(id)
  }

  const closeDetails = () => {
    setCurrentFriendId(null)
  }

  return (
    <div className='container'>
      <Spinner color="primary" />
      <h1>My friends:</h1>
      {
        friends.map(fr => {
          return <Friend key={fr.id} info={fr} action={openDetails} />
        })
      }
      {
        currentFriendId && <Details friendId={currentFriendId} close={closeDetails} color={'blue'}/>
      }
    </div>
  )
}


