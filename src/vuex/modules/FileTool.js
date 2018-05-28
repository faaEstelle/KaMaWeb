import axios from 'axios'
//定义数据模型
const state = {
  sex:'',
  Userlist:[]
}

const getters = {
  GetUser(state){
    state.sex = SexToText(state.sex)
    return state.user
  }
}
const actions = {
  async GetSheet ({dispatch, commit}) {
    try {
      let Result = await axios.get('xxxx.xxx')
      if (Result.State) {
        commit(types.Get_Sheet_Re, Result)
      } else {
        dispatch('AddMessage', {Type: 'Error', Message: 'haha2' + Result.Msg})
      }
    } catch (err) {
      dispatch('AddMessage', {Type: 'Error', Message: 'haha3' + err})
      console.error(err)
    }
  },
  async GetHeader ({dispatch, commit}, chooseSheet) {
    try {
      chooseSheet.pwd = Sign(chooseSheet.pwd)
      let Result = await axios.post('#UpdateUser',chooseSheet)
      if (Result.State) {
        commit('UPDATE_USER', Result)
        dispatch('GetSetSheet', chooseSheet)
      } else {
        dispatch('AddMessage', {Type: 'Error', Message: Result.Msg})
      }
    } catch (err) {
      dispatch('AddMessage', {Type: 'Error', Message: err})
      console.error(err)
    }
  },

}

const mutations = {
  UPDATE_USER(state,data){
    state.user= data
    state.Userlist.push(data)
    state.Userlist.find((d,i)=>{
      if(d.id ===id){

      }

    })
  },
}

//迭代
function AddExpend (arr, lastpad) {
  lastpad += 15
  for (let i = 0, max = arr.length; i < max; i++) {
    if (arr[i].active) delete arr[i].active
    //未定义的属性
    // if (arr[i].Expend===undefined) arr[i].Expend = false
    arr[i].pad = lastpad
    if (arr[i].children.length > 0) {
      AddExpend(arr[i].children, lastpad)
    }
  }
}
export default {state, getters, actions, mutations}
