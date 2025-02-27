<template>
    <div>
        <el-dropdown>
      <span class="el-dropdown-link">
        <el-icon size="20" class="el-icon--right">
          <Close />
        </el-icon>
        <span class="close-text">关闭</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="closeCurrent">关闭当前</el-dropdown-item>
          <el-dropdown-item @click="closeLeft">关闭左侧</el-dropdown-item>
          <el-dropdown-item @click="closeRight">关闭右侧</el-dropdown-item>
          <el-dropdown-item @click="closeAll">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    </div>
</template>

<script setup lang="ts">
import { useTabsStore } from '@/store/tabs';
import type { Tab } from '@/store/tabs';
import { computed ,ref, watch,onMounted} from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { useRouter,useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
const store = useTabsStore()




const closeCurrent = () => {
    const path = route.path
    // 如果删除的是首页，则不进行操作
    if(path === '/dashboard'){
        return
    }

    const tabs = store.getTabs

    let pathName = route.path

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
    store.tabs = tabs.filter((tab) => tab.path !== path);
    // 从store中删除选项卡
    store.removeTab(path)
    // 路由跳转到新的激活选项卡或首页
    router.push({ path: pathName })
};

const closeLeft = () => {
    const path = route.path;
  //找到当前路由的索引
  let index = store.tabs.findIndex(item=>item.path === path);
  store.tabs.splice(1,index-1)
};

const closeRight = () => {
    const path = route.path;
  //找到当前路由的索引
  let index = store.tabs.findIndex(item=>item.path === path);
  store.tabs.splice(index+1)
};

const closeAll = () => {
    store.tabs.splice(0,store.tabs.length)
  //跳转首页
  router.push({path:'/dashboard'})
};
</script>

<style scoped lang="scss">
.close {
  width: 100px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #e4e7ed;
  padding-right: 20px;
}

:deep(.el-dropdown-link) {
    margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100px;
  flex-direction: row;
}

:deep(.close-text) {
  margin-left: 8px;
  display: flex;
  align-items: center;
  text-decoration: none;
}
:deep(.el-tabs__header is-top) {
    text-decoration: none;
}
:deep(.el-dropdown-link:focus) {
    outline: none;
}
</style>