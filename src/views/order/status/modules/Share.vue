<template>
  <div class="share">
    <image-pic width="42" height="42" :src="require('@/assets/facelove.png')" />
    <div class="share__center">
      <p class="share__center__title">立即分享</p>
      <p class="share__center__subtitle">快和亲朋好友分享好物吧~</p>
    </div>
    <div class="share__btn" @click="showShare = true">分享订单</div>

    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
        ],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.share {
  box-sizing: border-box;
  width: 702px;
  height: 120px;
  background: #fff;
  border-radius: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
  margin: 0 auto;
  margin-top: -40px;
  .share__center {
    flex: 1;
    padding-left: 25px;
    .share__center__title {
      font-size: 30px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    .share__center__subtitle {
      font-size: 26px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      margin-top: 18px;
    }
  }
  .share__btn {
    width: 180px;
    height: 60px;
    background: $red;
    border-radius: 33px;
    font-size: 26px;
    font-weight: 400;
    color: #fff;
    line-height: 60px;
    text-align: center;
  }
}
</style>
