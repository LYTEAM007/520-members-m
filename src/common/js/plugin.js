// 基准大小
const baseSize = 100
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  let _width = document.documentElement.clientWidth
  if (_width > 750) {
    _width = 750
  }
  const scale = _width / 750

  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem ()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem ()
}
// window.addEventListener('resize', function () {
//   // setRem()
//   // if (
//   //   document.activeElement.tagName === 'INPUT' ||
//   //   document.activeElement.tagName === 'TEXTAREA'
//   // ) {
//   //   window.setTimeout(function () {
//   //     if ('scrollIntoView' in document.activeElement) {
//   //       document.activeElement.scrollIntoView(false)
//   //     } else {
//   //       document.activeElement.scrollIntoViewIfNeeded(false)
//   //     }
//   //   }, 0)
//   // }
// })

// // document.addEventListener('focusout', () => {
// //   setTimeout(() => {
// //     const height = document.documentElement.scrollTop || document.body.scrollTop
// //     window.scrollTo(0, height + 1)
// //   }, 20)
// // })
