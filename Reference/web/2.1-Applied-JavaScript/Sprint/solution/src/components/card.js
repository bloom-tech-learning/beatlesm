// import and Object destructure
// import { articles } from "../mocks/data"

import axios from 'axios';

// console.log(articles);

const Card = (articleObj) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  
  // instantiating the elements
  const articleCard = document.createElement('div');
  const headlineSec = document.createElement('div');
  const authorSec = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const spanSec = document.createElement('span');

  // setting class names, attributes and text
  articleCard.classList.add('card');
  headlineSec.classList.add('headline');
  headlineSec.textContent = articleObj.headline;
  articleCard.appendChild(headlineSec);
  authorSec.classList.add('author');
  articleCard.appendChild(authorSec);
  imgContainer.classList.add('img-container');
  authorSec.appendChild(imgContainer);
  image.src = articleObj.authorPhoto;
  imgContainer.appendChild(image);
  spanSec.textContent = `By ${articleObj.authorName}`;
  authorSec.appendChild(spanSec);
  return articleCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
/*   
  // test data
  const articleObj = {
    headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects", 
    authorPhoto: "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
    authorName: "SIR RUFF'N'STUFF"
  }   
  
  const articleCardSect = Card(articleObj);
  document.querySelector(selector).appendChild(articleCardSect);   
}
  */

  axios.get(`http://localhost:5000/api/articles`)
  .then(resp => {

    /* for (let i = 0; i < resp.data.articles.javascript.length ; i++) {
      const {headline, authorPhoto, authorName } =  resp.data.articles.javascript[i];
      const articleCardSect = Card({headline,authorPhoto, authorName });
      document.querySelector(selector).appendChild(articleCardSect);        
    }

    for (let i = 0; i < resp.data.articles.bootstrap.length ; i++) {
      const {headline, authorPhoto, authorName } =  resp.data.articles.bootstrap[i];
      const articleCardSect = Card({headline,authorPhoto, authorName });
      document.querySelector(selector).appendChild(articleCardSect);        
    }

    for (let i = 0; i < resp.data.articles.technology.length ; i++) {
      const {headline, authorPhoto, authorName } =  resp.data.articles.technology[i];
      const articleCardSect = Card({headline,authorPhoto, authorName });
      document.querySelector(selector).appendChild(articleCardSect);        
    }

    for (let i = 0; i < resp.data.articles.jquery.length ; i++) {
      const {headline, authorPhoto, authorName } =  resp.data.articles.jquery[i];
      const articleCardSect = Card({headline,authorPhoto, authorName });
      document.querySelector(selector).appendChild(articleCardSect);        
    }

    for (let i = 0; i < resp.data.articles.node.length ; i++) {
      const {headline, authorPhoto, authorName } =  resp.data.articles.node[i];
      const articleCardSect = Card({headline,authorPhoto, authorName });
      document.querySelector(selector).appendChild(articleCardSect);        
    } */

    for(let key in resp.data.articles){ 
      //console.log(resp.data.articles[key])
        resp.data.articles[key].forEach(article => {
        document.querySelector(selector).appendChild(Card(article));
      })
    } 
      
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    console.log("I DON'T CARE IF IT WORKED OR NOT!!!");
  }) // post() patch() delete()  
}
 

export { Card, cardAppender }
