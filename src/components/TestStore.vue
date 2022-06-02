<script setup lang="ts">
import { GlobalStore } from "@/store";
const global = GlobalStore();
const addNumber = () => {
  //第一种
  // global.num++
  //第二种
  // global.$patch({
  //     num:global.num+1,
  //     token:global.token+Math.random()
  // })
  //第三种
  global.changeState();
  
};
console.log(global);
</script>
<template>
  <div>{{ global.token }}</div>
  <div>{{ global.num }}</div>
  <button @click="addNumber">+1</button>
  <div v-for="item in global.getAllanStoreList" :key="item" >{{ item }}</div>
</template>
<style lang="less" scoped>
div {
  color: @primary-color; // 主题色
}
</style>