import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './../actions';
import movie from './../data.js';

const initialState = {
  movie: 
  // movie,
  {
    id: 1,
    name: "Under the Dome",
    image: {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
    },
    director: "George Lucas",
    network: {
      "id": 2,
      "name": "CBS",
      "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
      }
    },
    metascore: 92,
    rating: {
      "average": 6.5
    },
    genre:  [
      "Drama",
      "Science-Fiction",
      "Thriller"
    ],
    summary: "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."      
  },
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        movie: {},
        isFetching:true,
        error:''
      });
    case(FETCH_SUCCESS):
      return({
        ...state,
        movie: action.payload,
        isFetching: false,
        error: ''
      });
    case(FETCH_ERROR):
      return({
        ...state,
        movie:{},
        isFetching: false,
        error: action.payload
      })
    default:
      return state;
  }
};