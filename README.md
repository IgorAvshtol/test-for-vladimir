# Before you start please read this small article

## Deployed app: [click here](https://netology-test.now.sh/)

#### Content:
* what was done
* architectire
* extra notes

## What was done:
* API call simulation to fetch employees - done (implementation: redux-thunk async action calling `fetchUsers` service (it goes with auto users generation, I didn't want to mock data since we can generate as much users as we can dynamicaly), and yes, you'll see that we have **5000 users on the screen**)
* Save and manipulate employees data in redux store - done (implementation: `redux` (used hooks for communication with store in components as all components are functional), `thunk`, a bit of `reselect` - I didn't play around it much so I've tried it as you use it in production)
* "Select all" chechbox in header - done (I went further and added ratio with number of selected / total number of users)
* Table with following row: checkbox | name | surname | age - done (I made a table of **5000 users** (thanks virtualization that allows us to work with such long lists) and it was tested with even more rows.
* Add comma-separated names string in footer - done (I decided to go a bit further: we rende a few of names wrapped in pretty-styled components and in we cross the limit it offers us to open another virtualized list, in both places we also able to cancel selection of user)
* I didn't use any bootstrap tools for that app and configured webpack to bundle it
* There was a note about subscriptions and events so I've created custom event (via `CustomEvent` object which means it won't support IE) to scroll to the top of list just to fit in this requirement
* As you've requested to use any UI libray - I've decided to go with `Material-UI`
## Architecture
I'm strong fan of CLEAN architecture so I've decided to implement some sort of it - I splitted interfaces (dto), services, redux (they might have been united but my experience hints me that it's much better practice to keep them separately since services are responsible for external communication when aside-effects - for inner). Also I'm fond of keeping codebase clean so as you may've mentioned if you went straight in code before - I use aliases everywhere it's possible - the real use of it is rather big: we will not get confused of gian amount of differen folders as our project will grow. Also I've writtten all (except webpack config) in TypeScript - since you yse Flow I guess there's no need to explain all the benefits of static tipisation.
## Extra notes
Hope you will enjoy my work, I've intentionaly left one tiny easter-egg in project, hope I consider you'll find it quickly. I'll be happy to hear your comments soon!