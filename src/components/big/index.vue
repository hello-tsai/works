<template>
  <div class="wrapper">
    <div class="head">
      <div class="eyes">
        <div class="eye-left"></div>
        <div class="eye-line"></div>
        <div class="eye-right"></div>
      </div>
    </div>
    <div class="body">
      <div class="hand-left"></div>
      <div class="body-detail"></div>
      <div class="hand-right"></div>
    </div>
    <div class="foot">
      <div class="foot-left"></div>
      <div class="foot-right"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'big',
}
</script>
<style scoped>
.wrapper{
  position: relative;
  margin-left: 50%;
  text-align: center;
  transform: translateX(-25%);
}
.head{
  width: 280px;
  height: 170px;
  border: 5px solid;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
.eyes{
  display: flex;
  align-items: center;
}
.eye-left, .eye-right{
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: black;
}
.eye-line{
  width: 86px;
  height: 8px;
  background: black;
}
.body{
  position: absolute;
  left: -13px;
  top: 130px;
  display: flex;
}
.body-detail{
  width: 320px;
  height: 280px;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 40%;
  border-bottom-left-radius: 40%;
  border: 5px solid;
  z-index: -1;
  background-color: white;
}
.hand-left,.hand-right{
  width: 250px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid;
  transform: rotate(70deg);
  position: absolute;
  left: 174px;
  top:93px;
  z-index: -2;
}
.hand-left{
  transform: rotate(-70deg);
  left: -112px;
}
.foot{
  display: flex;
  position: absolute;
  bottom: -290px;
  left: 40px;
  z-index: -2;
}
.foot-left, .foot-right{
  width: 64px;
  height: 60px;
  border-radius: 50%;
  border: 5px solid;
}
.foot-right{
  margin-left: 60px;
}
</style>
