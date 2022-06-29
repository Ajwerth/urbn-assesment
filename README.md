# Alec Wertheimer's URBAN coding assesment. 
## Objective

Create a simple app that interfaces with a public open API (http://www.programmableweb.com/apis/directory). 

The app should utilize an interaction pattern, such as user input/button, geolocation, etc. to pass information to the API, and with returned
data, create content on the page. This is really up to you to decide what you want to make here,
so do something that is fun!

Structure your app as you see fit. Connect to the API via xmlhttprequest, $.ajax, angular
resource, fetch, or whatever you are most comfortable with. Use any framework, and any
structure to your app, but be prepared to justify your selection. We use Vue.js here with SSR for
reference. We encourage you to commit often and comment thoroughly while you work so we
can get a good feeling of your progress through the application.

### Bonus Points
- API error handling
- State management
- ES6+ features (example: async/await)
- Modern CSS patterns
- Server Side Rendering
- Page performance/Lighthouse
- Accessibility and SEO
- Performance-optimized API usage
- Lazy-loading non critical UI components
- Unit tests
- CSS UI Patterns
- Usage of webpack for bundling and code splitting
___
## MTG App

This is a fun app which utilizes [The Unofficial Magic: The Gathering API](https://docs.magicthegathering.io/), to let users view and interact with card information. 

It's a VUE 3 app which was created with Vue CLI. It's using sass and sass-dart, Jest, Vuex, Vue-router, Axios for fetching.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
___
## My thoughts and ideas
Plan: My plan is to make a small app where users can search/sort through cards, view them, and add them to group in a way that you would if you were designing a deck.

Vue: I went with Vue since I really like how easy it is to get up and running and needs a lot less boilerplate code than React. I chose Vue 3 since its the newest version, and is stable so it just makes sense to use the latest. 

Vue CLI: I used Vue CLI to get the project started, Vue CLI is great as it removes the need to manually set up tools such as (Sass, Jest, vuex, vue-router) which saves a lot of time, while still giving you the freedom to configure things how you would like after the initial setup if need be.

CSS: For css I used Sass since again it's what I'm most farmiliar with and is also pretty much the standard these days. I created a main.scss file to store styling that will be used globaly accross the app. I always try to do mobile first with styling.

Testing: I chose Jest because its the testing library that I am most farmiliar with, and it's one of the two libraries that comes packaged with Vue CLI.

State Management: For the store I'm using vuex, its what I'm most farmiliar with and is also the standard, I love the features it gives you modularization and being able to design the store with JSON is a great way to make sure you keep things organized. 

I feel like its best keep state that only matters to one component in said component, and any state or data that is accessed by more than one component and can't be passed with props, I keep in the store. For this app my plan is to keep the state of the current deck in the store.

## State Management
I chose to go with Vuex for state management for a few reasons, I'm most comfortable with the pattern having used it with react and vue previously, vue-cli also uses it out of the box so there is less initial setup involved. The pattern also is the standard these days, and is a great way to keep you app organized at any size.

## What I would have done differently 
I wouldn't have used Vue 3, I didn't realize until too late that Bootstrap and Veutify aren't supported for Vue3 yet. Seems like Vuetify will have support by the end of the year.

## What I would do if I were to keep building this app