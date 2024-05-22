

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { RouterLink } from 'vue-router';
let app=createApp(App)


// app.mount('#app')


// main.js

import {  provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'


const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://rickandmortyapi.com/graphql',
})

 app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})
﻿app.use(router)
app.mount('#app');
