import { jexiaClient, dataOperations } from 'jexia-sdk-js/node'
import jexiaConfig from '../config/jexia-conf'

const JexiaVue = {
  install (Vue, options) {
    const dataModule = dataOperations()
    jexiaClient().init(jexiaConfig, dataModule)
    Vue.prototype.$jexia = dataModule
  }
}

export default JexiaVue
