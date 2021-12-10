<template>
  <div>
    <van-button>
      <span style="color: red">
        <svg-icon icon-class="copy" :width="20" :height="20" />
      </span>
    </van-button>
    <van-button>
      <svg-icon icon-class="qq" :width="20" :height="20" />
    </van-button>
    <van-button>
      <span style="color: green">
        <svg-icon icon-class="wechat" :width="20" :height="20" />
      </span>
    </van-button>
    <van-button>
      <svg-icon icon-class="star" :width="20" :height="20" />
    </van-button>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";

export default {
  name: "User",
  components: {
    SvgIcon,
  },
};
</script>
