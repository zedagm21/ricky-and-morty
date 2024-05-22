<template>
 



  <div v-if="episodeResult && episodeResult.episode" class="p-4 bg-white rounded-lg shadow-lg">
   <p class="text-lg font-semibold mb-4">Episode Information</p>
   <div class="grid grid-cols-2 gap-4">
     <p class="text-gray-700"><strong>Episode ID:</strong></p>
     <p class="text-gray-900">{{ episodeResult.episode.id }}</p>
     <p class="text-gray-700"><strong>Name:</strong></p>
     <p class="text-gray-900">{{ episodeResult.episode.name }}</p>
     <p class="text-gray-700"><strong>Air Date:</strong></p>
     <p class="text-gray-900">{{ episodeResult.episode.air_date }}</p>
     <p class="text-gray-700"><strong>Episode:</strong></p>
     <p class="text-gray-900">{{ episodeResult.episode.episode }}</p>
   </div>
 
 
     <h2 class="mt-10 text-2xl text-center">Characters</h2>
     <div class="flex flex-wrap">
   <div v-for="(character, index) in episodeResult.episode.characters" :key="character.id" class="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-10 pr-4">
     <div class="border border-gray-300 rounded-lg shadow-2xl overflow-hidden">
       <div class="border-2 border-red-300 h-60 flex items-center">
         <img :src="character.image" :alt="character.name" class="h-full object-cover " />
         <div class="flex flex-col justify-start">
           <p class="text-right"><strong>Name:</strong> {{ character.name }}</p>
           <p class="text-right"><strong>Status:</strong> {{ character.status }}</p>
           <p class="text-right"><strong>Species:</strong> {{ character.species }}</p>
         </div>
       </div>
     </div>
   </div>
 </div>
 
 
 
   </div>
 
 </template>
 
 <script setup>
 import { ref } from "vue";
 import { useRoute } from "vue-router";
 import { useQuery } from "@vue/apollo-composable";
 import gql from "graphql-tag";
 
 
 const route = useRoute();
 const episodeId = ref(route.params.id);
 
 const GET_EPISODE_BY_ID = gql`
   query GetEpisodeById($id: ID!) {
     episode(id: $id) {
       id
       name
       air_date
       episode
       characters {
         id
         name
         status
         species
         image
       }
     }
   }
 `;
 
 const { result: episodeResult } = useQuery(GET_EPISODE_BY_ID, { id: episodeId.value });
 </script>
 
 
 