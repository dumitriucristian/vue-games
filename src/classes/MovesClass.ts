import { reactive } from  'vue';

export default class Moves {
    
  state;

  constructor(){
    this.state =  reactive({
      //moves initializers
      totalMoves: 0,
      wrongMoves: 0,
      goodMoves: 0
    })
  }
  
  addGoodMove() {
    this.state.goodMoves++;
    this.state.totalMoves++;
    console.log("addGoodMove:" , this.state.goodMoves);
  }

  addWrongMove() {
    this.state.wrongMoves++;
    this.state.totalMoves++;
    console.log("addWrongMove:" , this.state.wrongMoves);
  }

}