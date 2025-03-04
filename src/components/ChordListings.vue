<template>

  <div class="result">


    <h1>Fingerings for <span class="chord">{{ chordName }}</span> <span class="count">({{ items.length }} found)</span></h1>


  </div>

</template>

<script>

export default {
  name: 'ChordListings',
  data() {
    return {
      chordName: "C",
      items: []
    }
  }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

@font-face {
  font-family: 'Campania';
  src: url('@/assets/Campania.woff') format('woff');
}

.result {
  width: 70%;
  margin: auto;
  font-family: "Roboto Condensed", Helvetica;
}

.result h1 {
  font-size: 3em;
}

.result h1 .chord {
  font-family: "Campania";
}

.result h1 .count {
  font-size: 0.7em;
}

</style>
