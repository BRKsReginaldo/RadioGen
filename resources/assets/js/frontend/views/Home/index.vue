<script>
import rTops from './rTops'
import rGallery from './rGallery'
import rSocial from './rSocial'
import rPoll from './rPoll'
export default {
    components: {
        rTops,
        rGallery,
        rSocial,
        rPoll,
    }
}
</script>

<style>
    img {
        max-width: 100%;
    }
</style>

<template>
    <div>
        <h1 class="headline white--text">Bem-Vindo</h1>
        <v-layout row-md column>
           <div class="p-5 mt-4">
               <div class="container">
                   <div class="row">
                       <div class="container">
                           <div class="row">
                               <img src="https://live.staticflickr.com/7882/47504465022_601d8a2a45_b.jpg" srcset="https://live.staticflickr.com/7882/47504465022_601d8a2a45_b.jpg 500w, https://live.staticflickr.com/7882/47504465022_601d8a2a45_b.jpg 800w, https://live.staticflickr.com/7882/47504465022_601d8a2a45_b.jpg 1024w" sizes="(min-width: 1024px) 1024px, 100vw">
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </v-layout>

        <v-layout row-md column>
            <v-flex md12 xs12>
                <r-social></r-social>
            </v-flex>
        </v-layout>
    </div>
</template>
