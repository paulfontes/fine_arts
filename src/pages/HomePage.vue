<script setup>
import App from '@/App.vue';
import { AppState } from '@/AppState.js';
import ArtCard from '@/components/ArtCard.vue';
import { artsServices } from '@/services/ArtsServices.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

onMounted(() => {
  getArt()
})



const artWorks = computed(() => AppState.artworks)
const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPage)


async function getArt() {
  try {
    artsServices.getArt()
  } catch (error) {
    Pop.error
    logger.log('Ran into an error getting Art!', error)
  }
}

function changePage(pageNumber) {
  try {
    logger.log('changing page to ' + pageNumber)
    artsServices.changePage(pageNumber)
  }
  catch (error) {
    Pop.error(error);
    logger.error('Could not get right page', error)
  }
}




</script>

<template>
  <section class="container">
    <section class="row">
      <div class="col-12">
        <h1>Artworks</h1>
        <hr />
      </div>
      <div class="col-3">
        <button type="button" :disabled="currentPage == 1" @click="changePage(currentPage - 1)">Previous Page</button>
      </div>
      <div class="col-2">
        <p>{{ currentPage }} of {{ totalPages }} pages</p>
      </div>
      <div class="col-3">
        <button :disabled="currentPage >= totalPages" @click="changePage(currentPage + 1)">Next Page</button>
      </div>

    </section>
    <section class="row">
      <div v-for="art in artWorks" :key="art.id" class="col-md-4 g-4">
        <ArtCard :artProp="art" />
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss"></style>
