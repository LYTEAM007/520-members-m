import { service } from './service'


// 用户首页
export const getActivityIndex = (data) => {
  return service('get', '/api/user/index', { ...data })
}

// 主题一、二、三抽奖 and 主题四排位奖励
export const getPrize = (data) => {
  return service('post', '/api/user/getPrize', { ...data })
}
// 主题四抽奖
export const getPrizeThird = (data) => {
  return service('post', '/api/user/draw', { ...data })
}
// 彩金记录
export const recordHistory = (data) => {
  return service('get', '/api/user/prizelog', { ...data })
}
// 跳过开奖
export const skipAnimei = (data) => {
  return service('post', '/api/user/skipAnimei', { ...data })
}

export const getSetting = (data) => {
  return service('get', '/api/index/setting', { ...data })
}



export const getPrize100 = (data) => {
  return service('post', '/api/user/getPrize100', { ...data })
}



