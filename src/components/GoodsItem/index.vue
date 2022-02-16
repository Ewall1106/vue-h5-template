<template>
  <Root>
    <Container
      :style="{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        width: '1.5rem',
        borderStyle: 'solid',
        borderColor: 'rgba(221,221,224,1)',
        borderWidth: '0.01rem',
      }"
    >
      <CustomImg
        :style="{
          display: 'inline-block',
          boxSizing: 'border-box',
          width: '100%',
          height: '1rem',
        }"
        v-bind="{ imgSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg' }"
      >
      </CustomImg>

      <CustomText
        :style="{
          fontFamily: 'PingFang SC',
          fontSize: '0.14rem',
          lineHeight: '1em',
          margin: '0.05rem 0rem 0rem 0rem',
        }"
        v-bind="{ content: '我是文本' }"
      >
      </CustomText>

      <Container
        :style="{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '0.06rem 0rem 0rem 0rem',
        }"
      >
        <VantButton
          :style="{
            display: 'inline-block',
            boxSizing: 'border-box',
            width: '0.6rem',
            height: '0.2rem',
          }"
          v-bind="{ content: '按钮' }"
        >
        </VantButton>

        <VantButton
          :style="{
            display: 'inline-block',
            boxSizing: 'border-box',
            width: '0.6rem',
            height: '0.2rem',
          }"
          v-bind="{ content: '按钮' }"
        >
        </VantButton>
      </Container>
    </Container>
  </Root>
</template>

<script>
import Root from "./Root.vue";
import Container from "./Container.vue";
import CustomImg from "./CustomImg.vue";
import CustomText from "./CustomText.vue";
import VantButton from "./VantButton.vue";

export default {
  name: "GoodsItem",
  components: {
    Root,
    Container,
    CustomImg,
    CustomText,
    VantButton,
  },
};
</script>
