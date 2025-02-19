import {defineStore} from "pinia";

export const useMenuStore = defineStore('menuStore',{
    state:()=>{
        return {
            collapse:false
        }
},
getters:{
    getCollapse: (state) => state.collapse
},
actions:{
    setIsCollapse(collapse:boolean){
        this.collapse = collapse;
    }
}
})  
