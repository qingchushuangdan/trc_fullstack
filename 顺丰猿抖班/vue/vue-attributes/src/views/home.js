const addLog = {
  updated () {
    console.log('数据发生变化')
  }
}

const app = {
  created () {
    console.log('我是扩展的created')
  }
}

module.export = { addLog, app }
