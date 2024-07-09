import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    // 任务列表
    list: [],
    // 文本框内容
    inputValue: 'aaa',
    nextId: 5,
    viewKey: 'all'
  },
  getters: {
    showNum(state) {
      return '当前最新数量是：' + state.count
    },
    unDoneLength(state) {
      return state.list.filter(item => !item.done).length
    },
    infoList(state) {
      if (state.viewKey === 'all') {
        return state.list
      } else if (state.viewKey === 'undone') {
        return state.list.filter(item => !item.done)
      } else {
        return state.list.filter(item => item.done)
      }
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    },
    // 修改列表数据
    initList(state, list) {
      state.list = list
    },
    // 设置 输入值
    setInputValue(state, value) {
      console.log('value: ', value);
      state.inputValue = value
    },
    // 添加任务项
    addItem(state) {
      const item = {
        id: state.nextId,
        info: state.inputValue.trim(),
        done: false
      }
      state.list.push(item)
      state.nextId++
      state.inputValue = ''
    },
    // 删除任务项
    removeItem(state, id) {
      const index = state.list.findIndex(item => item.id === id)
      if (index !== -1) {
        state.list.splice(index, 1)
      }
    },
    // 更改任务完成状态
    statusChange(state, params) {
      const index = state.list.findIndex(item => item.id === params.id)
      if (index !== -1) {
        state.list[index].done = params.done
      }
    },
    // 清除完成任务项
    clearDone(state) {
      state.list = state.list.filter(item => !item.done)
    },
    // 改版列表数据类型
    changeViewKey(state, key) {
      state.viewKey = key
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000);
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000);
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000);
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000);
    },
    getList(context) {
      axios.get('/list.json').then(({ data }) => {
        console.log('data: ', data);
        context.commit('initList', data)
      })
    }
  },
  modules: {
  }
})
