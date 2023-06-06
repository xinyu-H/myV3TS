import { defineStore } from "pinia";


export const Store1 = defineStore('Store1', {
    persist: true,
    state: () => {
        return {
            sex: '男',
            height: 170,
            hobby: ['唱', '跳', 'rap'],
            isSwiperSlide: true,
            isShowBackTop: true,            // 是否显示返回顶部按钮
        }
    },
    getters: {
        getSex(): string {
            return this.sex
        },
        getHeight(state): number {
            return state.height *2
        },
        getHobby(): Array<string> {
            return this.hobby
        },
        doubleNum (state): number {
            return state.height * 2
        }
    },
    actions: {
        updateSex(val: string) {
            this.sex = this.sex + val
        },
        addHeight() {
            this.height ++
        },
        updateHobby(val: string) {
            this.hobby.push(val)
        },
        updateIsSwiperSlide() {
            this.isSwiperSlide = !this.isSwiperSlide
        },
        updateIsShowBackTop(val: boolean) {
            this.isShowBackTop = val
        },
        
    }
})
