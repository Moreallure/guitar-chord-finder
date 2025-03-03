<template>

  <IntroPart/>

  <ChordSelect/>

  <SearchSettings/>

  <ChordListings/>

</template>

<script>
import IntroPart from './components/Intro.vue'
import ChordSelect from './components/ChordSelect.vue'
import SearchSettings from './components/SearchSettings.vue'
import ChordListings from './components/ChordListings.vue'

export default {
  name: 'App',
  components: {
    IntroPart,
    ChordSelect,
    SearchSettings,
    ChordListings
  }
}
</script>

<style>

body {
  background-color: #e7ecef;
}

</style>
