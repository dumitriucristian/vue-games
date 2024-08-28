import { ref } from  'vue';
import Moves from '../classes/MovesClass';

interface Tile {
  number: number,
  name: string
}

export default class TileGame {

  //answers initializers with default empty array of type Tile
  correctAnswers = ref<Tile[][]>([]);
  wrongAnswers = ref<Tile[][]>([]);
  title =ref<string>();

  //selection initializers
  firstSelection = ref<Tile | null>(null);
  secondSelection = ref<Tile | null>(null);

  firstIndex = ref<number | null>(null);
  secondIndex = ref<number | null>(null);

  tiles = ref<Tile[]>([
    {
      number:0, name: "zero"
    },
    {
      number:1, name: "un"
    },
    {
      number:2, name: "dos"
    },
    {
      number:3, name: "tres"
    },
    {
      number:4, name: "quatro"
    },
    {
      number:0, name: "0"
    },
    {
      number:1,name: "1"
    },
    {
      number:2, name: "2"
    },
    {
      number:3, name: "3"
    },
    {
      number:4, name: "4"
    }
  ]);

  moves;
  constructor(){
    this.moves = new Moves();
    this.shuffle();

    
  }

  connect(tile: Tile, index: number){
      this.setSelection(tile, index);
      //check the answers

      if (this.firstSelection.value && this.secondSelection.value) {

        //if same selection made twice
        if (this.firstSelection.value.name === this.secondSelection.value.name) {
          this.resetSelections();
        //check for correctanswer 
        }else  if(this.firstSelection.value.number === this.secondSelection.value.number)  {

          this.addCorrectAnswer();
          this.removeTile();
          this.resetSelections();
          this.shuffle();
          this.moves.addGoodMove();
        
        }else{
          //increment wrong moves
          this.addWrongAnswer();
          this.resetSelections();
          this.moves.addWrongMove();
        }
     // this.totalMoves.value++

      //show good moves and bad boves at the end
      if(this.tiles.value.length === 0) {
        console.log("game over");
        console.log("correct answers: " , this.correctAnswers.value);
        console.log("wrong answers: " ,  this.wrongAnswers.value);
      }
    }
    
  }

  setSelection(tile: Tile, index: number) {
  
    //set first selection
    if(this.firstSelection.value === null) {
      this.setFirstSelection(tile, index);

    }else{
      this.setSecondSelection(tile, index);

    }
  }

  setFirstSelection(tile: Tile, index: number)
  {
      //set tile
      this.firstSelection.value = tile;
      //set firstSelection index
      this.firstIndex.value = index;
      
  }

  setSecondSelection(tile: Tile, index: number)
  {
      //set tile
      this.secondSelection.value = tile;
      //set firstSelection index
      this.secondIndex.value = index;
  }

  removeTile(){
    //remove from tile
    if(this.firstIndex.value !== null)
    this.tiles.value.splice(this.firstIndex.value,1);
    //after splice decrement secondIndex.value because one element was removed

    if(this.secondIndex.value !== null && this.firstIndex.value !== null)  {
      if (this.secondIndex.value > this.firstIndex.value) this.secondIndex.value -= 1;
      this.tiles.value.splice(this.secondIndex.value, 1);
    }
   
  }

  private addCorrectAnswer()
  {
  //add correctAnswer
  if (this.firstSelection.value && this.secondSelection.value) {
    const correctAnswer = [this.firstSelection.value, this.secondSelection.value];
    this.correctAnswers.value.push(correctAnswer);
  }
  }

  private addWrongAnswer()
  {
  //add badAnswer
  if (this.firstSelection.value && this.secondSelection.value) {
    const wrongAnswer = [this.firstSelection.value, this.secondSelection.value];
    this.wrongAnswers.value.push(wrongAnswer);
  }


  }

  private resetSelections() {
    this.firstSelection.value = null;
    this.secondSelection.value = null;

  }

  private shuffle(){
    this.tiles.value = this.tiles.value.sort(() => Math.random() - 0.5);
  }


}