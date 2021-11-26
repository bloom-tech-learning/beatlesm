# Objective 5 - Use Router's useHistory Hook to Programmatically Navigate to Other Routes

## <span style="color:red">Overview</span>

The final hook we'll look at today allows us to create dynamic elements (buttons, text, etc.) whose function changes based on a user's history.

For example, in a storefront webpage, we could create a button called "return to last item" that would return to the last item the user viewed (whether a t-shirt or a pair of shoes), rather than a default list of items or home page.

The hook we will use to accomplish this is called useHistory.

For example, code that looks like this would render the last component the user visited when the button is clicked.

```
import { useHistory } from 'react-router-dom'

function BackButton({ children }) {
  let history = useHistory()
  return (
    <button type="button" onClick={() => history.goBack()}>
      {children}
    </button>
  )
}
```

This is useful for navigation, among other things.

## Follow Along

In the `AvengerList` component, you have rendered a list of Avengers, and you're using the `Link` component to route to the `AvengerPage` route. Let's change that to use the `history` object instead. Wherever you would like - on the wrapping div, or a button - add an `onClick` event handler that invokes a function to `goBack`.

As usual our first steps will be to 1) import `useHistory` and 2) declare it as a variable.

```
// import useHistory
import { useHistory } from "react-router"

//globally declare hook
const history = useHistory();
```

Once we're set up with that we can add a button to our Avenger's List component such that when clicked, the button will return to the last page.

```
//add button to return statement
return (
    <div>
      <h1>
        Avenger: </h1>
       <h1> {name} {nickname}</h1>
      <button type="button" onClick={() => history.goBack()}>
        Go Back
      </button>
    </div>
  );
}
```

Once this code is properly implemented you should be able to navigate between your `Home` and `Avengers` pages and use Go Back to route to your last visited page.

##  Challenge

Add an `onClick` event handler to your `friends` app that works with a method of `useHistory` wherever it makes sense to do so.




[Previous](./Object_4.md) | [Next](./Understanding.md)


