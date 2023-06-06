import { HttpResponseModel } from '../httpType'
// 请求参数接口
export interface getData1Model {
    num: number
}
// 响应参数接口
export interface getData1ResponseModel extends HttpResponseModel {
    data: Array<string>
}