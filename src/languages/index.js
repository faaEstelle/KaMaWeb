import MessagesCh from './chinese'
import MessagesEn from './english'
import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)
const messages = {
  cn:MessagesCh,
  en:MessagesEn

}
//获取本地设置的语言类型
function lang() {
  let t = localStorage.getItem('language')
  if(t){return t}
  else{return 'cn'}
}
const language = lang()

const i18n = new VueI18n({
  locale:language, //语言标识
  messages
})
export default i18n
