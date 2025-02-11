<template>
  <el-button type="primary" size="default" @click="addbtn">新增</el-button>
  
  <div>   
    <h1>Hello World</h1>
{{ count }}

  </div> 
</template>

<script setup lang="ts">
import {testStore} from '@/store/test/index.ts'
import { computed } from 'vue';
//获取store
const store = testStore()
//count展示到页面
const count = computed(()=>{
  return store.getCount;
})
//点击按钮改变count的值
const addbtn = () => {
  store.setCount(store.getCount + 1);
}
</script>

<style scoped>

</style>