<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Demo />
    <!-- <Card /> -->
    <m-card 
      imgSrc="a.png" 
      :imgHeight="152"
      summary='剑指offer直通车 百度资深面试官授课'>
    </m-card>

    <m-card 
      imgSrc="a.png" 
      :imgHeight="152"
      summary='剑指offer直通车 百度资深面试官授课'>
      <template v-slot:footer>
        <div class='level1'>中级</div>
        <div class='price'>¥ 299.0</div>
      </template>
    </m-card>

    <m-card 
      imgSrc="a.png" 
      :imgHeight="90"
      :width="370"
      summary='剑指offer直通车 百度资深面试官授课'>
      剑指offer直通车 百度资深面试官授课剑指offer直通车 百度资深面试官授课剑指offer直通车 百度资深面试官授课
      <template v-slot:footer>
        <div class='level1'>中级</div>
        <div class='price'>¥ 299.0</div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
