/**
 * 通用js方法封装处理
 * 
 */

// const baseURL = process.env.VUE_APP_BASE_API

export default {
    // // 日期格式化
    // parseTime :function(time, pattern) {
    //     if (arguments.length === 0 || !time) {
    //         return null
    //     }
    //     const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
    //     let date
    //     if (typeof time === 'object') {
    //         date = time
    //     } else {
    //         if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
    //             time = parseInt(time)
    //         } else if (typeof time === 'string') {
    //             time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm),'');
    //         }
    //         if ((typeof time === 'number') && (time.toString().length === 10)) {
    //             time = time * 1000
    //         }
    //         date = new Date(time)
    //     }
    //     const formatObj = {
    //         y: date.getFullYear(),
    //         m: date.getMonth() + 1,
    //         d: date.getDate(),
    //         h: date.getHours(),
    //         i: date.getMinutes(),
    //         s: date.getSeconds(),
    //         a: date.getDay()
    //     }
    //     const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    //         let value = formatObj[key]
    //         // Note: getDay() returns 0 on Sunday
    //         if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    //         if (result.length > 0 && value < 10) {
    //             value = '0' + value
    //         }
    //         return value || 0
    //     })
    //     return time_str
    // },
    // // 添加日期范围
    // addDateRange: function(params, dateRange, propName) {
    //     let search = params;
    //     search.params = typeof (search.params) === 'object' && search.params !== null && !Array.isArray(search.params) ? search.params : {};
    //     dateRange = Array.isArray(dateRange) ? dateRange : [];
    //     if (typeof (propName) === 'undefined') {
    //         search.params['beginTime'] = dateRange[0];
    //         search.params['endTime'] = dateRange[1];
    //     } else {
    //         search.params['begin' + propName] = dateRange[0];
    //         search.params['end' + propName] = dateRange[1];
    //     }
    //     return search;
    // },
    // // 通用下载方法
    // download: function(fileName) {
    //     window.location.href = baseURL + "/common/download?fileName=" + encodeURI(fileName) + "&delete=" + true;
    // },
    // // 字符串格式化(%s )
    // sprintf: function(str) {
    //     let args = arguments, flag = true, i = 1;
    //     str = str.replace(/%s/g, function () {
    //         let arg = args[i++];
    //         if (typeof arg === 'undefined') {
    //             flag = false;
    //             return '';
    //         }
    //         return arg;
    //     });
    //     return flag ? str : '';
    // },
    // // 转换字符串，undefined,null等转化为""
    // praseStrEmpty: function(str) {
    //     if (!str || str == "undefined" || str == "null") {
    //         return "";
    //     }
    //     return str;
    // },
    /**
    * 参数处理
    * @param {*} params  参数
    */
    tansParams: function(params: any) {
        let result = ''
        for (const propName of Object.keys(params)) {
            const value = params[propName];
            let part = encodeURIComponent(propName) + "=";
            if (value !== null && typeof (value) !== "undefined") {
                if (typeof value === 'object') {
                    for (const key of Object.keys(value)) {
                        if (value[key] !== null && typeof (value[key]) !== 'undefined') {
                            let params = propName + '[' + key + ']';
                            let subPart = encodeURIComponent(params) + "=";
                            result += subPart + encodeURIComponent(value[key]) + "&";
                        }
                    }
                } else {
                    result += part + encodeURIComponent(value) + "&";
                }
            }
        }
        return result
    },
    // // 压缩图片
    // image2Base64: function(img, size = 0.7) {
    //     var canvas = document.createElement('canvas')
    //     var scale = 1
    //     if (img.width > 1280 || img.height > 1280) {
    //         if (img.width > img.height) {
    //             scale = 1280 / img.width
    //         } else {
    //             scale = 1280 / img.height
    //         }
    //     }
    //     if (scale != 1) {
    //         //按最大高度等比缩放
    //         img.width *= scale
    //         img.height *= scale
    //     }
    //     canvas.width = img.width
    //     canvas.height = img.width * (img.height / img.width)
    //     var ctx = canvas.getContext('2d')
    //     ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    //     let dataURL = canvas.toDataURL('image/jpeg', size)

    //     if (dataURL.length / 1024 > 10000) {
    //         //如果输出大于1m 就递归直到输出小于1M才行
    //         return this.image2Base64(img, (size / 2).toFixed(1) * 1)
    //     } else {
    //         // console.log(dataURL);
    //         return dataURL
    //     }
    // },
    // 
    /**
     * base64解码 (中文乱码也可)
     * @param str 
     * @returns 
     */
    getDecode(str: string){
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    },
    // // 扁平数据 转 父子结构
    // mapFun (items) {
    //     const result = [];   // 存放结果集
    //     const itemMap = {};  // 
    //     for (const item of items) {
    //         const id = item.id;
    //         const pid = item.pid;

    //         if (!itemMap[id]) {
    //             itemMap[id] = {
    //                 children: [],
    //             }
    //         }

    //         itemMap[id] = {
    //             ...item,
    //             children: itemMap[id]['children']
    //         }

    //         const treeItem =  itemMap[id];

    //         if (pid === 0) {
    //             result.push(treeItem);
    //         } else {
    //             if (!itemMap[pid]) {
    //                 itemMap[pid] = {
    //                     children: [],
    //                 }
    //             }
    //             itemMap[pid].children.push(treeItem)
    //         }

    //     }
    //     return result;
    // },
    // arrFun(arr, result, pid) {
    //     arr.forEach(item => {
    //         if (item.pid === pid) {
    //             const newItem = {...item, children: []};
    //             result.push(newItem);
    //             this.arrFun(arr, newItem.children, item.id);
    //         }
    //     })
    // },
    // arrFun2 (arr, pid) {
    //     return arr.filter(item => item.pid === pid).map(item => ({...item, children: this.arrFun2(arr, item.id)}))
    // },
    // // 防抖
    // debounce(fn, delay) {
    //     let timer = null;
    //     return function () {
    //         let _self = this, _args = arguments;
    //         clearTimeout(timer);
    //         timer = setTimeout(function () {
    //             fn.apply(_self, _args)
    //         }, delay)
    //     }
    // },
    // // 节流
    // throttle(fn, wait){
    //     let pre = Date.now();
    //     return function(){
    //         let context = this;
    //         let args = arguments;
    //         let now = Date.now();
    //         if( now - pre >= wait){
    //             fn.apply(context,args);
    //             pre = Date.now();
    //         }
    //     }
    // },
    /**
     * 获取随机数
     * @param m 
     * @param n 
     * @param is 是否保留两位小数
     * @returns 
     */
    getRandom (m: number, n: number, is: number): number {
        if (is) return +(Math.random() * (n-m+1) + m-1).toFixed(2)
        return +Math.ceil(Math.random() * (n-m+1) + m-1)
    },
    /**
     * 图片文件转Base64
     * @param fileData 
     * @returns 
     */
    toBase64 (fileData: File) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader()
            reader.readAsDataURL(fileData)
            reader.onload = function () {
                resolve(this.result)
            }
        })
    },
}
 
 