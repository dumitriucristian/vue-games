
<template>
  <header>
    <div>
      Nr of total moves: <span>{{ totalMoves }}</span> 
    </div>
    <div>
      Nr of good moves: <span>{{ goodMoves }}</span> 
    </div>
    <div>
      Nr of wrong moves: <span>{{ wrongMoves }}</span> 
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


const props = defineProps({
  totalMoves: Number,
  goodMoves: Number,
  wrongMoves: Number
});

</script>