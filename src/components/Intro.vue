<template>

  <div class="intro">

    <h1>Guitar Chord Searcher</h1>

    <h2>A Tool for Guitarists to Find Fingerings of a Chord</h2>

    <a href="#">A Moreallure Project</a>

  </div>

</template>

<script>

export default {
  name: 'IntroPart'
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.intro {
  padding: 7vh 0;
  width: 100%;
  text-align: center;
}

h1 {
  font-family: "Archivo Black", Helvetica;
  font-size: 3.5em;
  color: #1e3f65;
  padding: 0 10%;
  line-height: 1em;
}

h2 {
  font-family: "Roboto Condensed", Helvetica;
  font-weight: 400;
  font-size: 1.7em;
  margin-top: 1%;
  color: #3e7191;
  margin-bottom: 2%;
}

a {
  font-family: "Montserrat", Helvetica;
  text-decoration: none;
  font-size: 1em;
  font-weight: 400;
  color: #8B8C89
}

a:hover {
  color: #000000
}

@media screen and (max-width: 640px) {

  .intro {
    padding: 5vh 0;
  }

  h1 {
    font-size: 10vw;
    margin: 5%;
  }

  h2 {
    font-size: 5.5vw;
    margin-top: 5%;
    padding: 0 10%;
  }

  a {
    font-size: 4vw;
  }

}

</style>
