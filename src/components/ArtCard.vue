<script setup>
import { Artwork } from '@/models/Artwork.js';



defineProps({
    artProp: { type: Artwork, required: true }
})
</script>


<template>
    <div class="card">
        <div class="card-img-top">
            <img :src="artProp.imgUrls.regular" alt="" class="img-fluid card-img">
        </div>
    </div>
</template>


<style lang="scss" scoped></style>