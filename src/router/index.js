import { createRouter,createWebHistory } from "vue-router";
import Episod from "../View/Episod.vue";
import Home from "../View/Home.vue";
import Character from "../View/Character.vue";
import Location from "../View/Location.vue";

import Footer from "../components/Footer.vue";
import Search from "../components/Search.vue";

const router=createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:"/",
      name:"home",
      component:Home
    },
    {
      path:"/episode/:id",
      name:"episod",
      component:Episod
    },
   
   
   
    {
      path:"/character/:id",
      name:"character",
      component:Character
    },
    {
      path:"/location/:id",
      name:"location",
      component:Location
    },
    {
      path:"/episode",
      name:"episodeSearch",
      component:Search
    },
    {
      path:"/character",
      name:"characterSearch",
      component:Search
    },
    {
      path:"/location",
      name:"locationSearch",
      component:Search
    },
  ]
})
export default router