import { GetLogs } from '@/api'
import { Toast } from 'vant'


export const recordsModule = {
  methods: {
    async showRecords(actId) {
      if (!this.username) {
        Toast({
          message: '尊敬的用户，请先登录账号，参与活动！',
        })
        return
      }
      await this.GetLogs({
        p: actId,
      })
      this.bus.$emit('openRecordsDialog')
    },
    GetLogs(reqData) {
      return new Promise(async (res, rej) => {
        this.openLoading()
        const { code, data, message } = await GetLogs(reqData)
        this.closeLoading()
        if (code === this.ERR_OK) {
          let actId = reqData.p
          data.map(item => {
            if (actId === 1) {
              item.title = '玉兔祈福'
            } else if (actId === 2) {
              item.title = '浓情蜜兔'
            } else if (actId === 3) {
              item.title = '玉兔迎春'
            }
          })
          this.bus.$emit('getRecordsData', data)
          res(data)
        } else {
          Dialog.alert({
            message: message,
          })
          rej('系统繁忙')
        }
      })
    },
    openLoading() {
      Toast.loading()
    },
    closeLoading() {
      Toast.clear()
    },
  }
}
