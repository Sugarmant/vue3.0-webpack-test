<template>
  <div>hello sworld</div>
  <span>step 1</span>
  <span>step 2</span>
  <span>step 3</span>
  <span>step 4</span>
  <span>step 5</span>
  <span>step 6</span>
  <span>step 78</span>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
    created(){
        const a:string = '123'
        console.log(a)
    }
})
export default class App extends Vue {

}
</script>

<style>
    div {
        color: red;
        background-color: blue;
        border: solid 4px pink;
    }
</style>    