import { PfSideBar, PfTranslate } from '@brevortriverstudios/vue-core'

export default {
  name: 'app',

  data () {
    return {
      token: '',
      contactId: ''
    }
  },

  components: {
    PfSideBar,
    PfTranslate
  },

  created () {
    let paramsUrl = location.search
    let params = new URLSearchParams(paramsUrl)

    this.token = params.get('token')
    
    this.contactId = params.get('contactId')
  }
}