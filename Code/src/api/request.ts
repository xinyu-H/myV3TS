import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import { HttpResponseModel } from './httpType';

import $Utils from '../utils/index'
// 接口类型和方法
interface BaseType{
    baseURL: string;
    getConfigParams(): any;
    interceptors(instance:AxiosInstance, url: string | number | undefined): any;
    request(options: AxiosRequestConfig): any;
}

// 取消重复请求
const CancelToken = axios.CancelToken
// 用于存储每个请求的取消函数以及对应标识
let sources: any = []

// 取消函数
let removeSource = (config:any) => {
    for (let item in sources){
        if(sources[item].umet === config.url+"&"+config.method){
            sources[item].cancel('已取消重复请求，请勿重复请求')
            sources.splice(item, 1)
        }
    }
}

class AxiosHttpRequest implements BaseType{
    baseURL: string;
    timeout: number;
    constructor (){
        this.baseURL = import.meta.env.VITE_APP_BASE_API
        this.timeout = 1500
    }
    // 配置参数
    getConfigParams (){
        const config = {
            baseURL: this.baseURL,
            timeout: this.timeout,
            headers: {}
        }
        return config;
    }
    // 拦截设置
    interceptors(instance:AxiosInstance, url: string | number | undefined){
        // 请求拦截
        instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            // 取消重复请求
            removeSource(config)
            config.cancelToken = new CancelToken(c => {
                // 将取消函数存起来
                sources.push({ umet: config.url+'&'+config.method, cancel: c })
            })
            // 添加全局的loading..
            $Utils.Message.showLoadingToast();
            // 请求头携带token
            // config.headers['Authorization'] = 'Bearer ' + 'token666'
            config.headers['Content-Type'] = 'application/json;charset=utf-8'
            // get请求映射params参数
            if (config.method === 'get' && config.params) {
                let url = config.url + '?' + $Utils.Tools.tansParams(config.params)
                url = url.slice(0, -1);
                config.params = {};
                config.url = url;
            }
            return config
        }, (error: any) => {
            return Promise.reject(error)
        })

        // 响应拦截
        instance.interceptors.response.use((res: AxiosResponse) => {
            // 取消重复请求
            removeSource(res.config)
            // 关闭 Loading
            $Utils.Message.closeLoadingToast()
            // 未设置状态码则默认成功状态
            const code = res.data['code'] || 200;
            // 获取错误信息
            let msg = res.data['msg'] || ""

            if (code === 200) {
                return Promise.resolve(res.data)
            } else {
                switch (code) {
                    case "401":
                        msg = '认证失败，无法访问系统资源'
                        break;
                    case "403":
                        msg = '当前操作没有权限'
                        break;
                    case "404":
                        msg = '访问资源不存在'
                        break;
                    case "default":
                        msg = '系统未知错误，请反馈给管理员'
                        break;
                    default:
                        msg = '未知错误，请联系管理员'
                }
                ElMessage.error(msg)
                return Promise.resolve(res.data)
            }
        }, (error: any) =>{
            console.log('err' + error)
            let { message } = error;
            if (message == "Network Error") {
                message = "后端接口连接异常";
            }
            else if (message.includes("timeout")) {
                message = "系统接口请求超时";
            }
            else if (message.includes("Request failed with status code")) {
                message = "系统接口" + message.substr(message.length - 3) + "异常";
            }
            ElMessage.error({
                message: message,
                duration: 5 * 1000
            })
            return Promise.reject(error)
        })
    }

    /**
     * 外部调用方法
     * @param options axios请求参数
     * @returns 实例
     */
    request(options: AxiosRequestConfig){
        const instance = axios.create();
        options = Object.assign(this.getConfigParams(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

// 实例化请求类
const http = new AxiosHttpRequest();

export default http;
