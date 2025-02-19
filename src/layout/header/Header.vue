<template>
  <Collapse></Collapse>
    
    <BreadCrumb></BreadCrumb>
  </template>
  <script setup lang="ts">
  import { ref,reactive} from 'vue';
  import Collapse from "@/layout/header/Collapse.vue";
  import BreadCrumb from "@/layout/header/BreadCrumb.vue";
  </script>
  <style scoped lang='scss'>
  </style>