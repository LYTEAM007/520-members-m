<template>
  <div class="index">
    <!-- 主页面 -->
    <div class="main">
      <div class="activeContent">
        <div class="activeDetail">
          <el-row type="flex" class="activeDetailItem" justify="space-around">
            <el-col :span="8">
              <div class="gridContentBorder item">
                <div>【活动时间】</div>
                <div>
                  2023年5月20日-2023年5月27日
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="gridContentBorder item">
                <div>【活动对象】</div>
                <div>
                  全体ManBetX万博会员
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="gridContentBorder item gridContentBorderLast">
                <div>【活动平台】</div>
                <div>
                  全体ManBetX万博全平台（不含彩票、捕鱼、万博体育-百家乐、亚洲体育平台）
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="activeTitle">
        <div class="bgTitle">活动内容</div>
        <div class="bgText">
          520万博会员日运动大会，体育健将敢闯敢拼，彩金积分双倍惊喜，积分累计幸运抽奖，最高累计可获300积分。
        </div>
        <img src="../assets/image/titleBanner1.png" alt="" class="bgBanner">
      </div>
      <div class="activeTheme">
        <div @click="changaTabs(1, 'cc')" :class="{ 'activeTab': activeIndex == 1 }">
          <img class="activeThemeIcon" src="../assets/image/left-pb.png" alt="">
          <img class="activeThemeArrow" v-show="activeIndex == 1" src="../assets/image/arrow.png" alt="">
          极限奔跑吧
        </div>
        <div @click="changaTabs(2, 'tl')" :class="{ 'activeTab': activeIndex == 2 }">
          <img class="activeThemeIcon" src="../assets/image/left-lq.png" alt="">
          <img class="activeThemeArrow" v-show="activeIndex == 2" src="../assets/image/arrow.png" alt="">
          竞技篮球火
        </div>
        <div @click="changaTabs(3, 'bh')" :class="{ 'activeTab': activeIndex == 3 }">
          <img class="activeThemeIcon" src="../assets/image/left-bh.png" alt="">
          <img class="activeThemeArrow" v-show="activeIndex == 3" src="../assets/image/arrow.png" alt="">
          力拔迎胜利
        </div>
        <div @click="changaTabs(4, 'cj')" :class="{ 'activeTab': activeIndex == 4 }">
          <img class="activeThemeIcon" src="../assets/image/left-pw.png" alt="">
          <img class="activeThemeArrow" v-show="activeIndex == 4" src="../assets/image/arrow.png" alt="">
          排位赛好礼
        </div>
      </div>
      <div class="activeThemeContent">
        <!-- 活动背景图 -->
        <img class="activeThemeContentIcon" v-show="activeIndex == 1" src="../assets/image/pb-bg.png" alt="">
        <img class="activeThemeContentIcon lqBg" v-show="activeIndex == 2" src="../assets/image/lq-bg.png" alt="">
        <img class="activeThemeContentIcon bhBg" v-show="activeIndex == 3" src="../assets/image/bh-bg.png" alt="">
        <img class="activeThemeContentIcon pwBg" v-show="activeIndex == 4" src="../assets/image/pw-bg.png" alt="">
        <!--极限奔跑吧 -->
        <div class="activeThemeContentItem" v-show="activeIndex == 1">
          <div>
            <img src="../assets/image/people-pb.png" alt="" class="activeSectionIconCc">
            <el-checkbox v-model="detail.skip_animei" @change="checkedCcChange" class="checkStyle">跳过开奖动画</el-checkbox>
          </div>
          <el-row type="flex" justify="space-between" align="middle" class="marginBottom30" style="margin-top:1.2rem">
            <el-col :span="14" class="btn noCursor marginRight20">
              已获得彩金：{{ formatFigure(detail.act1_reword_prize) }}&nbsp;元
            </el-col>
            <el-col :span="10" class="recordBtn">
              <div @click="showRewardRecord('1')">
                中奖记录
              </div>
            </el-col>
          </el-row>
          <div class="marginBottom30">
            <el-row type="flex" class="progressText">
              <el-col :span="12">
                累计有效存款：{{ formatFigure(detail.current_deposit_amount) }}&nbsp;元
              </el-col>
              <el-col :span="12" class="textRight red">
                1,520&nbsp;元
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="24">
                <el-progress :stroke-width="14" :percentage="(detail.current_deposit_amount / 1520) * 100"
                  :color="'#FCAF1E'" :define-back-color="'#FBECC2'" :show-text="false"></el-progress>
              </el-col>
            </el-row>
          </div>
          <div>
            <el-row type="flex" class="marginBottom30">
              <el-col :span="12" class="frames marginRight20">
                可冲刺次数：<span class="figure">{{ formatFigure(detail.act1_left_time) }}</span>&nbsp;次
              </el-col>
              <el-col :span="12" class="frames textCenter">
                已获得的积分：<span class="figure">{{ detail.act1_reword_point }}</span>&nbsp;/100&nbsp;次
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-around" class="marginBottom30">
              <el-col :span="7">
                <div :class="{ 'submitBtnGray': detail.act1_left_time == 0, 'submitBtn': detail.act1_left_time != 0 }"
                  @click="showActivity('cc', 1)">冲刺一次</div>
              </el-col>
              <el-col :span="7">
                <div :class="{ 'submitBtnGray': detail.act1_left_time < 3, 'submitBtn': detail.act1_left_time >= 3 }"
                  @click="showActivity('cc', 3)">冲刺三次</div>
              </el-col>
            </el-row>
            <div class="margiTop20">
              <div class="themeTitle">
                会员于05月20日至05月25日，每累计有效存款1,520元，即可在赛跑活动中获得一次冲刺机会，每次冲刺即可获得一份随机彩金及1点积分。
              </div>
              <div class="themeDesc">
                每项赛事最高可获得100点积分，且积分需在5月26日 23:59:59获取，逾期视为放弃。活动中所获随机彩金可持续累计。
              </div>
            </div>
          </div>
        </div>
        <!-- 竞技篮球火 -->
        <div class="activeThemeContentItem" v-show="activeIndex == 2">
          <div>
            <img src="../assets/image/people-jz.png" alt="" class="activeSectionIconlk">
            <img src="../assets/image/people-lq.png" alt="" class="activeSectionIconPlayer">
            <el-checkbox v-model="detail.skip_animei" @change="checkedCcChange" class="checkStyle">跳过开奖动画</el-checkbox>
          </div>
          <el-row type="flex" justify="space-between" align="middle" class="marginBottom30" style="margin-top:0.4rem">
            <el-col :span="14" class="btn noCursor marginRight20">
              已获得彩金：{{ formatFigure(detail.act2_reword_prize) }}&nbsp;元
            </el-col>
            <el-col :span="10" class="recordBtn">
              <div @click="showRewardRecord('2')">
                中奖记录
              </div>
            </el-col>
          </el-row>
          <div class="marginBottom30">
            <el-row type="flex" class="progressText">
              <el-col :span="12">
                体育累计有效投注：{{ formatFigure(detail.current_ty_bet_amount) }}&nbsp;元
              </el-col>
              <el-col :span="12" class="textRight red">
                2,880&nbsp;元
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="24">
                <el-progress :stroke-width="14" :percentage="(detail.current_ty_bet_amount / 2880) * 100"
                  :color="'#FCAF1E'" :define-back-color="'#FBECC2'" :show-text="false"></el-progress>
              </el-col>
            </el-row>
          </div>
          <div class="marginBottom30">
            <el-row type="flex" class="progressText">
              <el-col :span="12">
                电竞累计有效投注：{{ formatFigure(detail.current_dj_bet_amount) }}&nbsp;元
              </el-col>
              <el-col :span="12" class="textRight red">
                2,880&nbsp;元
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="24">
                <el-progress :stroke-width="14" :percentage="(detail.current_dj_bet_amount / 2880) * 100"
                  :color="'#FCAF1E'" :define-back-color="'#FBECC2'" :show-text="false"></el-progress>
              </el-col>
            </el-row>
          </div>
          <div class="marginBottom30">
            <el-row type="flex" class="progressText">
              <el-col :span="12">
                电子累计有效投注：{{ formatFigure(detail.current_dz_bet_amount) }}&nbsp;元
              </el-col>
              <el-col :span="12" class="textRight red">
                2,880&nbsp;元
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="24">
                <el-progress :stroke-width="14" :percentage="(detail.current_dz_bet_amount / 2880) * 100"
                  :color="'#FCAF1E'" :define-back-color="'#FBECC2'" :show-text="false"></el-progress>
              </el-col>
            </el-row>
          </div>
          <el-row type="flex" class="marginBottom30">
            <el-col :span="10" class="frames marginRight20">
              可投篮次数：<span class="figure">{{ formatFigure(detail.act2_left_time) }}</span>&nbsp;次
            </el-col>
            <el-col :span="14" class="frames ">
              已获得的积分：<span class="figure">{{ detail.act2_reword_point }}</span>&nbsp;/100&nbsp;积分
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around" class="marginBottom30">
            <el-col :span="7">
              <div :class="{ 'submitBtnGray': detail.act2_left_time == 0, 'submitBtn': detail.act2_left_time != 0 }"
                @click="showActivity('tl', 1)">
                <div>投篮一次</div>
              </div>
            </el-col>
            <el-col :span="7">
              <div :class="{ 'submitBtnGray': detail.act2_left_time < 3, 'submitBtn': detail.act2_left_time >= 3 }"
                @click="showActivity('tl', 3)">
                <div>投篮三次</div>
              </div>
            </el-col>
          </el-row>
          <div class="themeTitle">
            会员于05月20日至05月25日，于（体育、电竞、电子）任意平台，每累计有效投注2,888元即可获得一次投篮机会，完成投篮可获得随机彩金及随机积分。
          </div>
          <div class="themeDesc">
            每项赛事最高可获得100点积分，且积分需在5月26日 23:59:59获取，逾期视为放弃。活动中所获随机彩金可持续累计。
          </div>
        </div>
        <!-- 力拔迎胜利 -->
        <div class="activeThemeContentItem" v-show="activeIndex == 3">
          <div>
            <img src="../assets/image/people-bh.png" alt="" class="activeSectionIcon activeSectionIconBh">
            <el-checkbox v-model="detail.skip_animei" @change="checkedCcChange" class="checkStyle">跳过开奖动画</el-checkbox>
          </div>
          <el-row type="flex" justify="space-between" align="middle" style="margin-top: 1.4rem;" class="marginBottom30">
            <el-col :span="14" class="btn noCursor marginRight20">
              已获得彩金：{{ formatFigure(detail.act3_reword_prize) }}&nbsp;元
            </el-col>
            <el-col :span="10" class="recordBtn">
              <div @click="showRewardRecord('3')">
                中奖记录
              </div>
            </el-col>
          </el-row>
          <div class="marginBottom30">
            <el-row type="flex" class="progressText">
              <el-col :span="12">
                真人累计有效盈利：{{ formatFigure(detail.current_zr_win_amount) }}&nbsp;元
              </el-col>
              <el-col :span="12" class="textRight red">
                2,088&nbsp;元
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="24">
                <el-progress :stroke-width="14" :percentage="(detail.current_zr_win_amount / 2088) * 100"
                  :color="'#FCAF1E'" :define-back-color="'#FBECC2'" :show-text="false"></el-progress>
              </el-col>
            </el-row>
          </div>
          <div class="marginBottom30">
            <el-row type="flex" class="progressText">
              <el-col :span="12">
                棋牌累计有效盈利：{{ formatFigure(detail.current_qp_win_amount) }}&nbsp;元
              </el-col>
              <el-col :span="12" class="textRight red">
                2,088&nbsp;元
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="24">
                <el-progress :stroke-width="14" :percentage="(detail.current_qp_win_amount / 2088) * 100"
                  :color="'#FCAF1E'" :define-back-color="'#FBECC2'" :show-text="false"></el-progress>
              </el-col>
            </el-row>
          </div>
          <el-row type="flex" class="marginBottom30">
            <el-col :span="10" class="frames marginRight20">
              可拔河次数：<span class="figure">{{ formatFigure(detail.act3_left_time) }}</span>&nbsp;次
            </el-col>
            <el-col :span="14" class="frames ">
              已获得的积分：<span class="figure">{{ detail.act3_reword_point }}</span>&nbsp;/100&nbsp;次
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around" class="marginBottom30">
            <el-col :span="7">
              <div :class="{ 'submitBtnGray': detail.act3_left_time == 0, 'submitBtn': detail.act3_left_time != 0 }"
                @click="showActivity('bh', 1)">
                <div>拔河一次</div>
              </div>
            </el-col>
            <el-col :span="7">
              <div :class="{ 'submitBtnGray': detail.act3_left_time < 3, 'submitBtn': detail.act3_left_time >= 3 }"
                @click="showActivity('bh', 3)">
                <div>拔河三次</div>
              </div>
            </el-col>
          </el-row>
          <div class="themeTitle">
            会员于05月20日至05月25日，于（真人、棋牌）任意平台，每累计有效盈利2,088元即可获得一次拔河机会，完成拔河比赛可获得随机彩金及随机积分。
          </div>
          <div class="themeDesc">
            每项赛事最高可获得100点积分，且积分需在5月26日 23:59:59获取，逾期视为放弃。活动中所获随机彩金可持续累计。
          </div>
        </div>
        <!-- 排位赛好礼 -->
        <div class="activeThemeContentItem pwItem" v-show="activeIndex == 4">
          <el-row class="margin20" type="flex" justify="space-around" align="middle">
            <el-col :span="12">
              <div class="recordBtn" @click="showRewardRecord('4')">
                中奖记录
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-checkbox v-model="detail.skip_animei" @change="checkedCcChange"
                  class="checkStyle specialStyle">跳过开奖动画</el-checkbox>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between" align="middle" class="marginBottom20">
            <el-col :span="12" class="frames noMargin">
              <div>累计积分：{{ detail.total_point }}积分/300积分</div>
            </el-col>
            <el-col :span="12" class="frames noMargin" style="margin-left:0.1rem">
              <div>可抽奖次数：{{ detail.act4_left_time }}&nbsp;次</div>
            </el-col>
          </el-row>
          <el-row type="flex" align="middle" class="marginBottom20">
            <el-col :span="12" class="textCenter">
              <img src="../assets/image/rank-5.png" class="awardPic-rank" v-if="detail.total_point == 300" alt="">
              <img src="../assets/image/rank-4.png" class="awardPic-rank" v-else-if="detail.total_point >= 200" alt="">
              <img src="../assets/image/rank-3.png" class="awardPic-rank" v-else-if="detail.total_point >= 150" alt="">
              <img src="../assets/image/rank-2.png" class="awardPic-rank" v-else-if="detail.total_point >= 100" alt="">
              <img src="../assets/image/rank-1.png" class="awardPic-rank" v-else-if="detail.total_point < 100" alt="">
            </el-col>
            <el-col :span="12" class="textCenter">
              <img src="../assets/image/award.png" alt="" class="awardPic-gift">
            </el-col>
          </el-row>
          <el-row type="flex" align="middle" class="marginBottom20">
            <el-col :span="12" class="textCenter">
              <div
                :class="{ 'btn': detail.total_point >= 50, 'btnGray': detail.total_point < 50 || detail.act4_reword_prize }"
                @click="getRankReward">领取排位赛奖励</div>
            </el-col>
            <el-col :span="12" class="textCenter">
              <el-row type="flex" justify="space-between" align="middle">
                <el-col :span="12" class="textCenter">
                  <div :class="{ 'btnGray': detail.act4_left_time == 0, 'btn': detail.act4_left_time != 0 }"
                    @click="showActivity('cj', 1)">
                    <div>抽奖一次</div>
                  </div>
                </el-col>
                <el-col :span="12" class="textCenter">
                  <div :class="{ 'btnGray': detail.act4_left_time < 5, 'btn': detail.act4_left_time >= 5 }"
                    @click="showActivity('cj', 5)">
                    <div>抽奖五次</div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row type="flex" align="middle" class="marginBottom20">
            <el-col :span="12" class="textCenter">
              <div class="rankTips">提示:排位赛奖励请于27号领取</div>
            </el-col>
            <el-col :span="12" class="textCenter">
              <div class="rankTips">※小贴士:抽奖时间为5月20日至5月26日。</div>
            </el-col>
          </el-row>
          <div class="themeTitle">
            会员参与主题一至主题三所累计积分，每3积分即可抽奖一次获得随机彩金。且可依照最高等级累计积分并于05月27日额外获得一份排位神秘彩金奖励，请会员及时点击领取，逾期默认为放弃。
          </div>
          <div class="themeDesc">
            <!-- 每项赛事最高可获得100点积分，且积分需在5月26日 23:59:59获取，逾期视为放弃。活动中所获随机彩金可持续累计。 -->
          </div>
        </div>
      </div>
      <div class="tableData" v-show="activeIndex == 1 || activeIndex == 2 || activeIndex == 3">
        <el-row :gutter="20" class="tableHead">
          <el-col :span="12">活动条件</el-col>
          <el-col :span="12">活动奖励</el-col>
        </el-row>
        <el-row :gutter="20" class="tableBody" v-if="activeIndex == 1">
          <el-col :span="12">每累计有效存款1,520元</el-col>
          <el-col :span="12">随机彩金+1点积分</el-col>
        </el-row>
        <el-row :gutter="20" class="tableBody" v-if="activeIndex == 2">
          <el-col :span="12">每累计有效存款2,880元</el-col>
          <el-col :span="12">随机彩金+随机积分</el-col>
        </el-row>
        <el-row :gutter="20" class="tableBody" v-if="activeIndex == 3">
          <el-col :span="12">每累计有效存款2,088元</el-col>
          <el-col :span="12">随机彩金+随机积分</el-col>
        </el-row>
      </div>
      <div class="tableDataRank" v-show="activeIndex == 4">
        <el-table :data="tableData" border style="width: 100%" :key="activeIndex">
          <el-table-column prop="count" label="累计积分" align="center">
          </el-table-column>
          <el-table-column prop="reward" label="排位赛奖励" align="center">
          </el-table-column>
        </el-table>
      </div>
      <div class="tips">
        <div class="tipsTitle">
          【温馨提示】
        </div>
        <div class="tipsItem">
          1.本优惠所获彩金仅需完成五倍流水不限平台。
        </div>
        <div class="tipsItem">
          2.本优惠所需存款及投注不与其他活动共享，可与反水活动共享。
        </div>
        <div class="tipsItem">
          3.本优惠仅对已结算并产生输赢结果的投注流水进行计算。所有拒绝投注、打平、任何情况出现对押情况的投注（例：于百家乐同时下注庄家及闲家，百家乐当中开和退还本金）及赔率低于（万博体育、新万博体育、新亚洲体育、新万博电竞亚洲盘0.70，欧洲盘1.70）；（欧洲体育、万博电竞亚洲盘0.50，欧洲盘1.50）或其他对应赔率，串关投注将不予计算。
        </div>
        <div class="tipsItem">
          4.本优惠符合的会员需在【活动指定时间】内点击操作，超时既视为放弃该活动奖励。
        </div>
        <div class="tipsItemColor marginTop20">本优惠遵循ManBetX万博【一般优惠规则与条款】。 </div>
      </div>
    </div>
    <!-- 抽奖弹框 -->
    <el-dialog :visible.sync="dialogVisible" width="100%" :before-close="handleClose" class="rewardIframe"
      :fullscreen="true">
      <img v-show="activityDialogType == 'cc' && elementVisibleCc" src="../assets/image/pb.gif" class="pic-dh-pb" alt="">
      <img v-show="activityDialogType == 'bh' && elementVisibleCc" src="../assets/image/bh.gif" class="pic-dh-bh" alt="">
      <img v-show="activityDialogType == 'tl' && elementVisibleCc" src="../assets/image/tl.gif" class="pic-dh-tl" alt="">
      <img v-show="activityDialogType == 'cj' && elementVisibleCc" src="../assets/image/cj.gif" class="pic-dh-cj" alt="">
      <!-- 冲刺 -->
      <div v-show="activityDialogType == 'cc' && !elementVisibleCc && rewardDetail.length != 0">
        <img src="../assets/image/alert.png" alt="">
        <div class="dialogContent">
          <div class="rewardIframeTitle">恭 喜 您 获 得</div>
          <div class="rewardIframeContent">
            <p v-for="(item, index) in rewardDetail" :key="index">{{ item.prize }}彩金+1点积分</p>
          </div>
        </div>
        <div class="dialogBtn" @click="handleClose">确定</div>
      </div>
      <!-- 投篮 -->
      <div v-show="activityDialogType == 'tl' && !elementVisibleCc && rewardDetail.length != 0">
        <img src="../assets/image/alert.png" alt="">
        <div class="dialogContent">
          <div class="rewardIframeTitle">恭 喜 您 获 得</div>
          <div class="rewardIframeContent">
            <p v-for="(item, index) in rewardDetail" :key="index">{{ item.prize }}彩金+{{ item.point }}点积分</p>
          </div>
        </div>
        <div class="dialogBtn" @click="handleClose">确定</div>
      </div>
      <!-- 拔河 -->
      <div v-show="activityDialogType == 'bh' && !elementVisibleCc && rewardDetail.length != 0">
        <img src="../assets/image/alert.png" alt="">
        <div class="dialogContent">
          <div class="rewardIframeTitle">恭 喜 您 获 得</div>
          <div class="rewardIframeContent">
            <p v-for="(item, index) in rewardDetail" :key="index">{{ item.prize }}彩金+{{ item.point }}点积分</p>
          </div>
        </div>
        <div class="dialogBtn" @click="handleClose">确定</div>
      </div>
      <!-- 抽奖 -->
      <div v-show="activityDialogType == 'cj' && !elementVisibleCc && rewardDetail.length != 0">
        <img src="../assets/image/alert.png" alt="">
        <div class="dialogContent">
          <div class="rewardIframeTitle">恭 喜 您 获 得</div>
          <div class="rewardIframeContent">
            <p v-for="(item, index) in rewardDetail" :key="index">{{ item.prize }}彩金</p>
          </div>
        </div>
        <div class="dialogBtn" @click="handleClose">确定</div>
      </div>
      <div v-show="!elementVisibleCc && rewardDetail.length == 0 && rewardTipsMsg" class="rewardZero">
        <i class="el-icon-close errorIcon" @click="handleClose"></i>
        <div>提示</div>
        <div class="rewardContent">
          {{ rewardTipsMsg }}
        </div>
        <div class="rewardBtn" @click="handleClose">确定</div>
      </div>
    </el-dialog>
    <!-- 记录弹框 -->
    <el-dialog :visible.sync="dialogVisibleRecord" width="100%" :top="'0'" :before-close="handleCloseRecord"
      class="rewardRecord">
      <!-- <img src="../assets/image/alert-bg.jpg" alt=""> -->
      <div class="recordContent">
        <div class="recordTitle">中奖记录</div>
        <div class="recordTable">
          <el-table :data="recordHistoryList" style="width: 100%">
            <el-table-column prop="created_at" label="时间" align="center">
            </el-table-column>
            <el-table-column prop="type" label="活动名称" align="center">
              <template slot-scope="scope">
                <span v-show="scope.row.type == '1'">主题一抽奖</span>
                <span v-show="scope.row.type == '2'">主题二</span>
                <span v-show="scope.row.type == '3'">主题三</span>
                <span v-show="scope.row.type == '4'">主题四</span>
                <span v-show="scope.row.type == '5'">主题四排位</span>
              </template>
            </el-table-column>
            <el-table-column prop="prize" label="活动奖品内容" align="center">
            </el-table-column>
          </el-table>
          <el-pagination class="paginationEl" v-show="recordHistoryListTotal > 0" @current-change="handleCurrentChange"
            layout="total, prev, pager, next" :page-size="recordHistoryPage.size" :total="recordHistoryListTotal">
          </el-pagination>
        </div>
      </div>
    </el-dialog>
    <!--提示弹框 -->
    <el-dialog :visible.sync="dialogTips" :center="true" :before-close="handleCloseMsg" class="rewardIframe tipsDialog">
      <div class="rewardZero">
        <i class="el-icon-close errorIcon" @click="handleCloseMsg"></i>
        <div>提示</div>
        <div class="rewardContent">
          {{ dialogTipsMsg }}
        </div>
        <div class="rewardBtn" @click="handleCloseMsg">确定</div>
      </div>
      <!-- <div class="tipsContent">
        <div>{{ dialogTipsMsg }}</div>
      </div>
      <div class="rewardBtn" @click="handleCloseMsg">确定</div> -->
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getActivityIndex, getPrize, recordHistory, getPrizeThird, skipAnimei } from '@/api'
export default {
  data() {
    return {
      checked: false,
      tableData: [{
        count: '300分',
        reward: '冠军神秘奖励'
      },
      {
        count: '≥200分',
        reward: '亚军神秘奖励'
      },
      {
        count: '≥150分',
        reward: '季军神秘奖励'
      },
      {
        count: '≥100分',
        reward: '殿军神秘奖励'
      },
      {
        count: '≥50分',
        reward: '参赛神秘奖励'
      }],
      recordHistoryList: [],
      recordHistoryListTotal: 0,
      recordHistoryPage: {
        page: 1,
        size: 5
      },
      activeIndex: '1',
      dialogVisible: false,
      dialogVisibleRecord: false,
      elementVisibleCc: true,
      checkedCj: false,
      checkedCc: false,
      checkedTl: false,
      checkedBh: false,
      activityDialogType: 'cc',
      detail: {
        act1_reword_prize: '0',//主题1
        act1_reword_point: '0',//已获得的积分
        current_deposit_amount: '0',//累计有效存款
        act1_left_time: 0,//可冲刺次数
        act2_reword_prize: '0',//主题2
        act2_reword_point: '0',
        current_ty_bet_amount: '0',
        current_dj_bet_amount: '0',
        current_dz_bet_amount: '0',
        act2_left_time: '0',
        act3_reword_prize: '0',//主题3
        act3_reword_point: '0',//
        current_zr_win_amount: '0',
        current_qp_win_amount: '0',
        act3_left_time: 0,
        act4_reword_prize: '0',//主题4
        act4_left_time: '0',
        total_point: '0',
        skip_animei: false
      },
      rewardDetail: [],
      dialogTips: false,
      dialogTipsMsg: '',
      rewardTipsMsg: ''
    }
  },
  computed: {
    ...mapGetters(['activityTime']),
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      getActivityIndex().then((res) => {
        if (res.code != 200) {
          this.dialogTipsMsg = res.message
          this.dialogTips = true
        } else {
          this.detail = Object.assign(res.data, {
            skip_animei: res.data.skip_animei == '1' ? true : false
          })
          this.elementVisibleCc = !this.detail.skip_animei
        }
      })
    },
    // 抽奖弹框
    showActivity(type, count) {
      if (type == 'cc') {
        if (this.detail.act1_left_time != 0 && Number(this.detail.act1_left_time) >= Number(count)) {
          this.dialogVisible = true
          if (!this.detail.skip_animei) setTimeout(() => {
            this.elementVisibleCc = false
          }, 3000)
          this.gainWard(1, count)
        } else {
          this.dialogTipsMsg = '冲刺次数不足！'
          this.dialogTips = true
        }
      } else if (type == 'tl') {
        if (this.detail.act2_left_time != 0 && Number(this.detail.act2_left_time) >= Number(count)) {
          this.dialogVisible = true
          if (!this.detail.skip_animei) setTimeout(() => {
            this.elementVisibleCc = false
          }, 3000)
          this.gainWard(2, count)
        } else {
          this.dialogTipsMsg = '投篮次数不足！'
          this.dialogTips = true
        }
      } else if (type == 'bh') {
        if (this.detail.act3_left_time != 0 && Number(this.detail.act3_left_time) >= Number(count)) {
          this.dialogVisible = true
          if (!this.detail.skip_animei) setTimeout(() => {
            this.elementVisibleCc = false
          }, 3000)
          this.gainWard(3, count)
        } else {
          this.dialogTipsMsg = '拔河次数不足！'
          this.dialogTips = true
        }

      } else if (type == 'cj') {
        if (this.detail.act4_left_time != 0 && Number(this.detail.act4_left_time) >= Number(count)) {
          this.dialogVisible = true
          if (!this.detail.skip_animei) setTimeout(() => {
            this.elementVisibleCc = false
          }, 3000)
          this.gainWard(4, count)
        } else {
          this.dialogTipsMsg = '抽奖次数不足！'
          this.dialogTips = true
        }
      }
    },
    getRankReward() {
      getPrize({
        act: 5,
        times: 1,
        test: 1
      }).then((res) => {
        if (res.code != 200) {
          this.dialogTipsMsg = res.message
          this.dialogTips = true
        } else {
          this.dialogTipsMsg = '获得彩金：' + res.data[0].prize + '元'
          this.dialogTips = true
          this.getList()
        }
      })
    },
    gainWard(act, count) {
      if (act != 4) {
        getPrize({
          act: act,
          times: count,
          test: 1
        }).then((res) => {
          if (res.code != 200) {
            this.rewardTipsMsg = res.message
          } else {
            this.rewardDetail = res.data
          }
        })
      } else {
        getPrizeThird({
          act: act,
          times: count,
          test: 1
        }).then((res) => {
          if (res.code != 200) {
            this.rewardTipsMsg = res.message
          } else {
            this.rewardDetail = res.data
          }
        })
      }
    },
    handleClose() {
      this.dialogVisible = false
      if (!this.detail.skip_animei) {
        setTimeout(() => this.elementVisibleCc = true, 300)
      } else {
        this.elementVisibleCc = false
      }
      this.getList()
    },
    // 抽奖复选框
    checkedCcChange(val) {
      skipAnimei({
        skip_animei: val ? '1' : '2'
      }).then((res) => {
        if (res.code != 200) {
          this.dialogTipsMsg = res.message
          this.dialogTips = true
        } else {
          this.getList()
        }
      })
    },
    // 历史记录
    showRewardRecord(type) {
      recordHistory(Object.assign(this.recordHistoryPage, {
        type: type
      })).then((res) => {
        if (res.code != 200) {
          this.dialogTipsMsg = res.message
          this.dialogTips = true
        } else {
          this.recordHistoryList = res.data.list
          this.recordHistoryListTotal = res.data.total
        }
      })
      this.dialogVisibleRecord = true
    },
    handleCurrentChange(val) {
      this.recordHistoryPage.page = val
      this.showRewardRecord(this.activeIndex)
    },
    handleCloseRecord() {
      this.dialogVisibleRecord = false
      this.recordHistoryPage = {
        page: 1,
        size: 10
      }
    },
    changaTabs(tabsIndex, type) {
      this.activeIndex = tabsIndex
      this.activityDialogType = type
      if (!this.detail.skip_animei) {
        this.elementVisibleCc = true
      }
    },
    handleCloseMsg() {
      this.dialogTips = false
      this.dialogTipsMsg = ''
    },
    formatFigure(query) {
      if (query) {
        return Number(query).toLocaleString()
      } else {
        return 0
      }

    }
  },
  watch: {

  }
}
</script>

<style lang="stylus" scoped>
.index {
  min-height 100vh
  background  url('../assets/image/bg.png') no-repeat
  background-size 100% auto
  clearfix()
  font-family: MicrosoftYaHei;
}
.main{
  margin 4rem auto 0
  padding 0 0.15rem
  .activeTitle{
    height 1.65rem
    padding 0.15rem  0.2rem 0
    position relative
    .bgBanner{
      position absolute
      left -0.1rem
      top  -0.1rem
      width calc(100% + 0.2rem)
      height calc(100% + 0.24rem)
    }
    .bgTitle{
      font-family PingFangSC-Medium
      font-size 32px
      color #FFFFFF
      text-align center
      font-weight 500
      position relative
      z-index 999
    }
    .bgText{
      font-family FZZDHJW--GB1-0
      font-size 24px
      color #FFFFFF
      text-align center
      line-height 0.36rem
      font-weight bold
      margin-top 0.05rem
      position relative
      z-index 999
    }

  }
  .activeContent{
    padding 0 0.05rem 0.15rem
    background #FFFFFF
    background-image linear-gradient(180deg, #FFFFFF 0%, #FEEEC8 100%)
    box-shadow 0px 0px 14px 0px rgba(0,0,0,0.12)
    margin 0 0 0.2rem
    .activeDetail{
      text-align center
      color #343434
      font-size 12px
    }
    .gridContentBorder{
      position relative
    }
    .gridContentBorder::after{
      content ''
      display inline-block
      width 0.01rem
      height 0.7rem
      position absolute
      top 0px
      right 0px
      background-image linear-gradient(bottom, #fff -100%, orange 50%, #fff 100%)
    }
    .gridContentBorderLast:after{
      content ''
      display inline-block
      width 0.01rem
      height 0px
    }
    item >div{
      height 0.36rem
      line-height 0.36rem
      font-size 14px
      color #333333;
      text-align center
      line-height 0.36rem
      font-weight 400
    }
    .item div:nth-child(1){
      margin 0.15rem 0 0.08rem 0
      font-family MicrosoftYaHei-Bold
      font-size 18px
      color #333333
      text-align center
      font-weight 700
    }
  }
  .activeTheme{
    height 0.9rem
    line-height 0.9rem
    overflow hidden
    border-radius 8px
    border: 1px solid rgba(255,203,50,1);
    box-shadow: 0px 0px 10px 0px rgba(86,59,33,0.2);
    background-image linear-gradient(180deg, #FFFFFF 0%, #FEEEC8 100%)
    margin 0.2rem 0
    div{
      height 0.9rem
      float left
      width 25%
      position relative
      cursor pointer
      font-family: MicrosoftYaHei;
      font-size: 24px;
      color: #333333;
      font-weight: 400;
      padding-left 0.45rem
    }
    .activeThemeIcon{
      position absolute
      height 0.6rem
      left 0rem
      top 0.15rem
    }
    .activeThemeArrow{
      width 0.3rem
      position absolute
      left calc(50% - 0.15rem)
      bottom 0.02rem
    }
    .activeTab{
      color white
      background-image linear-gradient(180deg, #FF942E 0%, rgba(252,181,27,0.00) 100%)
    }

  }
  .activeThemeContent{
    border-radius 15px
    color black
    position relative
    padding 0 0.2rem
    .activeThemeContentIcon{
      height 100%
      width calc(100% + 0.4rem)
      position absolute
      top -0.28rem
      left -0.2rem
      z-index 0
    }
    .lqBg{
      top -0.21rem
    }
    .bhBg{
      top -0.25rem
    }
    .pwBg{
      top -0.25rem
    }
    .activeThemeContentItem{
      position relative
      top 0px
      left 0px
      padding 0.15rem 0.1rem 0.3rem
      z-index 1
      width 100%
      height 12.4rem
    }
    .pwItem{
      height 8.7rem
    }
  }
  .activeThemeContentDesc{
    color #fd5b13
    padding 0.1rem 0
    font-size: 16px;
    position relative
  }
  .tableData{
    margin: 0rem 0  0.6rem 0
  }
  .tableHead>div{
    font-family MicrosoftYaHei-Bold
    font-size 22px
    color #333
    text-align center
    font-weight 700
  }
  .tableBody>div{
    font-family MicrosoftYaHei
    font-size 20px
    color #333
    text-align center
    font-weight 400
    margin-top 20px
  }
  .tableDataRank {
    margin -0.2rem 0 0.3rem 0
  }
  .tableDataRank>>>.el-table{
    border-radius 8px
  }
  .tableDataRank >>>.el-table th.el-table__cell>.cell{
    font-family MicrosoftYaHei-Bold
    font-size 22px
    color #333333
    text-align center
    font-weight 700
  }

  .tableDataRank >>>.el-table td.el-table__cell div{
    font-family MicrosoftYaHei
    font-size 20px
    color #333333
    text-align center
    font-weight 400
  }

  .tableDataRank>>>.el-table,
  .tableDataRank>>>.el-table tbody tr{
    background white
  }
  .tableDataRank >>>.el-table thead,
  .tableDataRank >>>.el-table th.el-table__cell{
    background-image linear-gradient(180deg, #FEF2D4 0%, #FFF9E4 100%)
  }
  .tips{
    color black
    font-family MicrosoftYaHei-Bold
    margin-bottom 0.3rem
    .tipsTitle{
      font-size 22px
      color #333333
      font-weight bold
      margin-bottom 0.1rem
    }
    .tipsItem{
      margin 0.05rem 0
      font-size 18px
      color #333333
      line-height 0.27rem
      font-weight 400
    }
    .tipsItemColor{
      font-family MicrosoftYaHei
      font-size 18px
      color #FD4E06
      font-weight 400
    }
  }


  .activeSectionIconCc{
    height 4.4rem
    position relative
    top 0.6rem
    left 1.1rem
  }
  .activeSectionIconBh{
    height 3.5rem
    position relative
    top 1.05rem
    left 0.8rem
  }
  .activeSectionIconPlayer{
    height 3.6rem
    position relative
    top 0.3rem
    left 0.9rem
  }
  .activeSectionIconlk{
    height 1.8rem
    position relative
    top -0.8rem
    left 0.6rem
  }

  .checkStyle{
    position absolute
    top 0.3rem
    right 0.1rem
    >>>.el-checkbox__label{
      font-size 0.14rem
    }
    >>> .el-checkbox__input.is-checked+.el-checkbox__label{
      color orange
    }
    >>> .el-checkbox__input.is-checked .el-checkbox__inner{
      background-color orange
      border-color orange
    }
    >>> .el-checkbox__input.is-focus .el-checkbox__inner{
      border-color orange
    }
  }
  .specialStyle{
    top -0.05rem
    right 0
  }


  .frames{
    weight calc(50% - 0.1rem)!important
    display inline-block
    height 0.5rem
    line-height 0.5rem
    border 1px solid orange
    text-align center
    font-family MicrosoftYaHei
    font-size 18px
    color #333333
    border-radius 8px
    .figure{
      font-size 22px
      color #FD4E06
      text-align center
      line-height 0.3rem
      font-weight 400
      position relative
      top 0.02rem
      left 0
    }
  }
  .recordBtn{
    display inline-block
    padding 0 0.2rem
    height 0.5rem
    line-height 50px
    border 1px solid orange
    text-align center
    font-family MicrosoftYaHei
    font-size 18px
    color #FF942E
    cursor pointer
    border-radius 8px
  }
  .btn{
    height 0.5rem
    line-height 0.5rem
    display inline-block
    padding 0px 0.2rem
    cursor pointer
    border-radius 8px
    background-image linear-gradient(270deg, #FCB51B 2%, #FF942E 97%)
    box-shadow 0px 2px 4px 0px rgba(255,194,52,0.5)
    font-size 22px
    color #FFFFFF
    text-align left
    font-weight 400
  }
  .btnGray{
    height 0.5rem
    line-height 0.5rem
    display inline-block
    padding 0px 0.3rem
    cursor pointer
    border-radius 8px
    box-shadow 0px 2px 4px 0px rgba(255,194,52,0.5)
    font-size 22px
    color #FFFFFF
    text-align center
    font-weight 400
    background-image linear-gradient(180deg, #CECECE 0%, #EAE7E7 100%)
    color #333333
  }
  .noCursor{
    cursor default
  }
  .submitBtn{
    display inline-block
    padding 0 0.4rem
    height 0.5rem
    line-height 0.5rem
    cursor pointer
    background-image linear-gradient(270deg, #FCB51B 2%, #FF942E 97%)
    box-shadow 0px 2px 4px 0px rgba(255,194,52,0.5)
    font-size 20px
    color #FFFFFF
    text-align left
    font-weight 400
    transform skewX(-25deg)
    >div{
      transform skewX(25deg)
    }
  }
  .submitBtnGray{
    display inline-block
    padding 0 0.4rem
    height 0.5rem
    line-height 0.5rem
    cursor pointer
    background-image linear-gradient(180deg, #CECECE 0%, #EAE7E7 100%)
    box-shadow 0px 2px 4px 0px rgba(255,194,52,0.5)
    font-size 20px
    color #333
    text-align left
    font-weight 400
    transform skewX(-25deg)
    >div{
      transform skewX(25deg)
    }
  }

  .progressText{
    margin-bottom 0.08rem
    font-size 18px
    color #333333
    font-weight 400
  }
  .rankTips{
    font-size 14px
    color #FD4E06
    text-align center
    font-weight 400
    margin-top 0.1rem
  }
  .white{
    color white
  }
  .black{
    color black
  }
  .red{
    color red
  }
  .border{
    border 1px solid orange
  }
  .marginTop20{
    margin-top 0.2rem!important
  }
  .marginTop40{
    margin-top 0.4rem!important
  }
  .marginTop60{
    margin-top 0.6rem!important
  }
  .marginTop15{
    margin-top 0.15rem!important
  }
  .marginBottom20{
    margin-bottom 0.2rem!important
  }
  .marginBottom30{
    margin-bottom 0.3rem!important
  }
  .marginBottom10{
    margin-bottom 0.1rem!important
  }
  .marginRight20{
    margin-right 0.2rem!important
  }
  .margin20{
    margin 0.2rem 0
  }
  .textRight{
    text-align right
  }
  .textCenter{
    text-align center
  }
  .noMargin{
    margin 0
  }
}

.rewardIframe >>>.el-dialog{
  background transparent
  box-shadow none
  position relative
}
.rewardIframe >>>.el-dialog__body{
  text-align center
  height 100%
}
.rewardIframe >>>.el-dialog__header{
  display none
}
.rewardIframe img{
  position absolute
  width 5rem
  top calc(50% - 3rem)
  left calc(50% - 2.45rem)
}
.pic-dh-cj{
  top calc(50% - 1.1rem)!important
}
.pic-dh-pb{
  top calc(50% - 3rem)!important
  left calc(50% - 2.8rem)!important
}
.pic-dh-bh{
  top calc(50% - 2.1rem)!important
  left calc(50% - 2.5rem)!important
}
.dialogContent{
  width 4rem
  height 3rem
  position absolute
  top calc(50% - 0.7rem)
  left calc(50% - 1.96rem)
  .rewardIframeTitle{
    font-family MicrosoftYaHei-Bold
    font-size 44px
    color #FD4E06
    font-weight 700
    margin-bottom 0.25rem
  }
  .rewardIframeContent p{
    font-family MicrosoftYaHei
    font-size .18rem
    color #FFFFFF
    font-weight 400
    line-height 0.23rem
  }
}
.dialogBtn{
  position absolute
  width 3.46rem
  height 0.66rem
  text-align center
  line-height 0.66rem
  top calc(50% + 1.55rem)
  left calc(50% - 1.75rem)
  background-image linear-gradient(90deg, #FF654C 1%, #F68016 100%)
  border 1.98px solid rgba(255,255,255,0.26)
  box-shadow inset 0px 1px 3px 0px rgba(255,255,255,0.93);box-shadow: 0px 2px 4px 0px rgba(253,78,6,0.31)
  border-radius 33.66px
  font-family MicrosoftYaHei
  font-size 22px
  color #FFFFFF
  font-weight 400
  cursor pointer
}

.paginationEl{
  text-align right
  padding-top 10px
  >>>button:disabled,.btn-prev, .btn-next{
    background transparent!important
  }
  >>>.el-pager li{
    background transparent!important
  }
}
.recordContent{
  z-index 1

}

.rewardRecord img{
  width 100%
  height 6.6rem
}
.rewardRecord >>>.el-dialog{
  box-shadow none
  padding 0 .15rem 0
  height 100%
  margin 0
}

.rewardRecord >>> .el-icon-close:before{
  background white
  border-radius 50%
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.16);
  color red
  position relative
  right -0.1rem
  top -0.2rem
  z-index 3
}
.rewardRecord >>> .el-table__header{
  border-radius 8px
}
.rewardRecord >>> .el-dialog__body{
  height: calc(100% - 0.6rem);
  overflow-y scroll
  padding 0 .15rem .15rem
  background-image linear-gradient(to left, #ff913c 0%, #ffc454 100%)!important
}
.recordTitle{
  text-align center
  font-family MicrosoftYaHei
  font-size 30px
  color #FFFFFF
  letter-spacing 0
  font-weight 400
  padding-top .1rem
}

.recordTable{
  height calc(100% - 1.7rem)
  background white
  margin-top 0.1rem
  box-shadow 0px 2px 10px 0px rgba(0,0,0,0.17)
  border-radius 8px
}
.recordTable>>>.el-table{
  border-radius 8px
}
.awardPic-gift{
  width 2.5rem
}
.awardPic-rank{
  width 2rem
}
.tipsDialog{
  >>>.el-dialog{
    width 4rem
    top 35%
  }
  >>>.el-dialog__header{
    text-align center
    padding 0.2rem 0.2rem 0.1rem
    font-szie 0.16rem
  }
  >>>.el-dialog__header .el-dialog__title{
    font-szie 0.16rem
  }
  >>>.el-dialog__body{
    padding 0.1rem 0.2rem 0.2rem
  }
}
.tipsContent{
  background #FFF3E7
  border-radius 8px
  text-align center
  padding 20px
  font-size 16px
  color #333333
  font-weight 400
  line-height 40px
}
.rewardIframe img{
  position absolute
  top calc(50% - 2.82rem)
  left calc(50% - 2.5rem)
}
.rewardIframe .rewardZero{
  width 4rem
  position absolute
  top calc(50% - 2rem)
  left calc(50% - 2rem)
  background  white
  color #333
  padding 0.2rem
  text-align center
  border-radius 8px
  font-size 16px
  .rewardContent{
    background #FFF3E7
    border-radius 8px
    padding  20px
    margin 15px 0
    line-height 40px
  }
}
.errorIcon{
  position absolute
  top 10px
  right 10px
  cursor pointer
}
.rewardBtn{
  width 100px
  height 44px
  line-height 44px
  background-image linear-gradient(90deg, #FF654C 1%, #F68016 100%)
  border 1.98px solid rgba(255,255,255,0.26)
  box-shadow inset 0px 1px 3px 0px rgba(255,255,255,0.93);box-shadow: 0px 2px 4px 0px rgba(253,78,6,0.31)
  border-radius 33.66px
  font-family MicrosoftYaHei
  cursor pointer
  position relative
  left 130px
  color #fff
  text-align center
  margin-top 15px
  font-size 0.16rem
}
.themeTitle{
  font-family MicrosoftYaHei
  font-size 18px
  color #333333
  line-height 0.36rem
  font-weight 400
  padding 0 0.2rem
  margin  0.2rem 0 0.05rem 0
}
.themeDesc{
  font-family MicrosoftYaHei
  font-size 18px
  color #FD4E06
  line-height 0.36rem
  font-weight 400
  padding 0 0.2rem
}



</style>
