/**
 * 通用js方法封装处理
 *
 */
import { Ref, onMounted } from "vue";

const Tools = {
  // 添加日期范围
  addDateRange: function (params: any, dateRange: any[], propName: string) {
    let search = params;
    search.params =
      typeof search.params === "object" &&
      search.params !== null &&
      !Array.isArray(search.params)
        ? search.params
        : {};
    dateRange = Array.isArray(dateRange) ? dateRange : [];
    if (typeof propName === "undefined") {
      search.params["beginTime"] = dateRange[0];
      search.params["endTime"] = dateRange[1];
    } else {
      search.params["begin" + propName] = dateRange[0];
      search.params["end" + propName] = dateRange[1];
    }
    return search;
  },
  /**
   * 字符串格式化(%s )
   * @param str
   * @returns
   */
  sprintf: function (str: string) {
    let args = arguments,
      flag = true,
      i = 1;
    str = str.replace(/%s/g, function () {
      let arg = args[i++];
      if (typeof arg === "undefined") {
        flag = false;
        return "";
      }
      return arg;
    });
    return flag ? str : "";
  },
  /**
   * 参数处理
   * @param {*} params  参数
   */
  tansParams: function (params: any) {
    let result = "";
    for (const propName of Object.keys(params)) {
      const value = params[propName];
      let part = encodeURIComponent(propName) + "=";
      if (value !== null && typeof value !== "undefined") {
        if (typeof value === "object") {
          for (const key of Object.keys(value)) {
            if (value[key] !== null && typeof value[key] !== "undefined") {
              let params = propName + "[" + key + "]";
              let subPart = encodeURIComponent(params) + "=";
              result += subPart + encodeURIComponent(value[key]) + "&";
            }
          }
        } else {
          result += part + encodeURIComponent(value) + "&";
        }
      }
    }
    return result;
  },
  /**
   * 压缩图片
   * @param url
   * @param size
   * @returns
   */
  image2Base64: function (url: string, size = 0.7): Promise<string> {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.src = url;
      img.onload = () => {
        var canvas = document.createElement("canvas");
        var scale = 1;
        if (img.width > 1280 || img.height > 1280) {
          if (img.width > img.height) {
            scale = 1280 / img.width;
          } else {
            scale = 1280 / img.height;
          }
        }
        if (scale != 1) {
          //按最大高度等比缩放
          img.width *= scale;
          img.height *= scale;
        }
        canvas.width = img.width;
        canvas.height = img.width * (img.height / img.width);
        var ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        let dataURL = canvas.toDataURL("image/jpeg", size);
        if (dataURL.length / 1024 > 10000) {
          //如果输出大于1m 就递归直到输出小于1M才行
          return this.image2Base64(
            url,
            ((size / 2).toFixed(1) as unknown as number) * 1
          );
        } else {
          resolve(dataURL);
        }
      };
    });
  },
  /**
   * base64解码 (中文乱码也可)
   * @param str
   * @returns
   */
  getDecode(str: string) {
    return decodeURIComponent(
      atob(str)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  },
  /**
   * 扁平数据 转 父子结构
   * @param items 数据源
   * @returns
   */
  mapFun(items: any) {
    const result: Array<any> = []; // 存放结果集
    const itemMap: any = {}; //
    for (const item of items) {
      const id = item.id;
      const pid = item.pid;

      if (!itemMap[id]) {
        itemMap[id] = {
          children: [],
        };
      }

      itemMap[id] = {
        ...item,
        children: itemMap[id]["children"],
      };

      const treeItem = itemMap[id];

      if (pid === 0) {
        result.push(treeItem);
      } else {
        if (!itemMap[pid]) {
          itemMap[pid] = {
            children: [],
          };
        }
        itemMap[pid].children.push(treeItem);
      }
    }
    return result;
  },
  arrFun(arr: any[], result: any[], pid: any) {
    arr.forEach((item) => {
      if (item.pid === pid) {
        const newItem = { ...item, children: [] };
        result.push(newItem);
        this.arrFun(arr, newItem.children, item.id);
      }
    });
  },
  arrFun2(arr: any[], pid: any): any {
    return arr
      .filter((item) => item.pid === pid)
      .map((item) => ({ ...item, children: this.arrFun2(arr, item.id) }));
  },
  /**
   * 父子结构数据转扁平化
   * @param tree 父子结构数据
   * @returns
   */
  treeToArray(tree: Array<any>) {
    let res: Array<any> = [];
    for (const item of tree) {
      const { children, ...i } = item;
      if (children && children.length) {
        res = res.concat(this.treeToArray(children));
      }
      res.push(item);
    }
    return res;
  },
  /**
   * 防抖
   * @param fn 执行函数
   * @param delay 时间
   * @returns
   */
  debounce(fn: any, delay: number) {
    let timer: any = null;
    return () => {
      let _self = this,
        _args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(_self, _args);
      }, delay);
    };
  },
  /**
   * 节流
   * @param fn 执行函数
   * @param wait 时间
   * @returns
   */
  throttle(fn: { apply: (arg0: any, arg1: IArguments) => void }, wait: number) {
    let pre = Date.now();
    return () => {
      let context = this;
      let args = arguments;
      let now = Date.now();
      if (now - pre >= wait) {
        fn.apply(context, args);
        pre = Date.now();
      }
    };
  },
  /**
   * 获取随机数
   * @param m
   * @param n
   * @param is 是否保留两位小数
   * @returns
   */
  getRandom(m: number, n: number, is?: number): number {
    if (is) return +(Math.random() * (n - m + 1) + m - 1).toFixed(2);
    return +Math.ceil(Math.random() * (n - m + 1) + m - 1);
  },
  /**
   * 图片文件转Base64
   * @param fileData
   * @returns
   */
  toBase64(fileData: File) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(fileData);
      reader.onload = function () {
        resolve(this.result);
      };
    });
  },
  /**
   * 上传图片
   * @param callback
   */
  uploadImg(callback: Function) {
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("id", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async function (e: Event) {
      let target = e.target as HTMLInputElement;
      let baseStr = await Tools.toBase64((target.files as FileList)[0]);
      callback(await Tools.image2Base64(baseStr as string));
    };
  },
  /**
   * 判断是否移动端
   */
  isMobile() {
    return /Mobile|Android|iPhone/i.test(navigator.userAgent);
  },
  /** 下载文件 Bolb格式 */
  downloadFileByBolb(res: Blob, name: string) {
    const blob = new Blob([res], { type: "application/msword;charset=UTF-8" });
    const link = document.createElement("a");
    link.download = name + ".xlsx"; //定义表格名称，后缀是文件格式
    link.style.display = "none";
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
  /** 下载文件 URL格式 */
  downloadFileByUrl(url: string, name: string) {
    const link = document.createElement("a");
    link.download = name + ".xlsx"; //定义表格名称，后缀是文件格式
    link.style.display = "none";
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
  /** 获取文件 */
  getFileInfo(): Promise<FileList> {
    return new Promise((resolve) => {
      let input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("id", "file");
      input.setAttribute("accept", "*");
      input.click();
      input.onchange = function (e: Event) {
        let target = e.target as HTMLInputElement;
        let baseStr = target.files as unknown as FileList;
        resolve(baseStr);
      };
    });
  },
  /** 获取url参数 */
  getQueryParam(name: string) {
    let h = window.location.href.split("?")[1];
    let result: string = "";
    if (h) {
      let pArr = h.split("&") || [];
      if (pArr.length) {
        pArr.forEach((v: string) => {
          if (v.split("=")[0] === name) result = v.split("=")[1];
        });
      }
    }
    return result;
  },
  /**
   * dom缩放
   * @param box 缩放元素
   * @param size 窗口大小
   * @param scale 缩放比例
   */
  scaleBox(
    box: HTMLElement,
    size: number = window.innerWidth,
    scale: number = 1
  ) {
    let boxW = box.getBoundingClientRect().width;
    box.style.transformOrigin = `top left`;
    while (Math.abs(boxW - size) > 1) {
      boxW < size ? (scale += 0.001) : (scale -= 0.001);
      box.style.transform = `scale(${scale})`;
      boxW = box.getBoundingClientRect().width;
    }
  },
  /** 获取当前时间-汉字格式 */
  getTimeState() {
    // 获取当前时间
    let timeNow = new Date();
    // 获取当前小时
    let hours = timeNow.getHours();
    // 判断当前时间段
    if (hours >= 6 && hours <= 10) return { text: `早上好 ⛅`, state: 0 };
    if (hours >= 10 && hours <= 14) return { text: `中午好 🌞`, state: 1 };
    if (hours >= 14 && hours <= 18) return { text: `下午好 🌞`, state: 1 };
    if (hours >= 18 && hours <= 24) return { text: `晚上好 🌛`, state: 2 };
    if (hours >= 0 && hours <= 6) return { text: `凌晨好 🌛`, state: 2 };
  },
  slideBox(dom: HTMLElement, callback: Function) {
    let startX = 0;
    dom.addEventListener("touchstart", function (e) {
      startX = e.touches[0].pageX;
    });
    dom.addEventListener("touchmove", function (e) {
      e.preventDefault();
    });
    dom.addEventListener("touchend", function (e) {
      let endX = e.changedTouches[0].pageX;
      let diffX = endX - startX;
      if (diffX > 50) {
        callback("prev");
      } else if (diffX < -50) {
        callback("next");
      }
    });
  },
  // 进入全屏
  enterFullscreen() {
    const element: any = document.querySelector("body"); // 获取整个文档的根元素
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      // IE/Edge
      element.msRequestFullscreen();
    }
  },

  // 退出全屏
  exitFullscreen() {
    let d = document as any;
    if (d.exitFullscreen) {
      d.exitFullscreen();
    } else if (d.mozCancelFullScreen) {
      // Firefox
      d.mozCancelFullScreen();
    } else if (d.webkitExitFullscreen) {
      // Chrome, Safari and Opera
      d.webkitExitFullscreen();
    } else if (d.msExitFullscreen) {
      // IE/Edge
      d.msExitFullscreen();
    }
  },
};

export default Tools;

export class DevicePixelRatio {
  constructor() {
    // this.flag = false;
  }
  // 获取系统类型
  _getSystem() {
    // let flag = false;
    var agent = navigator.userAgent.toLowerCase();
    //		var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
    //		if(isMac) {
    //			return false;
    //		}
    // 现只针对windows处理，其它系统暂无该情况，如有，继续在此添加
    if (agent.indexOf("windows") >= 0) {
      return true;
    }
  }
  // 获取页面缩放比例
  //	_getDevicePixelRatio() {
  //		let t = this;
  //	}
  // 监听方法兼容写法
  _addHandler(element: any, type: string, handler: Function) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  }
  // 校正浏览器缩放比例
  _correct() {
    let t = this;
    // 页面devicePixelRatio（设备像素比例）变化后，计算页面body标签zoom修改其大小，来抵消devicePixelRatio带来的变化。
    (document.getElementsByTagName("body")[0].style as any).zoom =
      1 / window.devicePixelRatio;
  }
  // 监听页面缩放
  _watch() {
    let t = this;
    t._addHandler(window, "resize", function () {
      // 注意这个方法是解决全局有两个window.resize
      // 重新校正
      t._correct();
    });
  }
  // 初始化页面比例
  init() {
    let t = this;
    if (t._getSystem()) {
      // 判断设备，目前只在windows系统下校正浏览器缩放比例
      // 初始化页面校正浏览器缩放比例
      t._correct();
      // 开启监听页面缩放
      t._watch();
    }
  }
}
