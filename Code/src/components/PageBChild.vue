<template>
    <div>
        <h3>子组件</h3>
        {{ name }} -- {{ age }}
        <span style="font-size:1.3vw;">啊啊是</span>
        <div class="news">
            <div>
                <p v-for="(v, i) in rowList" v-html="v"></p>
            </div>
        </div>
        <PageBChildChildVue ref="PageBChildChildVuePage"></PageBChildChildVue>
        
    </div>
</template>

<script setup lang="ts">
import { inject, nextTick, onMounted, ref } from 'vue';
import PageBChildChildVue from './PageBChildChild.vue';





let scrollTimer: any
let scrollTopOld = 0
let scrollTopNew = 0

function runBox() {
    nextTick(() => {
        const scrollDiv = document.querySelector('.news') as HTMLElement
        const scrollDivC = scrollDiv.querySelectorAll('div')[0] as HTMLElement
        clearInterval(scrollTimer)
        // 小于显示区域就不滚动
        if (scrollDivC.offsetHeight < scrollDiv.offsetHeight) return
        scrollTimer = setInterval(() => {
            if (scrollDiv) {
                // 记录滚动区域 scrollTop 值
                scrollTopOld = scrollDiv.scrollTop
                scrollDiv.scrollTop++
                scrollTopNew = scrollDiv.scrollTop
                // 相等说明触底了
                if (scrollTopOld === scrollTopNew) {
                    const scrollDivCF = scrollDivC.querySelectorAll('p')[0] as HTMLElement
                    scrollDivC.removeChild(scrollDivCF)
                    scrollDivC.appendChild(scrollDivCF)
                }
            }
        }, 30)
    })
}
const dialog = ref<boolean>(false)
const age = inject('ageKey')
const name = inject('nameKey')
let reg = /\p{Unified_Ideograph}/u
let rowWordNum = 0
let str = `预约订餐注意事项：<br/>1.禁止<br/>2.<br/>3.<br/>`

let paraList = str.split('<br/>')
let numList: Array<number> = []
const rowList = ref<Array<string>>([])
onMounted(() => {
    clearInterval(scrollTimer)
    for (let i = 0; i < str.length; i++) {
        if (reg.test(str[i])) {
            let scrollDiv = document.querySelector('.news') as HTMLElement
            let span = document.createElement('span')
            span.innerHTML = str[i]
            span.style.fontSize = '1.5vw'   // 这里的文字大小要与 css 一致
            span.style.opacity = '0' 
            span.setAttribute('class', 'span')
            document.querySelector('body')?.appendChild(span)
            let spanOnly = document.querySelector('.span') as HTMLElement
            rowWordNum = Math.floor(scrollDiv?.offsetWidth / spanOnly?.offsetWidth)
            break 
        }
    }
    console.log(rowWordNum)
    paraList.forEach(v => {
        numList.push(Math.ceil(v.length / rowWordNum))
    })
    numList.forEach((v, i) => {
        for (let j = 0; j < v; j++) {
            rowList.value.push(paraList[i].substr(j * rowWordNum, rowWordNum))
        }
    })
    let textList: Array<string> = []
    rowList.value.forEach(v => {
        textList.push(v.replace(/ /g, '&nbsp;'))
    })
    rowList.value = textList
    runBox()
})


</script>

<style lang="scss" scoped>
.news {
    width: 40vw;
    height: 35vh;
    border: 1px solid skyblue;
    overflow: auto;
    div {
        width: 100%;
        height: auto;
        p {
            font-size: 1.5vw;
        }
    }
}

.print-info {
    text-align: center;
    letter-spacing: 2px;

    .pboxs {
        // border-bottom: 1px solid #EEF0F1;
        margin-bottom: 5px;
    }

    .ptitle {
        display: flex;
        height: 20px;
        align-items: center;
        text-align: left;
        font-size: 16px;
        padding-left: 18px;
        line-height: 22px;

        &:last-of-type {
            margin-bottom: 10px;
        }

        span {
            text-align: left;
        }

        font {
            //  width: 5px;
            //  height: 18px;
            //  background: #333;
            margin-right: 4px;
            font-weight: 800;
            font-size: 17px;
            padding-bottom: 3px;
            //  display: inline-block;
        }
    }

    .span-eara {
        width: 120px;
    }

    h2 {
        margin-top: -15px;
    }

    p {
        font-size: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        height: 18px;
        line-height: 18px;
        margin: 0;
        span {
            width: 91px;
            text-align: right;
            display: inline-block;
            margin-right: 5px;
        }
    }
}
.print-info {
      text-align: center;
      line-height: 35px;
        .pboxs{
      //   border-bottom: 1px solid #EEF0F1;
         padding-top: 10px;  
      
           margin-bottom: 10px;
        
       }
       .ptitle{
         display: flex;
          height: 20px;
         align-items: center;
         text-align: left;
         font-size: 16px;
         padding-left: 35px;
         line-height: 20px;
          span{
          text-align: left;
         }
         &:last-of-type{
           margin-bottom: 10px;
         }
          font{
          
            //  width: 5px;
            //  height: 18px;
            //  background: #333;
             margin-right: 4px;
             font-weight: 800;
             font-size: 17px;
             padding-bottom:3px ;
            //  display: inline-block;
           }

           
       }

    

      h2 {
        margin-bottom: 10px;
      }

      dd {
        font-size: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        // margin-bottom: 9px;
        // height: 16px;
          span {
        width: 103px;
        text-align: right;
        display: inline-block;
        margin-right: 13px;
      }
      }

      #qrcode {
        width: 150px;
        height: 150px;
        margin: 20px auto 0;
      }

      #qrcodes {
        width: 150px;
        height: 150px;
        margin: 20px auto 0;
      }
    }
</style>