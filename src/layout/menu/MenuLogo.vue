<template>
    <div class="logo">
        <img src="@/assets/MenuLogo.png" alt="logo">
        <span v-if="show" class="logo-title">{{title}}</span>
    </div>
</template>

<script setup lang="ts">
import {ref,watch} from "vue"
import {useMenuStore} from "@/store/menu";
const menuStore = useMenuStore();
const title = ref("XX管理系统")
// const show = computed(()=>{return menuStore.getCollapse});
//解决伸缩僵硬问题：延时
const show = ref(true);
watch(
()=>menuStore.getCollapse,
(collapse:boolean)=>{
  if(!collapse){
     setTimeout(()=>{
        show.value = !collapse;
    },300)
  }else{
    show.value =!collapse;
  }
}
)
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #2b2f3a;
  text-align: center;
  cursor: pointer;
  align-items: center;
  img{
    width: 50px;
    height: 50px;
    margin-right: 5px;
    margin-left: 5px;
  }
  .logo-title{
    color: #FFF;
    font-weight: 800;
    line-height: 60px;
    font-size: 22px;
    font-family: FangSong;
  }
}
</style>  

