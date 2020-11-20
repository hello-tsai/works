<template>
  <div class="xinfeng">
    <transition name="fade">
      <img  class="img2" :class="{'show-top': offShow}"
           src="../../assets/xinfengImg/mail-2.png" alt="">
    </transition>
    <div class="content" :class="{'xin-show-top': xinShow}" >
      <img :class="{'flower-show-top': flowerShow}"
           class="img6"
           src="../../assets/xinfengImg/mail-6.png" alt="">
      <img  src="../../assets/xinfengImg/mail-5.png" alt="">
    </div>
    <img class="img4" src="../../assets/xinfengImg/mail-4.png" alt="">
    <img @click="showxin" v-if="openShow"
         class="img1" src="../../assets/xinfengImg/mail-1.png" alt="">
    <img @click="showxin" v-if="offShow"
         class="img1" src="../../assets/xinfengImg/mail-1-off.png" alt="">
  </div>
</template>
<script>
export default {
  name: 'xinfeng',
  data() {
    return {
      openShow: true,
      xinShow: false,
      flowerShow: false,
      offShow: false,
    }
  },
  methods: {
    showxin() {
      if (this.openShow) {
        this.openShow = false
        this.offShow = true
        setTimeout(() => {
          this.xinShow = true
        }, 2000)
        setTimeout(() => {
          this.flowerShow = true
        }, 4000)
      } else {
        this.flowerShow = false
        setTimeout(() => {
          this.xinShow = false
        }, 2000)
        setTimeout(() => {
          this.offShow = false
          this.openShow = true
        }, 4000)
      }
    },
  },
}
</script>
<style scoped>
  .xinfeng{
    width: 804px;
    height: 482px;
    background-color: #8b0002;
    box-shadow: -30px -30px 40px rgba(0,0,0,.2);
    margin: 500px auto 0;
    position: relative;
  }
  .xinfeng>img, .xinfeng>.content, .content>img{
    position: absolute;
  }
  .img1{
    left: 50%;
    top:50%;
    transform:translate(-65%,-50%);
    z-index: 2;
  }
  .content{
    transition: height 1s ease;
    bottom: 30%;
    height: 30px;
    overflow: hidden;
    width: 1010px;
    margin:0 auto;
  }
  .img2{
    transform-origin: center top;
    transition: all 2s ease;
  }
  .show-top{
    transform: rotateX(180deg);
  }
  .xin-show-top{
    bottom: 40%;
    height: 895px;
  }
  .img6 {
    transform: scale(0);
    transform-origin: center bottom;
    transition: transform 2s ease;
    top: 125px;
    left: -140px
  }
  .flower-show-top{
    transform: scale(1);
  }
  .img4{
    z-index: 2;
  }
</style>
