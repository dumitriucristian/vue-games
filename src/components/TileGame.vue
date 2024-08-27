<script setup="ts">

import GameHeader from './GameHeader.vue';
import Answers from './Answers.vue';
import TileGame from '../classes/TileGameClass.ts';
import {ref} from 'vue';


// Create an instance of the TileGame class
const game = new TileGame();

// Bind the class properties to the component
const tiles = game.tiles;
const totalMoves = game.totalMoves;
const wrongMoves = game.wrongMoves;
const goodMoves = game.goodMoves;
const correctAnswers = game.correctAnswers;
const wrongAnswers = game.wrongAnswers;

// Bind the connect method
const connect = (tile, index) => game.connect(tile, index);

/*const tiles = ref([
  {
    number:0,
    name: "zero"
  },
  {
    number:1,
    name: "un"
  },
  {
    number:2,
    name: "dos"
  },
  {
    number:0,
    name: "0"
  },
  {
    number:1,
    name: "1"
  },
  {
    number:2,
    name: "2"
  }
]);

//moves initializers
const totalMoves = ref(0);
const wrongMoves = ref(0);
const goodMoves  = ref(0);

//answers initializers
const correctAnswers = ref([]);
const wrongAnswers = ref([]);
const title =ref([]);

//selection initializers
const firstSelection = ref(null);
const secondSelection = ref(null);

let firstIndex = ref(null);
let secondIndex = ref(null);

function connect(tile, index)
{
    setSelection(tile, index);
    //check the answers

    if (firstSelection.value && secondSelection.value) {

      //if same selection made twice
      if (firstSelection.value.name === secondSelection.value.name) {
        resetSelections();
       //check for correctanswer 
      }else  if(firstSelection.value.number === secondSelection.value.number)  {

        addCorrectAnswer();
        removeTile();
        resetSelections();
        goodMoves.value++
      
      }else{
        //increment wrong moves
        wrongMoves.value++
        addWrongAnswer();
        resetSelections();
    }
    totalMoves.value++

    //show good moves and bad boves at the end
    if(tiles.value.length === 0) {
      console.log("game over");
      console.log("correct answers: " , correctAnswers.value);
      console.log("wrong answers: " ,  wrongAnswers.value);
    }
  }
  
}

function setSelection(tile, index) {
 
    //set first selection
    if(firstSelection.value === null) {
      setFirstSelection(tile, index);

    }else{
      setSecondSelection(tile, index);

    }
}

function setFirstSelection(tile, index)
{
      //set tile
      firstSelection.value = tile;
      //set firstSelection index
      firstIndex.value = index;
      
}

function setSecondSelection(tile, index)
{
      //set tile
      secondSelection.value = tile;
      //set firstSelection index
      secondIndex.value = index;
}

function removeTile(){
  //remove from tile
  tiles.value.splice(firstIndex.value,1);
  //after splice decrement secondIndex.value because one element was removed
  if (secondIndex.value > firstIndex.value) secondIndex.value -= 1;
  tiles.value.splice(secondIndex.value, 1);
}

function addCorrectAnswer()
{
  //add correctAnswer
  const correctAnswer = [firstSelection.value, secondSelection.value];
  correctAnswers.value.push(correctAnswer);
}

function addWrongAnswer()
{
  //add badAnswer
  const wrongAnswer = [firstSelection.value, secondSelection.value];
  wrongAnswers.value.push(wrongAnswer);


}

function resetSelections()
{
  firstSelection.value = null;
  secondSelection.value = null;

}
  */
</script>

<template>
  <div id="numbers">
    <div v-for="(tile, index) in tiles" :key="index" >
      <span @click="connect(tile, index)" class="tile">{{ tile.name }}</span>
    </div>
  </div>

 <GameHeader :totalMoves="totalMoves" :wrongMoves="wrongMoves" :goodMoves="goodMoves"/> 
 
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
