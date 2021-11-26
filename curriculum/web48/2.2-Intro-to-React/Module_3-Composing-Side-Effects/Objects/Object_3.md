# Objective 3 - Fetch Data From an API Using the Effect Hook


## <span style="color:red">Overview</span>

Now that we know how to sync effects with data and we know how to avoid infinite loops let's take a more in-depth look at fetching data using an effect hook. There are a couple of possible situations we want to look at when fetching data in a component. First is writing an effect that is not synced with any state or props so that it only fetches data once as the component mounts. Next is writing an effect that makes an API call that could fire again during the component's life, depending on a piece of state or a prop.

## Follow Along

### Fetching Data when a Component Mounts

Let's fetch a random dog image to render when this component mounts. We'll do this using the "dogs" API. Open a new sandbox and follow along.

The first thing we'll do is get our `App` component ready with some state and the proper JSX:

```
function App() {
  // Initialize state to hold the image URL
  const [dogPic, setDogPic] = useState("");

  return (
    <div className="App">
      <h1>We Love Puppers</h1>
      <img src={dogPic} alt="a random dog" />
    </div>
  );
}
```
Next, we'll add the effect hook (minus the data fetch logic) with an empty dependency array.

```
function App() {
  // Initialize state to hold the image URL
  const [dogPic, setDogPic] = useState("");
  useEffect(() => {}, []); // Not synced with any data, so this effect only fires once

  return (
    <div className="App">
      <h1>We Love Puppers</h1>
      <img src={dogPic} alt="a random dog" />
    </div>
  );
}
```

Now we can add the fetch logic. We'll use Axios here as we've previously learned.

```
function App() {
  // Initialize state to hold the image URL
  const [dogPic, setDogPic] = useState("");
  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      // Which we then set to state
      .then(res => setDogPic(res.data.message))
      // Always include error handling
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>We Love Puppers</h1>
      <img src={dogPic} alt="a random dog" />
    </div>
  );
}
```

See a working example of the completed example [here](https://codesandbox.io/s/affectionate-chaplygin-9p27c).

### Fetching Data Multiple Times with Synced Effect Hooks

Often, we will want to make the same fetch call multiple times during the life of a component, all based on when certain data changes. It can be tempting to write a function outside of the effect hook that calls an API, call that function from the effect hook during the mounting stage, and then call it from a handler function later. Like this:

```
const [data, setData] = useState();
  const [query, setQuery] = useState("react");

  // This effect will only fire once when the component mounts
  useEffect(() => {
    fetchData(); // calls an external function that is dependent on state or props ⚠️
  }, []);

  // external function that relies on (or is dependent on) query
  const fetchData = () => {
    axios.get("some/api/endpoint/" + query)
      .then(res => setData(res.data));
  }

  const handleChange = e => {
    setQuery(e.target.value)
    fetchData(); // calls same external function after setting query
  }

  return (
    <>
      <input value={query} onChange={handleChange} />
      ...
    </>
  );
}
```

This is not safe, as the effect hook calls `fetchData` which relies on `query`. According to the [React docs](https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)

>It's difficult to remember which props or state are used by functions outside of the effect. This is why usually you'll want to declare functions needed by an effect inside of it. Then it's easy to see what values from the component scope that effect depends on.

Let's put the `fetchData` function inside the effect hook, and sync the hook with `query`:

```
const [data, setData] = useState();
  const [query, setQuery] = useState("react");

  // This effect will fire when the component mounts, AND each time "query" is updated! ✅
  useEffect(() => {
    const fetchData = () => {
      axios.get("some/api/endpoint/" + query)
        .then(res => setData(res.data));
    }

    fetchData(); // calls an external function
  }, [query]);


  const handleChange = e => {
    setQuery(e.target.value)
  }

  return (
    <>
      <input value={query} onChange={handleChange} />
      ...
    </>
  );
}
```
So, to examine this more closely, we will fetch data from the algolia API based on a query string typed into an input. Again, open a new sandbox to follow along.

To start out, we will have our state and JSX ready.

```
function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
```

Next, we will add the effect hook, synchronizing the hook to the query state, tied into the input.

```
function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  useEffect(() => {}, [query]); // when query changes, fire this effect again

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
```

Finally, we will add the fetch logic.

function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://hn.algolia.com/api/v1/search?query=" + query)
        .then(res => setData(result.data));
    };

    fetchData();
  }, [query]);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

See the final sandbox [here](https://codesandbox.io/s/xenodochial-field-h4rfd).



[Previous](./Object_2.md) | [Next](./Object_4.md)


