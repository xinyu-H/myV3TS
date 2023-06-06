/**
 * 通用js方法封装处理
 * 
 */
import { onMounted } from "vue";

const Tools = {
    // 添加日期范围
    addDateRange: function(params: any, dateRange: any[], propName: string) {
        let search = params;
        search.params = typeof (search.params) === 'object' && search.params !== null && !Array.isArray(search.params) ? search.params : {};
        dateRange = Array.isArray(dateRange) ? dateRange : [];
        if (typeof (propName) === 'undefined') {
            search.params['beginTime'] = dateRange[0];
            search.params['endTime'] = dateRange[1];
        } else {
            search.params['begin' + propName] = dateRange[0];
            search.params['end' + propName] = dateRange[1];
        }
        return search;
    },
    /**
     * 字符串格式化(%s )
     * @param str 
     * @returns 
     */
    sprintf: function(str: string) {
        let args = arguments, flag = true, i = 1;
        str = str.replace(/%s/g, function () {
            let arg = args[i++];
            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return arg;
        });
        return flag ? str : '';
    },
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
    /**
     * 压缩图片
     * @param url 
     * @param size 
     * @returns 
     */
    image2Base64: function(url: string, size = 0.7): Promise<string> {
        return new Promise((resolve, reject) => {
            var img = new Image()
            img.src = url
            img.onload = () => {
                var canvas = document.createElement('canvas')
                var scale = 1
                if (img.width > 1280 || img.height > 1280) {
                    if (img.width > img.height) {
                        scale = 1280 / img.width
                    } else {
                        scale = 1280 / img.height
                    }
                }
                if (scale != 1) {
                    //按最大高度等比缩放
                    img.width *= scale
                    img.height *= scale
                }
                canvas.width = img.width
                canvas.height = img.width * (img.height / img.width)
                var ctx = canvas.getContext('2d')
                ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
                let dataURL = canvas.toDataURL('image/jpeg', size)
                if (dataURL.length / 1024 > 10000) {
                    //如果输出大于1m 就递归直到输出小于1M才行
                    return this.image2Base64(url, ((size / 2).toFixed(1) as unknown as number) * 1)
                } else {
                    resolve(dataURL)
                }
            }
        })
    },
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
    /**
     * 扁平数据 转 父子结构
     * @param items 数据源
     * @returns 
     */
    mapFun (items: any) {
        const result: Array<any> = [];   // 存放结果集
        const itemMap: any = {};  // 
        for (const item of items) {
            const id = item.id;
            const pid = item.pid;

            if (!itemMap[id]) {
                itemMap[id] = {
                    children: [],
                }
            }

            itemMap[id] = {
                ...item,
                children: itemMap[id]['children']
            }

            const treeItem =  itemMap[id];

            if (pid === 0) {
                result.push(treeItem);
            } else {
                if (!itemMap[pid]) {
                    itemMap[pid] = {
                        children: [],
                    }
                }
                itemMap[pid].children.push(treeItem)
            }

        }
        return result;
    },
    arrFun(arr: any[], result: any[], pid: any) {
        arr.forEach(item => {
            if (item.pid === pid) {
                const newItem = {...item, children: []};
                result.push(newItem);
                this.arrFun(arr, newItem.children, item.id);
            }
        })
    },
    arrFun2 (arr: any[], pid: any): any {
        return arr.filter(item => item.pid === pid).map(item => ({...item, children: this.arrFun2(arr, item.id)}))
    },
    /**
     * 防抖
     * @param fn 执行函数
     * @param delay 时间
     * @returns 
     */
    debounce(fn: any, delay: number) {
        let timer: any = null;
        return  () => {
            let _self = this, _args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(_self, _args)
            }, delay)
        }
    },
    /**
     * 节流
     * @param fn 执行函数
     * @param wait 时间
     * @returns 
     */
    throttle(fn: { apply: (arg0: any, arg1: IArguments) => void; }, wait: number){
        let pre = Date.now();
        return () =>{
            let context = this;
            let args = arguments;
            let now = Date.now();
            if( now - pre >= wait){
                fn.apply(context,args);
                pre = Date.now();
            }
        }
    },
    /**
     * 获取随机数
     * @param m 
     * @param n 
     * @param is 是否保留两位小数
     * @returns 
     */
    getRandom (m: number, n: number, is?: number): number {
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
    /**
     * 上传图片
     * @param callback 
     */
    uploadImg (callback: Function) {
        let input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.setAttribute('id', 'file')
        input.setAttribute('accept', 'image/*')
        input.click()
        input.onchange = async function (e: Event) {
            let target = e.target as HTMLInputElement;
            let baseStr = await Tools.toBase64((target.files as FileList)[0])
            callback(await Tools.image2Base64(baseStr as string))
        }
    },
    /**
     * 判断是否移动端
     */
    isMobile () {
        onMounted(() => {
            console.log('tools.ts')
        })
        return (/Mobile|Android|iPhone/i.test(navigator.userAgent))
    }
}
 
export default Tools
 