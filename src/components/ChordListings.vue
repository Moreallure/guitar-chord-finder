<template>

  <div class="result" v-if="chordName !== ''">

    <h1>Fingerings for <span class="chord" v-html="chordName"></span> <span class="count">({{ chords.length }} found)</span></h1>

    <div class="listings">

      <div class="item" v-for="(item, chordIndex) in chords" :key="chordIndex">

        <div class="note" v-for="(note, noteIndex) in item" :key="noteIndex">
          <h2>{{ note }}</h2>
          <h3>{{ chordsInNotes[chordIndex][noteIndex] }}</h3>
        </div>

      </div>

    </div>

  </div>

</template>

<script>

export default {

  name: 'ChordListings',

  props: {
    chords: {
      type: Array,
      default: () => []
    },
    chordsInNotes: {
      type: Array,
      default: () => []
    },
    chordName: {
      type: String,
      default: ''
    }
  }

}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

@import url('https://fonts.font.im/css?family=Open+Sans+Condensed:300');

@font-face {
  font-family: 'Campania';
  src: url('@/assets/Campania.woff') format('woff');
}

.result {
  width: 80%;
  margin: auto;
  font-family: "Roboto Condensed", Helvetica;
}

.result h1 {
  font-size: 2.3em;
  margin: 0 0.5rem;
  color: #153356;
}

.result h1 .chord {
  font-family: "Campania";
  font-size: 1.5em;
}

.result h1 .count {
  font-size: 0.7em;
  color: #8b9aab;
}

.listings {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.item {
  background-color: #7a97aa;
  color: #e7ecef;
  border-radius: 7px;
  margin: 0.4rem;
  padding: 0.8rem;
  padding-bottom: 1.7rem;
  display: inline-block;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item .note {
  display: inline-block;
  width: 40px;
  text-align: center;
  font-size: 1.3rem;
}

.item .note h2 {
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 800;
  letter-spacing: 0;
}

.item .note h3 {
  font-family: "Campania";
  line-height: 0.8em;
  font-size: 1em;
  font-weight: 300;
}

@media screen and (max-width: 640px) {

  .result h1 {
    font-size: 2em;
    line-height: 1em;
  }

  .result h1 .chord {
    font-size: 1.5em;
  }

  .result h1 .count {
    font-size: 0.7em;
  }

}

</style>
