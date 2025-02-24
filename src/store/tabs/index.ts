// @ts-ignore
import { defineStore } from 'pinia'

// 定义选项卡数据类型接口
export type Tab = {
    title: string,  // 选项卡标题
    path: string,   // 选项卡对应路由路径
}

// 定义状态数据类型接口
export type TabsState = {
    tabs: Tab[],    // 选项卡数组
}

// 定义并导出选项卡状态管理store
export const useTabsStore = defineStore('tabStore', {

 
  // 定义状态初始值
  state: (): TabsState => {
    return {
        tabs: []    // 初始化空数组
    }
  },

  // 定义getter方法
  getters: {
    // 获取选项卡数组
    getTabs: (state) => state.tabs,
  },

  // 定义操作方法
  actions: {
    /**
     * 添加新选项卡
     * @param tab 要添加的选项卡对象
     * @description 如果选项卡不存在则添加到数组中
     */
    addTab(tab: Tab) {
         const hasTab = this.tabs.some(t => t.path === tab.path)
         if(!hasTab){
            this.tabs.push(tab)
         }
    },

    /**
     * 删除指定选项卡
     * @param path 要删除的选项卡的路由路径
     * @description 过滤掉匹配路径的选项卡
     */
    removeTab(path: string) {
        this.tabs = this.tabs.filter(tab => tab.path !== path)
    },

    /**
     * 清空所有选项卡
     * @description 将选项卡数组重置为空数组
     */
    clearTabs(){
        this.tabs = []
    },
  },
  persist: {
    enabled: true,
    strategies: [
        { storage: localStorage, paths: ['tabs'] }
    ]
}
})  

