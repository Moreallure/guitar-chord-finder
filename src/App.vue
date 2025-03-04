<template>

  <IntroPart/>

  <ChordSelect  @chord-update="handleChordNotes" />

  <SearchSettings @instrument-update="handleStringNotes" @span-update="handleMaxSpan" @omit-update="handleOmitIncomplete" />

  <SearchButton @button-click="handleSearch" />

  <ChordListings :chords="chords" :chordName="chordName" />

</template>

<script>
import IntroPart from './components/Intro.vue'
import ChordSelect from './components/ChordSelect.vue'
import SearchSettings from './components/SearchSettings.vue'
import SearchButton from './components/SearchButton.vue'
import ChordListings from './components/ChordListings.vue'

import { getPossibleChords } from './algorithm'

import { ref } from 'vue';

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

    const chords = ref([]);
    const chordName = ref("")

    let chordNotes = ["C", "E", "G"];
    let stringNotes = [5, 10, 3, 8, 12, 5];
    let fretsNum = 24;
    let maxSpan = 5;
    let omitIncomplete = true;

    const handleSearch = () => {
      // console.log(fretsNum, stringNotes, chordNotes, maxSpan, omitIncomplete)
      chords.value = getPossibleChords(fretsNum, stringNotes, chordNotes, maxSpan, omitIncomplete)
      console.log(chords.value)
    }

    const handleChordNotes = (notes, name) => {
      console.log(name)
      chordNotes = notes
      chordName.value = name
    };

    const handleStringNotes = (selected) => {
      switch (selected) {
        case "Guitar":
          stringNotes = [5, 10, 3, 8, 12, 5];
          break;
        case "Guitar (7-string)":
          stringNotes = [12, 5, 10, 3, 8, 12, 5]
          break;
        case "Ukulele":
          stringNotes = [8, 1, 5, 10]
      }
      // console.log(stringNotes)
    };

    const handleMaxSpan = (value) => {
      maxSpan = value
    };

    const handleOmitIncomplete = (value) => {
      omitIncomplete = value
    };

    return {
      handleSearch,
      handleChordNotes,
      handleStringNotes,
      handleMaxSpan,
      handleOmitIncomplete,
      chordName,
      chords
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
