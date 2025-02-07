// 从 pinia 中导入 defineStore 方法
import { defineStore } from "pinia";

// 定义并导出名为 testStore 的 store
export const testStore = defineStore('testStore',{
    // 定义状态，必须是箭头函数
    state: ()=>{
        return{
            count: 0  // 计数器初始值为 0
        }
    },
    // 定义 getter，类似于 Vue 的计算属性
    getters:{
        // 获取 count 的值
        getCount(state){
            return state.count
        }
    },
    // 定义 actions，用于修改状态
    actions:{
        // 设置 count 的值
        // @param count - 要设置的新数值
        setCount(count: number){
            console.log(count)  // 打印新的计数值
            this.count = count  // 更新状态
        }
    }
})