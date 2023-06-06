/**
 * 响应状态
 */
export const ResponseStatus = {
  // 成功
  success: 200,
  // 认证失败
  authFailed: 401,
  // 没有权限
  noPermission: 403,
  // 不存在
  noExist: 404,
  // 接口异常
  apiError: 500
}

/**
 * 响应代码
 */
export const ResponseCode = {
  // 成功
  success: '600',
  // 失败
  fail: '403',
  // 取消
  cancel: '602',
  // 异常
  error: '601'
}

/**
 * 请求数据的基本格式
 */
export interface HttpResponseModel {
  code: string,
  msg: string,
  data: any
}
