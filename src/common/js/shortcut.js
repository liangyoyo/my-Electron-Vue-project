Mousetrap.bind('4', () => { console.log('4') })
Mousetrap.bind('?', () => { console.log('show shortcuts!') })
Mousetrap.bind('esc', () => { console.log('escape') }, 'keyup')

// 组合
Mousetrap.bind('command+shift+k', () => { console.log('command shift k') })

// 将多个组合映射到相同的回调
Mousetrap.bind(['command+k', 'ctrl+k'], () => {
  console.log('command k or control k')

  // 返回 false 以防止默认行为，并阻止事件冒泡
  return false
})
//  gmail 风格序列
Mousetrap.bind('g i', () => { console.log('go to inbox') })
Mousetrap.bind('* a', () => { console.log('select all') })

// konami 代码
Mousetrap.bind('up up down down left right left right b a enter', () => {
  console.log('konami code')
})
