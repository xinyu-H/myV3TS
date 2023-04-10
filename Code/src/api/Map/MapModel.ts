import { HttpResponseModel } from '../httpType'
// 请求参数接口
export interface getIpModel {
    key: string,
    ip: string
}
// 响应参数接口
export interface getIpResponseModel extends HttpResponseModel {
    data: {
        status: string,
        info: string,
        infocode: string,
        province: string,
        city: string,
        adcode: string,
        rectangle: string
    }
}