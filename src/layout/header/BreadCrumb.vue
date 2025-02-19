<!-- 面包屑导航 -->
<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item class="bred"
                v-for="(item, index) in tabs" 
                :key="index"
                :to="item.path"
            >
                {{ item.meta.title }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup lang="ts">
import type {Ref} from 'vue';
import type {RouteLocationMatched } from 'vue-router';
import {ref,watch } from 'vue';
import  { useRoute} from 'vue-router';
const route = useRoute();
//定义面包屑导航数据
const tabs : Ref<RouteLocationMatched[]> = ref([]);
//获取面包屑数据
const getBreadcrumb = () => {
    let matched = route.matched.filter(item => item.meta?.title);
    const firstRoute = matched[0];
    
    if (!firstRoute || firstRoute.path !== '/dashboard') {
        matched = [{
            path: '/dashboard',
            meta: { title: '首页' }
        } as unknown as RouteLocationMatched].concat(matched);
    }
    
    tabs.value = matched;
}
//获取面包屑数据
getBreadcrumb();
//监听路由变化
watch(route,getBreadcrumb);

</script>

<style scoped lang="scss">
.bred{
    margin-left: 20px;
}
:deep(.el-breadcrumb__inner){
    &:hover{
        color: #ba4585;
    }
}
// :deep(.el-breadcrumb__inner a){
//     color: #9ae438;
// }
:deep(.el-breadcrumb__inner a) {
  color: #7541bd !important;
}
</style>