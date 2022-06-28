# urbn-assesment
Alec Wertheimer's URBAN coding assesment. 

This is a fun app which utilizes the Magic: The Gathering API, to let users view and interact with card information. 

It's a VUE 3 app which was created with Vue CLI. It's using sass and sass-dart, jest, vuex, vue-router, axios for fetching.

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

## My thoughts and ideas

Plan: My plan is to make a small app where users can search/sort through cards, view them, and add them to group in a way that you would if you were designing a deck.

### VUE
I went with Vue since I really like how easy it is to get up and running and needs a lot less boilerplate code than React. I chose Vue 3 since its the newest version, and is stable so it just makes sense to use the latest. 

I used Vue CLI to get the project started, Vue CLI is great as it removes the need to set up all these tools (Sass, Jest, vuex, vue-router) manualy and saves a lot of time, while still giving you the freedom to configure things how you would like after the initial setup if need be.

### State Management
I chose to go with Vuex for state management for a few reasons, I'm most comfortable with the pattern having used it with react and vue previously, vue-cli also uses it out of the box so there is less initial setup involved. The pattern also is the standard these days, and is a great way to keep you app organized at any size.

### Unit Testing
I chose Jest because its the testinglibrary that I am most farmiliar with.

### CSS
I chose sass with sass-dart.

