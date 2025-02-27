<template>

  <div class="settings">

    <h2>Select Chord</h2>

    <div class="selection">

      <div v-for="(option, index) in dropdownOptions" :key="index" class="dropdown">

        <p :for="option.id">{{ option.label }}</p>

        <select :id="option.id" @input="event => { chord[index] = event.target.value; updateChord(); }">

          <option v-for="(item, idx) in option.values" :key="idx" :value="item.value">
            {{ item.label }}
          </option>

        </select>

      </div>

    </div>

    <h1 v-html="chordDisplay" id="chord"></h1>

  </div>

</template>

<script>
export default {

  name: 'ChordSettings',

  data() {

    return {

      dropdownOptions: [
        {
          id: 'root',
          label: 'Root',
          values: [
            { value: 'C', label: 'C' },
            { value: 'D', label: 'D' },
            { value: 'E', label: 'E' },
            { value: 'F', label: 'F' },
            { value: 'G', label: 'G' },
            { value: 'A', label: 'A' },
            { value: 'B', label: 'B' }
          ]
        },
        {
          id: 'accidental',
          label: 'Accidental',
          values: [
            { value: '', label: '♮' },
            { value: '\u266F', label: '♯' },
            { value: '\u266D', label: '♭' }
          ]
        },
        {
          id: 'quality',
          label: 'Quality',
          values: [
            { value: '', label: 'major' },
            { value: 'm', label: 'minor' },
            { value: 'dim', label: 'diminished' },
            { value: 'aug', label: 'augmented' },
            { value: 'sus\u200B2', label: 'sus2' },
            { value: 'sus\u200B4', label: 'sus4' }
          ]
        },
        {
          id: 'extension',
          label: 'Extension',
          values: [
            { value: '', label: '---' },
            { value: '7', label: '7' },
            { value: '9', label: '9' },
            { value: '11', label: '11' },
            { value: '13', label: '13' },
            { value: 'maj\u200B7', label: 'maj7' },
            { value: 'maj\u200B9', label: 'maj9' },
            { value: 'maj\u200B11', label: 'maj11' },
            { value: 'maj\u200B13', label: 'maj13' },
            { value: 'add\u200B9', label: 'add9' },
          ]
        }
      ],

      chord: ["C", "", "", ""],

      chordDisplay: 'C'

    }

  },

  methods: {
    updateChord() {

      let chord = JSON.parse(JSON.stringify(this.chord)) // deep copy chord

      if (chord[2] !== "" && (chord[3].includes("maj") || chord[3].includes("add"))) { // add brakets, ex. Cm(maj7)
        if (chord[2].includes("sus")) { // swap for sus
          chord[2] = `(${chord[2]})`
        } else {
          chord[3] = `(${chord[3]})`
        }
      }

      if (chord[3].includes("maj") || chord[3].includes("add")) { // superior for maj & add
        chord[3] = `<sup>${chord[3]}</sup>`
      }
      if (chord[2].includes("dim") || chord[2].includes("aug") || chord[2].includes("sus")) { // superior for dim, aug & sus
        chord[2] = `<sup>${chord[2]}</sup>`
      }
      if (chord[2].includes("sus")) { // swap for sus
        [chord[2], chord[3]] = [chord[3], chord[2]];
      }

      this.chordDisplay = chord.join("")

      console.log(this.chordDisplay)
      console.log(this.chord)

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

.settings {
  min-width: 50%;
}

h2 {
  color: #3e4c57;
  text-align: center;
  font-family: "Roboto Condensed", Helvetica;
  font-size: 1.5em;
  font-weight: 500;
}

.selection {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.dropdown {
  margin: 1%;
  text-align: center;
}

.dropdown p {
  font-family: "Roboto Condensed", Helvetica;
  margin: 5% 0;
  color: #6096BA;
}

.dropdown select {
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  height: 50px;
  min-width: 70px;
  text-align: center;
  font-family: "Roboto Condensed", Helvetica;
  font-size: 2em;
}

#quality, #extension {
  font-size: 1.3em;
}

#chord {
  font-family: "Campania";
  text-align: center;
  font-size: 5em;
  color: #274C77;
}

</style>
