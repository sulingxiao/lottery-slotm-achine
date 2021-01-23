<template>
  <div class="home">
    <div class="container">
      <div class="left">
        <div class="left-wrapper">
          <div class="title">
            <el-dropdown @command="handleCommand"
                         placement="bottom-end">
              <span class="el-dropdown-link">
                <span class="text">{{giftTitle}}<img src="../assets/btn1.svg" /></span>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="0">特等奖</el-dropdown-item>
                <el-dropdown-item command="1">一等奖</el-dropdown-item>
                <el-dropdown-item command="2">二等奖</el-dropdown-item>
                <el-dropdown-item command="3">三等奖</el-dropdown-item>
                <el-dropdown-item command="4">四等奖</el-dropdown-item>
                <el-dropdown-item command="8">自定义1</el-dropdown-item>
                <el-dropdown-item command="9">自定义2</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="box1">
            <div class="hand">
              <div class="ball"></div>
              <div class="long"></div>
              <div class="short"></div>
            </div>
          </div>
          <div class="box">
            <div class="groupWrapper"
                 v-for="k in 3">
              <div class="groups animation-ease"
                   @webkitTransitionEnd="endGame(k)">
                <ul class="group-item"
                    v-for="i in (round[k-1]+1)">
                  <li class="prize-item"
                      v-for="item in prizes">{{item}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="btn"
               @click="startClick">{{disClick?'抽奖中...':'点击开始'}} <img src="../assets/btn2.svg" /></div>
        </div>
      </div>
      <div class="right">
        <div class="right-wrapper">
          <img class="title-img"
               src="../assets/list.svg" />
          <span class="title">中奖名单</span>
          <div class="dreamNameList">
            <div class="list">
              <div class="item"
                   v-for="(item,index) in sGiftList"
                   v-if="giftLevel=='0' && index < sShowNum">
                <div class="item-title">
                  <span class="item-id">{{item.id}}</span>
                  <span class="item-name">{{item.name}}</span>
                </div>
                <div class="item-text">
                  <span>心愿礼物:</span>
                  <span v-if="giftLevel=='0'">{{item.sreward}}</span>
                  <span v-if="giftLevel=='1'">{{item.firstreward}}</span>
                  <span v-if="giftLevel=='2'">{{item.secondreward}}</span>
                </div>
              </div>
              <div class="item"
                   v-for="(item,index) in firstGiftList"
                   v-if="giftLevel=='1' && index < firstShowNum">
                <div class="item-title">
                  <span>{{item.id}}</span>
                  <span>{{item.name}}</span>
                </div>
                <div class="item-text">
                  <span>心愿礼物:</span>
                  <span v-if="giftLevel=='0'">{{item.sreward}}</span>
                  <span v-if="giftLevel=='1'">{{item.firstreward}}</span>
                  <span v-if="giftLevel=='2'">{{item.secondreward}}</span>
                </div>
              </div>
              <div class="item"
                   v-for="(item,index) in secondGiftList"
                   v-if="giftLevel=='2' && index < secondShowNum">
                <div class="item-title">
                  <span>{{item.id}}</span>
                  <span>{{item.name}}</span>
                </div>
                <div class="item-text">
                  <span>心愿礼物:</span>
                  <span v-if="giftLevel=='0'">{{item.sreward}}</span>
                  <span v-if="giftLevel=='1'">{{item.firstreward}}</span>
                  <span v-if="giftLevel=='2'">{{item.secondreward}}</span>
                </div>
              </div>
              <div class="gift"
                   v-if="giftLevel=='3'">
                <img />
                <div class="reward-name">某个奖品</div>
              </div>
              <div class="item"
                   v-for="(item,index) in thirdGiftList"
                   v-if="giftLevel=='3' && index < thirdShowNum && index < 8">
                <div class="item-title">
                  <span>{{item.id}}</span>
                  <span>{{item.name}}</span>
                </div>
              </div>
              <div class="gift"
                   v-if="giftLevel=='3'">
                <img />
                <div class="reward-name">某个奖品</div>
              </div>
              <div class="item"
                   v-for="(item,index) in thirdGiftList"
                   v-if="giftLevel=='3' && index < thirdShowNum && index > 7">
                <div class="item-title">
                  <span>{{item.id}}</span>
                  <span>{{item.name}}</span>
                </div>
              </div>
              <div class="gift"
                   v-if="giftLevel=='4'">
                <img />
                <div class="reward-name">某个奖品</div>
              </div>
              <div class="item"
                   v-for="(item,index) in fourthGiftList"
                   v-if="giftLevel=='4' && index < fourthShowNum && index < 13">
                <div class="item-title">
                  <span>{{item.id}}</span>
                  <span>{{item.name}}</span>
                </div>
              </div>
              <div class="gift"
                   v-if="giftLevel=='4'">
                <img />
                <div class="reward-name">某个奖品</div>
              </div>
              <div class="item"
                   v-for="(item,index) in fourthGiftList"
                   v-if="giftLevel=='4' && index < fourthShowNum && index > 12">
                <div class="item-title">
                  <span>{{item.id}}</span>
                  <span>{{item.name}}</span>
                </div>
              </div>
              <div class="item"
                   v-for="(item,index) in customize1GiftList"
                   v-if="giftLevel=='8' && index < customize1ShowNum">
                <div class="item-title">
                  <span>{{item.id}}</span>
                  <span>{{item.name}}</span>
                </div>
              </div>
              <div class="item"
                   v-for="(item,index) in customize2GiftList"
                   v-if="giftLevel=='9' && index < customize2ShowNum">
                <div class="item-title">
                  <span>{{item.id}}</span>
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import rewardList from '../reward'
export default {
  data () {
    return {
      round: [36, 36, 36],//转几回合后停下来
      prizes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      disClick: false,//防止多次点击
      itemHeight: 0,//每个奖品的高度
      prize_id: '',//中奖id
      giftLevel: '0',
      total: 146,
      max: 99999,
      giftTitle: '特等奖',
      giftset: {
        sGift: {
          num: 1,
          pressNum: 1
        },
        firstGift: {
          num: 3,
          pressNum: 3
        },
        secondGift: {
          num: 9,
          num1: 4,
          num2: 5,
          pressNum: 2
        },
        thirdGift: {
          num: 15,
          num1: 7,
          num2: 8,
          pressNum: 2
        },
        fourthGift: {
          num: 25,
          num1: 12,
          num2: 13,
          pressNum: 2
        }
      },
      sGiftList: [],
      firstGiftList: [],
      secondGiftList: [],
      thirdGiftList: [],
      fourthGiftList: [],
      customize1GiftList: [],
      customize2GiftList: [],
      sShowNum: 0,
      firstShowNum: 0,
      secondShowNum: 0,
      thirdShowNum: 0,
      fourthShowNum: 0,
      customize1ShowNum: 0,
      customize2ShowNum: 0,
      allGiftList: [], /* 所有中奖这列表 */
      noDreamList: []
    }
  },
  watch: {
    /* 自动触发多次抽奖的选项
    Option to automatically trigger multiple draws */
    secondShowNum: function () {
      let self = this
      if (this.secondShowNum !== 5 && this.giftLevel === "2") {
        setTimeout(function () {
          self.startClick()
        }, 500)
      }
    },
    thirdShowNum: function () {
      let self = this
      if (this.thirdShowNum !== 8 && this.giftLevel === "3") {
        setTimeout(function () {
          self.startClick()
        }, 500)
      }
    },
    fourthShowNum: function () {
      let self = this
      if (this.fourthShowNum !== 13 && this.giftLevel === "4") {
        setTimeout(function () {
          self.startClick()
        }, 500)
      }
    }
  },
  mounted () {
    this.itemHeight = $('.prize-item').outerHeight()
    window.addEventListener('keyup', this.handleKeyup)
    this.init()
  },
  methods: {
    init () {
      this.sGiftList = JSON.parse(window.localStorage.getItem('sGiftList')) || []
      this.firstGiftList = JSON.parse(window.localStorage.getItem('firstGiftList')) || []
      this.secondGiftList = JSON.parse(window.localStorage.getItem('secondGiftList')) || []
      this.thirdGiftList = JSON.parse(window.localStorage.getItem('thirdGiftList')) || []
      this.fourthGiftList = JSON.parse(window.localStorage.getItem('fourthGiftList')) || []
      this.customize1GiftList = JSON.parse(window.localStorage.getItem('customize1GiftList')) || []
      this.customize2GiftList = JSON.parse(window.localStorage.getItem('customize2GiftList')) || []
      this.allGiftList = JSON.parse(window.localStorage.getItem('allGiftList')) || []
      this.sShowNum = window.localStorage.getItem('sShowNum') || 0
      this.firstShowNum = window.localStorage.getItem('firstShowNum') || 0
      this.secondShowNum = window.localStorage.getItem('secondShowNum') || 0
      this.thirdShowNum = window.localStorage.getItem('thirdShowNum') || 0
      this.fourthShowNum = window.localStorage.getItem('fourthShowNum') || 0
      this.customize1ShowNum = window.localStorage.getItem('customize1ShowNum') || 0
      this.customize2ShowNum = window.localStorage.getItem('customize2ShowNum') || 0
    },
    handleCommand (command) {
      switch (command) {
        case "0":
          this.giftTitle = "特等奖"
          break;
        case "1":
          this.giftTitle = "一等奖"
          break;
        case "2":
          this.giftTitle = "二等奖"
          break;
        case "3":
          this.giftTitle = "三等奖"
          break;
        case "4":
          this.giftTitle = "四等奖"
          break;
        case "8":
          this.giftTitle = "自定义1"
          break;
        case "9":
          this.giftTitle = "自定义2"
          break;
        default:
          break;
      }
      this.giftLevel = command
    },
    handleKeyup () {
      const e = event || window.event || arguments.callee.caller.arguments[0]
      if (!e) return
      const { key, keyCode } = e
      if (keyCode == 13 && key == "Enter") {

        this.startClick()
      }
    },
    startClick () {//start
      if (this.disClick) {
        return
      }
      let flag = true
      switch (this.giftLevel) {
        case "0":
          if (this.sShowNum > 0) {
            flag = false
          }
          break;
        case "1":
          if (this.firstShowNum > 2) {
            flag = false
          }
          break;
        case "2":
          if (this.secondShowNum > 8) {
            flag = false
          }
          break;
        case "3":
          if (this.thirdShowNum > 14) {
            flag = false
          }
          break;
        case "4":
          if (this.fourthShowNum > 24) {
            flag = false
          }
          break;
        case "8":
          if (this.customize1GiftList > 92) {
            flag = false
          }
          break;
        case "9":
          if (this.customize2GiftList > 145) {
            flag = false
          }
          break;
        default:
          break;
      }
      if (!flag) {
        return
      }

      this.setGame()
    },
    /* According to the rules of different awards
     Get the winning list */
    setGame () {
      if (this.giftLevel !== "9") {
        let index
        let flag = false
        let val
        if(this.allGiftList.length > 145){
          alert("所有人都中奖了！")
          return
        }
        for (let i = 0; i < this.max; i++) {
          index = this.getNumber()
          val = this.getVal(index)
          flag = this.checkReward(val)
          if (flag) {
            break;
          }
        }
        let res = this.getReward(val)
        this.allGiftList.push(val)
        this.runGame(index)
        let allGiftList = JSON.stringify(this.allGiftList);
        window.localStorage.setItem('allGiftList', allGiftList);
        console.log("allGiftList", this.allGiftList)

        switch (this.giftLevel) {
          case "0":
            this.sGiftList.push(res)
            window.localStorage.setItem('sGiftList', JSON.stringify(this.sGiftList));
            break;
          case "1":
            this.firstGiftList.push(res)
            window.localStorage.setItem('firstGiftList', JSON.stringify(this.firstGiftList));
            break;
          case "2":
            this.secondGiftList.push(res)
            window.localStorage.setItem('secondGiftList', JSON.stringify(this.secondGiftList));
            break;
          case "3":
            this.thirdGiftList.push(res)
            window.localStorage.setItem('thirdGiftList', JSON.stringify(this.thirdGiftList));
            break;
          case "4":
            this.fourthGiftList.push(res)
            window.localStorage.setItem('fourthGiftList', JSON.stringify(this.fourthGiftList));
            break;
          case "8":
            this.customize1GiftList.push(res)
            window.localStorage.setItem('customize1GiftList', JSON.stringify(this.customize1GiftList));
            break;
          default:
            break;
        }
      } else {
        if(this.customize2GiftList.length > 145){
          alert("所有人都中奖了！1")
          return
        }
        let flag1 = false
        let index1
        let val1
        for (let j = 0; j < this.max; j++) {
          index1 = this.getNumber()
          val1 = this.getVal(index1)
          flag1 = this.checkReward(val1)
          console.log(index1)
          if (flag1) {
            break;
          }
        }
        let res1 = this.getReward(val1)
        this.customize2GiftList.push(res1)
        this.runGame(index1)
        window.localStorage.setItem('customize2GiftList', JSON.stringify(this.customize2GiftList));
      }
    },
    getVal ($index) {
      let res1 = $index[0].toString()
      let res2 = $index[1].toString()
      let res3 = $index[2].toString()
      let res = res1 + res2 + res3
      return res
    },
    getReward ($num) {
      let res
      for (let i = 0; i < rewardList.length; i++) {
        if ($num == rewardList[i].id) {
          res = rewardList[i]
          break
        }
      }
      return res
    },
    /* 检查输出的随机数是否符合该奖项资格
    allGiftList 所有已中奖列表
    noDreamList 未提交心愿清单的列表 
    自定义1 所有人都可以中，一次抽一个
    自定义2 只有没中过奖的人可以种，一次抽一个
    */
    checkReward ($val) {
      let res = true
      /* 三等奖和四等奖和自定义1是所有参与的人都有机会
      所以只要检查他是否已经中奖就可以 */
      if (this.giftLevel == "3" || this.giftLevel == "4" || this.giftLevel == "8") {
        /* 检查是否中奖 */
        for (let i = 0; i < this.allGiftList.length; i++) {
          if ($val === this.allGiftList[i]) {
            res = false
            console.log($val)
          }
        }
      }
      /* 特等，一等，二等是必须提交心愿清单的人才有机会
      所以要检查是否中奖，并检查是否提交心愿单 */
      if (this.giftLevel == "0" || this.giftLevel == "1" || this.giftLevel == "2") {
        /* 检查是否中奖 */
        for (let i = 0; i < this.allGiftList.length; i++) {
          if ($val === this.allGiftList[i]) {
            res = false
          }
        }
        /* 检查心愿单 */
        for (let j = 0; j < this.noDreamList.length; j++) {
          if ($val === this.noDreamList[j]) {
            res = false
          }
        }
      }
      /* 自定义2
      在所有在场的人中抽取
      中过奖也可以中 */
      if (this.giftLevel == "9") {
        /* 检查是否中奖 */
        for (let i = 0; i < this.customize2GiftList.length; i++) {
          if ($val === this.allGiftList[i]) {
            res = false
          }
        }
      }
      return res
    },
    /* 获取随机数 Get random number */
    getNumber () {
      let res = ''
      let num = parseInt(Math.random() * this.total);
      num = num + 1
      if (num < 10) {
        res = '00' + num.toString()
      }
      if (num < 100 && num > 9) {
        res = '0' + num.toString()
      }
      if (num > 99) {
        res = num.toString()
      }
      this.prizd_id = res
      let res1 = res.split('')
      let index1 = parseInt(res1[0])
      let index2 = parseInt(res1[1])
      let index3 = parseInt(res1[2])
      let index = [index1, index2, index3]

      return index
    },
    runGame (index) {
      this.disClick = true;
      this.resetGame();
      var itemHeight = this.itemHeight;
      var groupsHeight1 = this.round[0] * $('.group-item').height();
      var groupsHeight2 = this.round[1] * $('.group-item').height();
      var groupsHeight3 = this.round[2] * $('.group-item').height();
      var groupsHeight = [groupsHeight1, groupsHeight2, groupsHeight3]
      $('.hand').addClass('handActive')
      setTimeout(() => {
        $('.hand').removeClass('handActive')
      }, 500)
      let self = this
      $('.groups').each(function (e) {
        var pos = index[e] * itemHeight + groupsHeight[e]
        var unitPos = pos / 10
        var timeUnit
        switch (self.giftLevel) {
          case "0":
            timeUnit = 1000
            break;
          case "1":
            timeUnit = 800
            break;
          case "2":
            timeUnit = 500
            break;
          case "3":
            timeUnit = 100
            break;
          case "4":
            timeUnit = 100
            break;
          case "8":
            timeUnit = 100
            break;
          case "9":
            timeUnit = 100
            break;
          default:
            timeUnit = 100
            break;
        }
        setTimeout(() => {
          $(this).addClass('animation-ease').css('transform', 'translate3d(0, -' + unitPos + 'px, 0)')
        }, e * 1)
        setTimeout(() => {
          $(this).addClass('animation-ease').css('transform', 'translate3d(0, -' + unitPos * 2 + 'px, 0)')
        }, e * 1 * timeUnit)
        setTimeout(() => {
          $(this).addClass('animation-ease').css('transform', 'translate3d(0, -' + unitPos * 4 + 'px, 0)')
        }, e * 2 * timeUnit)
        setTimeout(() => {
          $(this).addClass('animation-ease').css('transform', 'translate3d(0, -' + unitPos * 6 + 'px, 0)')
        }, e * 3 * timeUnit)
        setTimeout(() => {
          $(this).addClass('animation-ease').css('transform', 'translate3d(0, -' + unitPos * 8 + 'px, 0)')
        }, e * 4 * timeUnit)
        setTimeout(() => {
          $(this).addClass('animation-ease').css('transform', 'translate3d(0, -' + unitPos * 10 + 'px, 0)')
        }, e * 5 * timeUnit)
      })
    },
    endGame (k) {//抽奖结束后的回调
      console.log('k', k)
      if (k == 3) {
        this.disClick = false;
        switch (this.giftLevel) {
          case "0":
            this.sShowNum = this.sShowNum + 1
            window.localStorage.setItem('sShowNum', this.sShowNum);
            break;
          case "1":
            this.firstShowNum = this.firstShowNum + 1
            window.localStorage.setItem('firstShowNum', this.firstShowNum);
            break;
          case "2":
            this.secondShowNum = this.secondShowNum + 1
            window.localStorage.setItem('secondShowNum', this.secondShowNum);
            break;
          case "3":
            this.thirdShowNum = this.thirdShowNum + 1
            window.localStorage.setItem('thirdShowNum', this.thirdShowNum);
            break;
          case "4":
            this.fourthShowNum = this.fourthShowNum + 1
            window.localStorage.setItem('fourthShowNum', this.fourthShowNum);
            break;
          case "8":
            this.customize1ShowNum = this.customize1ShowNum + 1
            window.localStorage.setItem('customize1ShowNum', this.customize1ShowNum);
            break;
          case "9":
            this.customize2ShowNum = this.customize2ShowNum + 1
            window.localStorage.setItem('customize2ShowNum', this.customize2ShowNum);
            break;
          default:
            break;
        }
      }
    },
    resetGame () {//重置状态
      $('.groups').removeClass('animation-ease').css('transform', '');
    }
  }
}
</script>
<style>
.el-popper .popper__arrow {
  display: none !important;
}
</style>
<style lang="less" scoped>
.el-dropdown-menu {
  width: 247px;
  height: 356px;
  background: #ffffff;
  box-shadow: 2px 2px 16px 9px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  transform: translate(250px, -150px);
}
.el-dropdown-menu__item {
  font-size: 30px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: #242424;
  line-height: 44px;
  text-align: center;
  padding: 4px 0;
}
ol,
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
li::marker {
  display: none;
}
.home {
  .container {
    height: 900px;
    display: flex;
    margin: auto;
    width: 1772px;
    .left {
      width: 1350px;
      height: 900px;
      margin-right: 80px;
      background-color: rgba(218, 227, 254, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      .left-wrapper {
        width: 1344px;
        height: 896px;
        border: 1px solid rgba(215, 204, 200, 1);
        position: relative;
        .title {
          width: 430px;
          height: 152px;
          background: linear-gradient(90deg, #fe7062 0%, #ff928e 100%);
          border-radius: 19px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          top: 74px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 15;
          .el-dropdown {
            width: 395px;
            height: 114px;
            background: #ffffff;
            border-radius: 19px;
            display: flex;
            align-items: center;
            justify-content: center;
            .text {
              font-size: 65px;
              font-family: SourceHanSansCN-Bold, SourceHanSansCN;
              font-weight: bold;
              color: #242424;
              line-height: 94px;
              display: flex;
              align-items: center;
              justify-content: center;
              img {
                margin-left: 50px;
              }
            }
          }
        }
      }
    }
    .right {
      width: 342px;
      height: 900px;
      background-color: rgba(218, 227, 254, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      .right-wrapper {
        width: 338px;
        height: 896px;
        border: 1px solid rgba(215, 204, 200, 1);
        position: relative;
        .title-img {
          width: 330px;
          position: absolute;
          top: 0px;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .title {
          position: absolute;
          font-size: 48px;
          font-family: SourceHanSansCN-Bold, SourceHanSansCN;
          font-weight: bold;
          color: #ffffff;
          line-height: 70px;
          top: 0px;
          left: 50%;
          transform: translate(-50%, -75%);
          width: 195px;
        }
        .dreamNameList {
          padding: 100px 0px 20px;
          max-height: 896px;
          box-sizing: border-box;
          .list {
            padding: 0px 35px;
            max-height: 776px;
            overflow: auto;
            .gift {
              padding-top: 28px;
              img {
                width: 174px;
                height: 174px;
                background-color: cornflowerblue;
                position: relative;
              }
              .reward-name {
                padding-top: 14px;
                padding-bottom: 28px;
                font-size: 24px;
                font-family: SourceHanSansCN-Regular, SourceHanSansCN;
                font-weight: 400;
                color: #474f65;
                line-height: 35px;
              }
            }
            .item {
              padding-bottom: 12px;
              .item-title {
                font-size: 36px;
                font-family: SourceHanSansCN-Bold, SourceHanSansCN;
                font-weight: bold;
                color: #474f65;
                line-height: 52px;
                text-align: left;
                .item-id {
                  padding-right: 20px;
                }
              }
              .item-text {
                font-size: 24px;
                font-family: SourceHanSansCN-Regular, SourceHanSansCN;
                font-weight: 400;
                color: #474f65;
                line-height: 35px;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
}
.box1 {
  width: 616px;
  height: 278px;
  background: linear-gradient(90deg, #fe7062 0%, #ff928e 100%);
  border-radius: 41px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  top: 252px;
  .handActive {
    transform: rotateX(60deg);
    transition: all ease 0.5s;
  }
  .hand {
    position: absolute;
    right: -80px;
    top: -210px;
    display: flex;
    flex-flow: column;
    align-items: center;
    transform-origin: 100% 100%;
    transition: all ease 0.5s;
    .ball {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background: linear-gradient(90deg, #fe7062 0%, #ff928e 100%);
    }
    .long {
      width: 18px;
      height: 219px;
      background: #91b3fa;
    }
    .short {
      width: 45px;
      height: 59px;
      background: #91b3fa;
      transform: translateX(-8px);
    }
  }
}
.btn {
  cursor: pointer;
  width: 341px;
  height: 104px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 86, 93, 1);
  border-bottom-width: 10px;
  font-size: 55px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: #242424;
  line-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 74px;
  img {
    margin-left: 20px;
    width: 64px;
  }
}
.box {
  margin: auto;
  /*   width: 900px;
  height: 50px; */
  overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: space-between;
  width: 558px;
  height: 360px;
  background: linear-gradient(90deg, #4042e2 0%, #4f52ff 100%);
  border-radius: 35px;
  padding: 43px 26px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  top: 211px;
  .animation-ease {
    transition-property: transform;
    transition-duration: 3s;
    transition-timing-function: ease;
  }
  .groupWrapper {
    width: 160px;
    height: 268px;
    border: 9px solid rgba(64, 66, 226, 1);
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    overflow: hidden;
    .groups {
      float: left;
      width: 50px;
      text-align: center;
      .prize-item {
        width: 142px;
        height: 250px;
        font-size: 150px;
        font-family: SourceHanSansCN-Bold, SourceHanSansCN;
        font-weight: bold;
        color: #242424;
        line-height: 250px;
      }
    }
  }
}
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 2px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  background: #ededed;
}
</style>