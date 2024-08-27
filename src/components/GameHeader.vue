<template>
     <header>
    <div>
      Nr of total moves: <span>{{ totalMoves }}</span> 
    </div>
    <div>
      Nr of good moves: <span>{{ wrongMoves }}</span> 
    </div>
    <div>
      Nr of wrong moves: <span>{{ goodMoves }}</span> 
    </div>
  </header>
</template>

<script setup lang="ts">
  interface Props {
    totalMoves: number;
    goodMoves: number;
    wrongMoves: number;
  }

  const props = defineProps<Props>();
</script>