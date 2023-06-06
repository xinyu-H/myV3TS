	
import http from '../request'
import { getIpModel } from './MapModel'


export default {
    getIp(params: getIpModel) {
        return http.request({
            url: 'https://restapi.amap.com/v3/ip', 
            method: 'get',
            params
        })
    },
}