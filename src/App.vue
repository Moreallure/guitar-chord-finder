<template>

  <IntroPart/>

  <ChordSelect/>

  <SearchSettings/>

  <SearchButton @button-click="handleSearch" />

  <ChordListings/>

</template>

<script>
import IntroPart from './components/Intro.vue'
import ChordSelect from './components/ChordSelect.vue'
import SearchSettings from './components/SearchSettings.vue'
import SearchButton from './components/SearchButton.vue'
import ChordListings from './components/ChordListings.vue'

import { getPossibleChords } from './algorithm'

export default {
  name: 'App',
  components: {
    IntroPart,
    ChordSelect,
    SearchSettings,
    SearchButton,
    ChordListings
  },
  setup() {

    let chordNotes = ["C", "E", "G"];
    let stringNotes = [5, 10, 3, 8, 12, 5];
    let fretsNum = 24;
    let maxSpan = 5;
    let omitIncomplete = true;

    const handleSearch = () => {
      let chords = getPossibleChords(fretsNum, stringNotes, chordNotes, maxSpan, omitIncomplete)
      console.log(chords)
    }

    // const handleChordNotes = (notes) => {
    //   chordNotes = notes
    // };

    // const handleStringNotes = (selected) => {
    //   stringNotes = selected
    //   fretsNum = selected
    // };

    // const handleMaxSpan = (value) => {
    //   maxSpan = value
    // };

    // const handleOmitIncomplete = (value) => {
    //   omitIncomplete = value
    // };

    return {
      handleSearch
    };

  },
  methods: {

  }
}
</script>

<style>

body {
  background-color: #e7ecef;
}

</style>
