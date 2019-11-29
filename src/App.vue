<template>
  <div id="app">        
    <FooterGuide v-show="$route.meta.showFooter" />
    <router-view/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    color:red
</style>
