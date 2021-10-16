#   caseBook2
-   **[https://github.com/beatlesm/caseybook2](https://github.com/beatlesm/caseybook2)**
-   **[Youtube - caseybook2](https://www.youtube.com/watch?v=NOe1xNbzKtQ)**
-   **[Random user api: ](https://randomuser.me/api/)**

Alright all @here, the OPTIONAL React-from-scratch code along is starting in ~10. It will be recorded and I’ll share the recording either sometime tonight or tomorrow morning.
### Topics to be covered:
-   1.) Initial wireframe of a project (break it down into components, which component holds which data, how to come up with MVP)
-   2.) State
-   3.) Props
-   4.) Axios
-   5.) Routing (Route, Link, possible useRouteMatch / use Params if time)
####    ALSO
-   1.) Git (what is it and why was it created?)
-   2.) Different git flows
-   3.) Reason for branching / forking
-   4.) Create a feature branch, complete the feature, merge into the stage branch, complete qa + testing, merge into the main (production) branch
####    ALSO
-   1.) Lots of duckduckgo’ing (depending on how much I forget)
-   2.) Lots of doc reading (depending on how much I remember)

### Node.JS 

```

    npx create-react-app my app

    npm install axios

    npm install react-router-dom

```
### caseyBook2 

```

        const admin = {
                location: {
                    state: "NY"
                },
                login: {
                    uuid: "12345"
                },
                picture: {
                    medium: "https://wallsdesk.com/wp-content/uploads/2016/12/Thor-High-Quality-Wallpapers.jpg"
                },
                name: {
                    first: "CRHarding"
                },
                email: "C@c.com"
        }

```
### git 

```sh

    git fetch && git reset --hard origin/feature/userspage

    git fetch && git reset --hard origin/feature/profile

    git fetch && git reset --hard origin/feature/post

```
