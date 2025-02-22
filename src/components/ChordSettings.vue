<template>

  <div class="settings">

    <h2>Select Chord:</h2>

    <div class="method1">

      <div v-for="(option, index) in dropdownOptions" :key="index" class="dropdown">

        <p :for="option.id">{{ option.label }}</p>

        <select :id="option.id" @input="event => { chord[index] = event.target.value; updateChord(); }">

          <option v-for="(item, idx) in option.values" :key="idx" :value="item.value">
            {{ item.label }}
          </option>

        </select>

      </div>

    </div>

    <h1 id="chord">{{ chordDisplay }}</h1>

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
            { value: '', label: '♯' },
            { value: '', label: '♭' }
          ]
        },
        {
          id: 'quality',
          label: 'Quality',
          values: [
            { value: '', label: 'Major' },
            { value: 'm', label: 'Minor' },
            { value: '', label: 'Diminished' },
            { value: '', label: 'Augmented' }
          ]
        },
        {
          id: 'extension',
          label: 'Extension',
          values: [
            { value: '', label: 'None' },
            { value: '7', label: '7' },
            { value: '9', label: '9' },
            { value: '11', label: '11' },
            { value: '13', label: '13' }
          ]
        }
      ],

      chord: ["C", "", "", ""],

      chordDisplay: 'C'

    }

  },

  methods: {
    updateChord() {
      this.chordDisplay = this.chord.join("");
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
  width: 100%;
  padding-bottom: 3%;
  background-color: #e7ecef;
}

h2 {
  color: #3e4c57;
  width: 30%;
  margin: auto;
}

.method1 {
  display: flex;
  width: 30%;
  height: 15vh;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

.dropdown {
  margin: 1%;
  text-align: center;
}

.dropdown p {
  width: 100%;
  font-family: "Roboto Condensed", serif;
  margin: 5% 0;
  color: #6096BA;
}

select {
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  height: 50px;
  min-width: 70px;
  text-align: center;
  font-family: "Roboto Condensed", serif;
  font-size: 2em;
}

#quality, #extension {
  font-family: "Roboto Condensed", serif;
  font-size: 1.3em;
}

#chord {
  font-family: "Campania";
  text-align: center;
  font-size: 5em;
  color: #274C77;
}

</style>
