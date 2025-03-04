<template>

  <div class="settings">

    <h2 class="title">Search Settings</h2>

    <div class="searchOption">

      <div class="searchItem">

        <div class="description">

          <h3>Instrument</h3>

          <p>Instrument of fingerings.</p>

        </div>

        <select name="" id="input1" @change="((event) => this.$emit('instrument-update', event.target.value))">
          <option value="Guitar">Guitar</option>
          <option value="Guitar (7-string)">Guitar (7-string)</option>
          <option value="Ukulele">Ukulele</option>
        </select>

      </div>

      <div class="searchItem">

        <div class="description">

          <h3>Max Fret Span</h3>

          <p>Maxinum span of frets in the fingering.</p>

        </div>

        <input type="number" name="" id="input2" value="5" @change="((event) => this.$emit('span-update', event.target.value))">

      </div>

      <div class="searchItem">

        <div class="description">

          <h3>Omit Incomplete Chord</h3>

          <p>Wheather if to omit the fingerings that does not include all the notes in the chord.</p>

        </div>

        <div id="input3">

          <input type="checkbox" name="" checked @change="((event) => this.$emit('omit-update', event.target.checked))">

        </div>

      </div>

    </div>

  </div>

</template>

<script>

export default {

  name: 'SearchSettings',

  data() {

    return {

    }

  },

  methods: {

  }

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

h2 {
  color: #3e4c57;
  text-align: center;
  font-family: "Roboto Condensed", Helvetica;
  font-size: 1.5em;
  font-weight: 500;
}

.searchOption {
  display: flex;
  flex-direction: column;
}

.searchItem {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto Condensed", Helvetica;
  margin: 0.8% 0;
}

.searchItem .description {
  width: 300px;
  margin-right: 1%;
}

.searchItem .description h3 {
  color: #274C77;
  font-size: 1.5em;
}

.searchItem .description p {
  color: #6096BA;
  font-size: 1em;
}

#input1, #input2, #input3 {
  height: 40px;
  width: 120px;
  text-align: center;
  font-family: "Roboto Condensed", Helvetica;
  font-size: 1.5em;
  box-sizing: border-box;
}

#input1, #input2 {
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

#input3 {
  position: relative;
}

#input3 input {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

</style>