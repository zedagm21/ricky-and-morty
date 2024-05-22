<template>
  
  <div v-if="locationResult && locationResult.location">
    <div class="bg-gray-100 rounded-lg shadow-md p-6 mb-6">
  <p class="text-lg font-semibold mb-2">Location Information</p>
  <div class="grid grid-cols-2 gap-2">
    <p class="text-gray-700"><strong>Location Name:</strong></p>
    <p class="text-gray-900">{{ locationResult.location.name }}</p>
    <p class="text-gray-700"><strong>Location Type:</strong></p>
    <p class="text-gray-900">{{ locationResult.location.type }}</p>
    <p class="text-gray-700"><strong>Location Dimension:</strong></p>
    <p class="text-gray-900">{{ locationResult.location.dimension }}</p>
    <p class="text-gray-700"><strong>Location Created:</strong></p>
    <p class="text-gray-900">{{ locationResult.location.created }}</p>
  </div>
</div>


<h2 class="mt-10 text-4xl text-center font-bold text-gray-800 border-b-4 border-gray-800 py-2">Residents</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-screen-xl mx-auto px-4">
  <div v-for="resident in locationResult.location.residents" :key="resident.id" class="border border-gray-300 rounded-lg shadow-2xl overflow-hidden">
    <img :src="resident.image" :alt="resident.name" class="w-full h-auto object-cover" />
    <div class="p-4">
      <p><strong>Name:</strong> {{ resident.name }}</p>
      <p><strong>Status:</strong> {{ resident.status }}</p>
      <p><strong>Species:</strong> {{ resident.species }}</p>
      <p><strong>Gender:</strong> {{ resident.gender }}</p>
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
  const locationId = ref(route.params.id);
  const GET_LOCATION_BY_ID = gql`
  query GetLocationById($id: ID!) {
    location(id: $id) {
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
`;

const { result: locationResult } = useQuery(GET_LOCATION_BY_ID, { id: locationId.value });

</script>
