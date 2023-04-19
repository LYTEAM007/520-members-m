import { service } from './service'


// 获取活动时间
export const getActivityTime = (data) => {
  return service('get', '/api/festival/index', { ...data })
}
// 获取活动纪录
export const GetLogs = (data) => {
  return service('get', '/api/festival/prizelog', { ...data })
}

// 祈福
export const pray = (data) => {
  return service('post', '/api/festival/pray', { ...data })
}

// 获取活动2页面数据
export const getActivity2Data= (data) => {
  return service('get', '/api/festival/2/data', { ...data })
}

// 兑换攒盒/糖果
export const exchange= (data) => {
  return service('post', '/api/festival/get/ticket', { ...data })
}

// 兑换甜蜜大奖
export const exchangeBigPrize= (data) => {
  return service('post', '/api/festival/use/ticket', { ...data })
}

// 获取奖品列表
export const prizelist = (data) => {
  return service('get', '/api/festival/prizelist', { ...data })
}

// 获取活动3页面数据
export const getActivity3Data= (data) => {
  return service('get', '/api/festival/3/data', { ...data })
}

// 猜灯谜
export const riddles= (data) => {
  return service('post', '/api/festival/riddle', { ...data })
}

// 领取累计天数奖励
export const recevieRiddlePrize= (data) => {
  return service('post', '/api/festival/days/prize', { ...data })
}
