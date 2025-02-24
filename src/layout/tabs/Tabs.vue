<template>
    <el-tabs
    v-model="activeTab"
    type="card"
    editable
    class="demo-tabs"
    @tab-remove="removeTab"
    @tab-click="clickTab"
  >
    <el-tab-pane
      v-for="item in tabList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    >
      {{ item.title }}
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import type {Tab} from '@/store/tabs'
import { useTabsStore } from '@/store/tabs'
import { computed ,ref, watch,onMounted} from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { useRouter,useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
//获取store
const store = useTabsStore()
//选中选项卡数据
const activeTab = ref('')
//获取store
const tabList = computed(()=>store.getTabs)
//选项卡点击事件
const clickTab = (pane:TabsPaneContext)=>{
    console.log(pane)
    const {props} = pane
    //跳转路由
    router.push({path:props.name as string})

}
/**
 * 删除选项卡处理函数
 * @param path 要删除的选项卡的路由路径
 * @description 
 * 1. 如果删除的是当前激活的选项卡，则需要选择新的激活选项卡
 * 2. 优先选择左侧选项卡，如果没有左侧选项卡则选择右侧选项卡
 * 3. 更新激活选项卡
 * 4. 从store中删除选项卡
 * 5. 路由跳转到新的激活选项卡
 */
const removeTab = (path: string) => {
    const tabs = tabList.value
    let pathName = activeTab.value

    // 如果删除的是当前激活的选项卡，需要选择新的激活选项卡
    if (pathName === path) {
        tabs.forEach((tab: Tab, index: number) => {
            if (tab.path === path) {
                // 优先选择左侧选项卡，没有则选择右侧选项卡
                const nextTab = tabs[index - 1] || tabs[index + 1]
                if (nextTab) {
                    pathName = nextTab.path
                } else {
                    // 如果没有其他选项卡，跳转到首页
                    pathName = '/dashboard'
                }
            }
        })
    }

    // 更新激活的选项卡
    activeTab.value = pathName
    // 从store中删除选项卡
    store.removeTab(path)
    // 路由跳转到新的激活选项卡或首页
    router.push({ path: pathName })
}
//添加
const addTab = ()=>{
    const {path,meta} = route;
    console.log(path,meta)
    const tab:Tab = {
       path:path,
       title:meta.title as string
    }
    store.addTab(tab)
}
//监听路由变化
watch(()=>route.path,()=>{
    setActiveTab()
    addTab()
})
//设置选中选项卡
const setActiveTab = ()=>{
    activeTab.value = route.path
}
onMounted(()=>{
    setActiveTab()
    addTab()
})



</script>

<style scoped lang="scss">
:deep(.el-tabs__header) {
  margin: 0px;
}
:deep(.el-tabs__item) {
  height: 26px !important;
  line-height: 26px !important;
  text-align: center !important;
  border: 1px solid #d8dce5 !important;
  margin: 0px 3px !important;
  color: #495060;
  font-size: 12px !important;
  padding: 0xp 10px !important;
}
:deep(.el-tabs__nav) {
  border: none !important;
}
:deep(.is-active) {
  border-bottom: 1px solid transparent !important;
  border: 1px solid #42b983 !important;
  background-color: #42b983 !important;
  color: #fff !important;
}
:deep(.el-tabs__item:hover) {
  color: #495060 !important;
}
:deep(.is-active:hover) {
  color: #fff !important;
}
:deep(.el-tabs__nav-next){
  line-height: 26px !important;
}
:deep(.el-tabs__nav-prev){
  line-height: 26px !important;
}
</style>