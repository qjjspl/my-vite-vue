<template>
    <template v-for="menu in menuList" :key="menu.path">
      <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
        <template #title>
          <el-icon>
            <component :is="menu.meta.icon"></component>
          </el-icon>
          <span>{{ menu.meta.title }}</span>
        </template>
        <menu-item :menuList="menu.children"></menu-item>
      </el-sub-menu>
      <el-menu-item style="color: #f4f4f5" v-else :index="menu.path">
        <el-icon>
          <component :is="menu.meta.icon"></component>
        </el-icon>
        <template #title>{{ menu.meta.title }}</template>
      </el-menu-item>
    </template>
  </template>
  
  <script setup lang="ts">
  defineProps(["menuList"]);
  </script>
  
  <style scoped></style>