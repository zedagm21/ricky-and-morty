<template>
  
  <div class="bg-gradient-to-br from-black bg-opacity-50 to-white bg-opacity-50 min-h-screen flex items-center justify-center">
  <div v-if="characterResult && characterResult.character" class="p-4 bg-white rounded-lg shadow-lg">
    <div class="bg-gradient-to-r from-gray-900 bg-opacity-50 via-white bg-opacity-50 to-gray-900 rounded-t-lg p-6">
      <p class="text-white text-xl font-semibold mb-4">Character Information</p>
      <p class="text-white"><strong>Character ID:</strong> {{ characterResult.character.id }}</p>
      <p class="text-white"><strong>Character Name:</strong> {{ characterResult.character.name }}</p>
      <p class="text-white"><strong>Character Status:</strong> {{ characterResult.character.status }}</p>
      <p class="text-white"><strong>Character Species:</strong> {{ characterResult.character.species }}</p>
      <img :src="characterResult.character.image" :alt="characterResult.character.name" class="rounded-lg mt-4" />
    </div>

    <div v-if="characterResult && characterResult.character" class="bg-white rounded-b-lg shadow-lg p-6">
      <h2 class="text-xl font-semibold mb-4">Episodes</h2>
      <div class="overflow-x-auto">
        <table class="table-auto border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-2">Episode Name</th>
              <th class="px-4 py-2">Air Date</th>
              <th class="px-4 py-2">Episode</th>
              <th class="px-4 py-2">Created</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="episode in characterResult.character.episode" :key="episode.id" class="bg-gray-100">
              <td class="border px-4 py-2">{{ episode.name }}</td>
              <td class="border px-4 py-2">{{ episode.air_date }}</td>
              <td class="border px-4 py-2">{{ episode.episode }}</td>
              <td class="border px-4 py-2">{{ episode.created }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 class="text-xl font-semibold mb-4">Location</h2>
      <table class="table-auto border-collapse border border-gray-300">
        <tbody>
          <tr class="bg-gray-200">
            <td class="px-4 py-2 font-semibold">Name:</td>
            <td class="px-4 py-2">{{ characterResult.character.location.name }}</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="px-4 py-2 font-semibold">Type:</td>
            <td class="px-4 py-2">{{ characterResult.character.location.type }}</td>
          </tr>
          <tr class="bg-gray-200">
            <td class="px-4 py-2 font-semibold">Dimension:</td>
            <td class="px-4 py-2">{{ characterResult.character.location.dimension }}</td>
          </tr>
        </tbody>
      </table>
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
  const characterId = ref(route.params.id);
  
  const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
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
`;

const { result: characterResult } = useQuery(GET_CHARACTER_BY_ID, { id: characterId.value });
  

</script>
