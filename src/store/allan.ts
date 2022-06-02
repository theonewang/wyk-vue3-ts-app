// src/store/index.ts
import { defineStore } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';

interface AllanState {
    moveList:string[]
}
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const allanStore = defineStore('allan',{
    // state: 返回对象的函数
    state: (): AllanState => ({
        moveList:['泰坦尼克号','绿皮书']
    }),
    getters: {},
    actions: {
        
    },
    // 持久化
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'allan',
                storage: localStorage,
                // storage: sessionStorage,
            }
        ]
    }
});