<template>
    <div id="answers">
        <div>
            <h3>{{title}}</h3>
            <div>
                <div v-for="(answer, index) in answers" :key="index" class="answer">
                    <span>Index: {{ index }} </span>
                    <span>Answer: {{answer[0]['name']}} </span>
                    <span>Value: {{answer[0]['number']}} </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    interface Tile {
        number: number;
        name: string;
    }
    
    type Answer = [Tile, Tile];

    interface Props {
        answers: Answer[],
        title: string,
      

    }

    const props = defineProps<Props>();
</script>

<style scoped>
#answers{
  display:flex;
  text-align: left;
}
.answer span{
  padding: 5px;
  width: 110px;
}
</style>