<!-- 折叠按钮 -->
<template>
    <el-icon  class="bred"  @click="SetCollapse" >
        <component :is="collapse ? 'Expand' : 'Fold'"></component>
    </el-icon>
</template>

<script setup lang="ts">
import {useMenuStore} from "@/store/menu";
import {computed} from "vue";
const menuStore = useMenuStore();
const collapse = computed(()=>menuStore.getCollapse);
const SetCollapse = ()=>{
    menuStore.setIsCollapse(!collapse.value);
}
</script>

<style scoped lang="scss">
.bred{
  font-size: 40px;
  transition: all 0.3s; // 添加过渡效果
    cursor: pointer; // 添加手型光标
    &:hover {
        color: #ba4585 !important;
        transform: scale(1.1); // 悬停时轻微放大
    }
}

</style>