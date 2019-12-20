<template>
 <div>
  <home-header :list="list"  :info="info"></home-header>
 </div>
</template>
<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  },
  data () {
    return {
      list: [],
      info: []
    }
  },
  methods: {
    getContentInfo () {
      this.axios.get('../../../static/mock/list.json')
        .then(this.getContentInfoSucc)
    },
    getContentInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.list
        this.info = data.info
      }
    }
  },
  mounted () {
    this.getContentInfo()
  }
}
</script>
