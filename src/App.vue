<template>

  <IntroPart/>

  <ChordSettings/>

</template>

<script>
import IntroPart from './components/Intro.vue'
import ChordSettings from './components/ChordSettings.vue'

export default {
  name: 'App',
  components: {
    IntroPart,
    ChordSettings
  }
}
</script>

<style>

ChordSettings {
  background-color: black;
}

</style>
