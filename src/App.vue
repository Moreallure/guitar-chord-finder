<template>

  <IntroPart/>

  <ChordSettings/>

  <ChordListings/>

</template>

<script>
import IntroPart from './components/Intro.vue'
import ChordSettings from './components/ChordSettings.vue'
import ChordListings from './components/ChordListings.vue'

export default {
  name: 'App',
  components: {
    IntroPart,
    ChordSettings,
    ChordListings
  }
}
</script>

<style>

body {
  background-color: #e7ecef;
}

</style>
