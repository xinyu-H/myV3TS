import AMapLoader from '@amap/amap-jsapi-loader'

/**
 * 转换结果类型
 */
export interface ReGeocodeModel {
  // 地址组成元素
  addressComponent: {
    // 所在省
    province: string,
    // 所在城市
    city: string,
    // 所在区
    district: string,
    // 所在区域编码
    adcode: string,
    // 所在乡镇
    township: string,
    // 所在街道
    street: string
    // 门牌号
    streetNumber: string
  }

  // 格式化地址
  formattedAddress: string
}

/**
 * 高德地图帮助类
 */
export default class AMapHelper {
  // static MYAMap: any

  /**
   * 加载
   */
  static load (): Promise<any> {
    return new Promise((resolve, reject) => {
      AMapLoader.load({
        key: 'b5123b611cbe45147cb063a5b50a64ad', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Geocoder'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        // AMapHelper.MYAMap = AMap
        resolve(AMap)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  }

  /**
   * 转换定位
   * @param lngLat
   */
  static convertGps (AMap: any, lngLat: Array<number>, type = 'gps'): Promise<Array<number>> {
    return new Promise((resolve, reject) => {
      AMap.convertFrom(lngLat, type, function (status: any, result: any) {
        if (result.info === 'ok') {
          resolve([result.locations[0].lng, result.locations[0].lat])
        } else {
          reject('convertGps error')
        }
      })
    })
  }

  /**
   * 坐标逆转码
   * @param lngLat
   */
  static reGeocoder (AMap: any, lngLat: Array<number>): Promise<ReGeocodeModel> {
    return new Promise((resolve, reject) => {
      const geocoder = new AMap.Geocoder()
      geocoder.getAddress(lngLat, function (status: string, result: any) {
        if (status === 'complete' && result.info === 'OK') {
          // result为对应的地理位置详细信息
          resolve(result.regeocode as ReGeocodeModel)
        } else {
          reject('geocoder error')
        }
      })
    })
  }
}
