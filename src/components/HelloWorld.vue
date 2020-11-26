<template>
  <div class="wrapper-wrapper">
    <h3>拼图小游戏</h3>
    <div class="wrapper" ref="wrapperGame" v-if="aaa">
      <div v-for="(item,index) in list" :key="index" :class="[[item === ''? 'item': hard? 'hard':'block']]"
           @click="changeNum(item,index)"
           :style="{backgroundPosition: itemPosition(item)}"
      ></div>
    </div>
    <button @click="hard = 0">普通级</button>
    <button @click="hard = 1">变态级</button>
    <button @click="resetGame">重置游戏</button>
    <div class="win-wrapper" @click="resetGame"  v-if="showWin"> 你赢了</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  watch: {
  },
  data() {
    return {
      showWin: false,
      aaa: 1,
      hard: 0,
      list: [],
      targetList: [1, 2, 3, 4, 5, 6, 7, 8, ''],
    }
  },
  mounted() {
    const aaa = [1, 2, 3, 4, 5, 6, 7, 8, '']
    this.list = (this.shuffleList(aaa))
  },
  methods: {
    arrayEquals(arr1, arr2) {
      for (let i = 0; i < arr1.length; i += 1) {
        if (arr1[i] !== arr2[i]) {
          return false
        }
      }
      return true
    },
    shuffleList(result) {
      const length = result == null ? 0 : result.length
      if (!length) {
        return []
      }
      let index = -1
      const lastIndex = length - 1
      // eslint-disable-next-line no-plusplus
      while (++index < length) {
        const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
        const value = result[rand]
        // eslint-disable-next-line no-param-reassign
        result[rand] = result[index]
        // eslint-disable-next-line no-param-reassign
        result[index] = value
      }
      return result
    },
    resetGame() {
      const aaa = [1, 2, 3, 4, 5, 6, 7, 8, '']
      this.list = (this.shuffleList(aaa))
      this.aaa = Math.random()
      this.showWin = false
    },
    itemPosition(item) {
      if (item !== '') {
        if (item < 4) {
          return `-${((item - 1) % 3) * 100}px  0`
        }
        if (item < 7) {
          return `-${((item - 1) % 3) * 100}px  -100px`
        }
        return `-${((item - 1) % 3) * 100}px  -200px`
      }
      return ''
    },
    changeNum(item1, index2) {
      const curIndex = this.list[index2]
      const leftIndex = this.list[index2 - 1]
      const rightIndex = this.list[index2 + 1]
      const topIndex = this.list[index2 - 3]
      const bottomIndex = this.list[index2 + 3]

      if (leftIndex === '' && index2 % 3) {
        this.$set(this.list, index2 - 1, curIndex)
        this.$set(this.list, index2, '')
      } else if (rightIndex === '' && index2 % 3 !== 2) {
        this.$set(this.list, index2 + 1, curIndex)
        this.$set(this.list, index2, '')
      } else if (topIndex === '') {
        this.$set(this.list, index2 - 3, curIndex)
        this.$set(this.list, index2, '')
      } else if (bottomIndex === '') {
        this.$set(this.list, index2 + 3, curIndex)
        this.$set(this.list, index2, '')
      }
      this.aaa = Math.random()
      this.$nextTick(() => {
        const bbb = this.arrayEquals(this.list, this.targetList)
        if (bbb) {
          this.showWin = true
        }
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper-wrapper{
  margin-left: 50%;
  transform: translateX(-25%);
}
  .wrapper{
    display: flex;
    flex-wrap: wrap;
    width: 319px;
  }
  .win-wrapper{
    width: 319px;
    height: 340px;
    background-color: rgba(0,0,0,0.5);
    margin-left: 50%;
    transform: translate(-50%,-100%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
  }
  .wrapper>div{
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 36px;
    color: red;
    border: 3px solid green;
  }
.wrapper>.block{
  background: url("../../src/assets/pintuImg/222.png") no-repeat;

}
  .wrapper>.item{
    background-color: #fff;
  }
.wrapper>.hard{
    background: url("../../src/assets/pintuImg/111.png") no-repeat;
  }
</style>
