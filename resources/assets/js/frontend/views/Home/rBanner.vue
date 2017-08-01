<script>
export default {
    name: 'Banner',
    computed: {
        src() {
            return this.$store.getters['Config/key']['banner_src']['value']
        },
        url() {
            return this.$store.getters['Config/key']['banner_url']['value']
        }
    },
    methods: {
        go() {
            window.location.href = this.url
        }
    }
}
</script>

<template>
    <v-container fluid>
        <h1 class="text-xs-center">
            <a :href="url" class="headline white--text " style="text-decoration: none">Confira a rádio no giro esportivo</a>
        </h1>
        <v-parallax :src="src" style="cursor: pointer" @click.native="go">
            <v-layout column align-center justify-center>
            </v-layout>
        </v-parallax>
    </v-container>
</template>
