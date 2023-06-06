import http from '../request'
import { getData1Model } from './HomeModel'

export default {
    getData1(params: getData1Model) {
        return http.request({
            url: 'https://autumnfish.cn/api/joke/list', 
            method: 'get',
            params
        })
    },
    getData2(data: any) {
        return http.request({
            url: 'https://autumnfish.cn/api/user/reg', 
            method: 'post',
            data
        })
    }
}