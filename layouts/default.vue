<template>
  <div>
    <Navbar/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
  body {
    font-size: 13px;
    line-height: 13px;
    color: #111;
  }
</style>
