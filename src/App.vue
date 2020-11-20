<template>
  <div id="app">
    个人小作品集合
    <div>
      <router-link to="/shuiping">会动的水瓶</router-link>
    </div>
    <div>
      <router-link to="/">2048</router-link>
    </div>
    <div>
      <router-link to="/xinfeng">信封打开</router-link>
    </div>
    <div>
      <router-link to="/pingtu">拼图小游戏</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>
