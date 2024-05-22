<template>
  <!-- <div class=" ml-2 bg-gradient-to-r  from-slate-600 via-black to-slate-500  rounded-lg text-white font-serif"> -->
    <div>
    <div class="relative w-full max-w-5xl mx-auto ">
      <div class="overflow-hidden relative">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(image, index) in images"
            :key="index"
            class="min-w-full h-96 bg-center bg-contain bg-no-repeat "
            :style="{ backgroundImage: `url(${image})` }"
          ></div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="prev"
        class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        @click="next"
        class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ›
      </button>

      <!-- Indicators -->
      <div
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2"
      >
        <span
          v-for="(image, index) in images"
          :key="index"
          @click="goTo(index)"
          class="block w-3 h-3 bg-gray-800 rounded-full cursor-pointer"
          :class="{ 'bg-white': currentIndex === index }"
        ></span>
      </div>
    </div>

    <div class="flex flex-col-2 justify-between mt-10">
    <div class="mt-3 p-4 w-auto h-60 ml-28 rounded-xl shadow-slate-300 shadow-xl border-spacing-4 border-gray-400  " >
      <h1 class="text-indigo-800 font-bold text-2xl font-serif ">Description</h1>
      <p class="mx-16 font-mono">
        Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama and a misanthropic grandfather dragging his grandson into hijinks.
      </p>
    </div>
    
  </div>
  <div class="flex  flex-col-2 justify-between mt-10 ">
    <div class=" border-gray-400 mt-3 p-4  w-1/3 h-48 ml-28 rounded-xl  shadow-slate-300 shadow-xl border-spacing-4 ">
      
      <p class="text-indigo-800 font-bold text-2xl font-serif"> Created by: </p>
      <ol class="font-mono">
        <li>Justin Roiland</li>
         
        <li> Dan Harmon</li>
      </ol>
    </div>
    <div class=" border-gray-400 mt-3 p-4 w-1/3 h-48 mr-28 rounded-xl  shadow-slate-300 shadow-xl border-spacing-4 ">
      <p>
        <span class="font-bold text-indigo-700 text-2xl font-serif">Stars</span> <br />
        <ul class="font-mono" >
        <li>Chris Parnell</li>
        <li>Spencer Grammer</li>
        <li>Sarah Chalke</li>
      </ul>
      </p>
    </div>
  </div>
  <div class="flex  flex-col-2 justify-between mt-10 ">
    <div class=" border-gray-400 mt-3 p-4  w-1/3 h-48 ml-28 rounded-xl  shadow-slate-300 shadow-xl border-spacing-4 ">
      <p class="text-indigo-800 font-bold text-2xl font-serif">
       Rating 
        
      </p>
      <div class="rating">
        <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= rating }">&#9733;</span>
      </div>
    </div>
    <div class=" border-gray-400 mt-3 p-4  w-1/3 h-48 mr-28 rounded-xl  shadow-slate-300 shadow-xl border-spacing-4 ">
      <p class="text-indigo-800 font-bold text-2xl font-serif">Genre: </p>
      <ul class="font-mono">
        <li>Animation</li>
        <li>Adventure</li>
        <li>Comedy</li>
      </ul>
    </div>
    
  </div>
  
  </div>
  
<!-- episodes-->
<div class="flex justify-center text-3xl mt-4">
  <h1 >This is list of Episode names</h1>
</div>

<div class="flex overflow-x-auto whitespace-nowrap h-32 ">
    <RouterLink
      v-for="episode in episodResult?.episodes.results || []"
      :key="episode.id"
      :to="`/episode/${episode.id}`"
      class="inline-flex items-center justify-center p-4 mr-4 bg-gray-700 text-white font-bold rounded-lg min-w-[200px] h-full text-center cursor-pointer  last:mr-0 shadow-red-200 shadow-2xl border-spacing-8  "
    >
      <span class="truncate w-full">{{ episode.name }}</span>
    </RouterLink>
  </div>
  
   <!-- characters -->
  <div class="flex justify-center text-3xl mt-4">
  <h1 >This is list of Character names</h1>
</div>
  <div class="flex overflow-x-auto whitespace-nowrap h-32">
    <RouterLink
    v-for="character in characterResult?.characters.results || [] "
      :key="character.id"
      :to="`/character/${character.id}`"
      :style="{ backgroundImage: `url(${character.image})`  }"
      class="inline-flex flex-col justify-end items-center p-4 mr-4 bg-gray-200 rounded-3xl min-w-[200px] h-full text-center cursor-pointer text-indigo-600 last:mr-0  bg-no-repeat bg-cover shadow-slate-500 shadow-xl border-spacing-6  "
    >
      <span class="truncate w-full text-blue-700 text-lg font-bold  ">{{ character.name }}</span>
    </RouterLink>
  </div>
 
  
  <!-- location -->
  <div class="flex justify-center text-3xl mt-4">
  <h1 >This is list of location names</h1>
</div>
 
  <div class="grid grid-cols-4 gap-4 h-[160px] overflow-y-auto mb-10">
  <div v-for="location in locationResult?.locations.results || []" :key="location.id">
    <RouterLink :to="`/location/${location.id}`" class="block cursor-pointer">
      <div class="bg-gray-200  rounded p-4 text-center text-indigo-600 font-bold shadow-slate-400 shadow-xl border-spacing-4">
        {{ location.name }}
      </div>
    </RouterLink>
  </div>
</div>


<!-- <Footer/> -->
</template>

<script setup>
import { ref } from "vue";
import {RouterLink} from "vue-router";
// import Footer from "../components/Footer.vue";
const images = ref([
  "https://th.bing.com/th/id/R.377c5fabba9c5291d7ee68d51da52819?rik=ycYS1Thv9QI0YA&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.ktBHwSvOKzXUc-5jsu1i9wHaD4?w=1200&h=630&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.UxuG5K3Z33R757ko5aTlngHaEu?w=722&h=461&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.N1cU2dy31rCvbrbqj4Jj-gHaEs?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.V4389ckT06AgUmVFC1PEkwHaEK?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.KIrN76DBemIE9hF6G9BY9gHaJQ?rs=1&pid=ImgDetMain",
]);

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const goTo = (index) => {
  currentIndex.value = index;
};
setInterval(() => {
  next();
}, 3000);

import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

/* list of each episodes */
 const episodes = ref([]);
 const { result:episodResult } = useQuery(gql`
   query {
     episodes {
       results {
         id
         name
         air_date
         episode
         characters {
           name
           status
          species
           image
         }
      }
    }
   }
 `);

/* list of each characters */
const characters = ref([]);

const { result:characterResult } = useQuery(gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        gender
        image
        episode {
          name
          air_date
          episode
          created
        }
        location {
          name
          type
          dimension
        }
      }
    }
  }
`);


// list of each location

const locations=ref([]);
const{result:locationResult}=useQuery(gql`
query {
locations {
  results {
    id
    name
    type
   dimension
  created
    residents {
      name
      status
      species
      gender
      image
    }
    
  }
}
  
}



`)
const rating = 9.1;

</script>

<style scoped>
/* Add any additional styling if needed */
.star {
  font-size: 2rem;
  color: #d3d3d3; /* Unfilled star color */
}
.star.filled {
  color: #ffc107; /* Filled star color */
}
</style>
