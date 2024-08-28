<script setup="ts">


import Answers from './Answers.vue';
import Moves from './Moves.vue';
import TileGame from '../classes/TileGameClass.ts';


// Create an instance of the TileGame class
const game = new TileGame();


// Bind the class properties to the component
const tiles = game.tiles;



const correctAnswers = game.correctAnswers;
const wrongAnswers = game.wrongAnswers;

// Bind the connect method
const connect = (tile, index) => game.connect(tile, index);


</script>

<template>
  <div id="numbers">
    <div v-for="(tile, index) in tiles" :key="index" >
      <span @click="connect(tile, index)" class="tile">{{ tile.name }}</span>
    </div>
  </div>

 <Moves :goodMoves="game.moves.state.goodMoves" :totalMoves="game.moves.state.totalMoves" :wrongMoves="game.moves.state.wrongMoves"/> 
 
 <Answers :answers="correctAnswers" title="Good Answers"/>
 <Answers :answers="wrongAnswers" title="Wrong answers"/>

</template>

<style scoped>
.tile{
  width:50px;
  height:50px;
  margin:5px;
  padding:5px;
}
#numbers{
  display: grid;
    grid-template-columns: 1fr 1fr;
}


</style>
