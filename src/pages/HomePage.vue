<script setup>
import { artsServices } from '@/services/ArtsServices.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';

onMounted(() => {
  getArt()
})


async function getArt() {
  try {
    artsServices.getArt()
  } catch (error) {
    Pop.error
    logger.log('Ran into an error getting Art!', error)
  }


}

</script>

<template>
  Art
</template>

<style scoped lang="scss"></style>
