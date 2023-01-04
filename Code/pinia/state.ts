import { defineStore } from "pinia";


export const Store1 = defineStore('Store1', {
    state: () => {
        return {
            sex: '男',
            height: 170,
            hobby: ['唱', '跳', 'rap']
        }
    },
    getters: {
        getSex() {
            return this.sex
        },
        getHeight(state): number {
            return state.height *2
        },
        getHobby() {
            return this.hobby
        },
        doubleNum (state): number {
            return state.height * 2
        }
    },
    actions: {
        updateSex(val) {
            this.sex = this.sex + val
        },
        addHeight() {
            this.height ++
        },
        updateHobby(val) {
            this.hobby.push(val)
        }
    }
})
