import JSEncrypt from 'jsencrypt'
const __pubkey__ = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhSazxfY8JCDU4Ihza5VII7Ku4NpAbtYn8MMcHQCGdc8nauWKOeLqMO6+nrex+eirwo9Ac4v2FXli3nbj3BaCENHVOUBeVJQbbplUeUS8quei+ihgoQMLkc8pLDOdYt+XeH30XeRxHfQNx2fx4yUdWVLbpwzuQIP8ACh8Lx3rNteMTAosNVnkBUQAkJ3zmuY2N01IxlBRwZpdxmJPmWafKfoF535UVKT+bV9Ce7LRzWB1dF2X9b2/ektKgLifQd9o6laGX79f9CshZ9u0nT3XDvHnCF3rKfLYDgNfkwcCrMWeuJ7EVMW4Mx5VjY0pY0mxFi+t6NA5rk/IAPDstI3W0QIDAQAB'

// 全站加密
export const setEncrypt = (str = '', publicKey = __pubkey__) => {
  const encrypt = new JSEncrypt()
  encrypt.setPublicKey(publicKey)
  return encrypt.encrypt(str)
}
// 判断是否为全站
export const isApp = () => {
  return !verifyUrlParams('username')
}
// 验证url传参
export const verifyUrlParams = (key, url = location.href) => {
  key = key.replace(/[\\[\]]/g, '\\$&')
  const reg = new RegExp(`[\\?&]${key}(=([^&#]*)|&|#|$)`)
  return reg.exec(url)
}
// 方案1：调用全站提供的全局方法
export const getUsernameByPlatform = () => {
  // 初始化用户名
  let username = ''
  // 全站获取用户名
  if (isApp()) {
    if (window.ios) {
      username = window.ios.getUserName()
    }
    if (window.android) {
      username = window.android.getUserName()
    }
    // 加密
    if (username) {
      username = setEncrypt(username)
    }
  } else { // h5获取用户名
    const result = getUrlParams(window.location.href)
    if (result.username) {
      username = result.username
    }
  }
  return username
}

/*
 * 方案2：ios轮训异步获取用户名
 */
export const asyncGetUsernameByPlatform = () => {
  // eslint-disable-next-line promise/param-names
  return new Promise((res) => {
    // 初始化用户名
    let username = ''
    // 全站获取用户名
    if (isApp()) {
      if (window.android) { // android
        username = window.android.getUserName()
        // 加密
        if (username) {
          username = setEncrypt(username)
        }
        res(username)
      } else { // ios 旧版为异步返回用户名
        const timer = setInterval(() => {
          const inputDom = document.getElementsByName('msn')[0]
          if (inputDom && inputDom.value) {
            username = inputDom.value
            // 加密
            res(setEncrypt(username))
            // 释放定时器
            clearInterval(timer)
          }
        }, 100)
      }
    } else { // h5获取用户名
      const result = verifyUrlParams('username')
      if (result && result[2]) {
        username = result[2]
        if (username.indexOf('?noCache=') > -1) {
          username = username.split('?noCache=')[0]
        }
      }
      res(username)
    }
  })
}

// 获取分页数据
export function getPaginationContents(sourceList, size, pageIndex) {
  if (sourceList.length) {
    const startNum = (pageIndex - 1) * size
    const endNum = startNum + size
    return sourceList.slice(startNum, endNum)
  }
  return []
}
// 数字千位数加,
export function toThousands(num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

// 防抖
export function _debounce(func, delay) {
  const delayTime = delay || 1000
  let timer
  return function () {
    const _ = this
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(function () {
      timer = null
      func.apply(_, args)
    }, delayTime)
  }
}

export const getUrlParams = (url = location.href) => {
  const Params = {}
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    Params[key] = value
  })
  return Params
}

export function formatMoney(money) {
  const val = String(money).split('.')[1]
  if (val === '00') {
    return Number(money)
  }
  return money
}
export function dateFormat(fmt, date) {
  let ret;
  if (!date) {
    date = new Date()
  }
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g, '/'))
  }
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}

export function addTwoDays(date) {
  if (date) {
    date = new Date(date.replace(/-/g,'/'))
    date.setDate(date.getDate() + 2)
  }
  return date
}
