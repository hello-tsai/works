<template>
  <div class="wrapper-wrapper">
    <h3>拼图小游戏</h3>
    <div class="wrapper" ref="wrapperGame" v-if="aaa">
      <div v-for="(item,index) in list" :key="index" :class="{'item':item === ''}"
           @click="changeNum(item,index)">{{item}}</div>
    </div>
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

  .wrapper{
    display: flex;
    flex-wrap: wrap;
    width: 319px;
    margin-left: 50%;
    transform: translateX(-50%);
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
    background-color: pink;
    border: 3px solid green;
  }
  .wrapper>.item{
    background-color: #fff;
  }
</style>
