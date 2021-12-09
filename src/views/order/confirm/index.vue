<template>
  <div class="order-confirm">
    <nav-bar title="确认订单" />

    <van-contact-card
      :type="contact.type"
      :name="contact.name"
      :tel="contact.tel"
      @click="onContact"
    />

    <div class="list">
      <list-item :list="list" />
    </div>

    <submit-bar
      :amount="amount"
      :loading="submitLoading"
      @handleSubmit="handleSubmit"
    />
    <Skeleton v-if="isSkeletonShow" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import ListItem from "./modules/ListItem";
import SubmitBar from "./modules/SubmitBar";
import Skeleton from "./modules/Skeleton";

import { getAddressList } from "@/api/user";
import { getOrderList, settleOrder } from "@/api/order";

export default {
  name: "OrderConfirm",
  components: {
    ListItem,
    SubmitBar,
    Skeleton,
  },
  data() {
    return {
      contact: {
        type: "edit",
        name: "",
        tel: "",
      },
      list: [],
      isSkeletonShow: true,
      submitLoading: false,
    };
  },
  computed: {
    ...mapGetters(["ids", "uid"]),
    amount() {
      let price = 0;
      this.list.forEach((item) => {
        price += item.selectedNum * item.price;
      });
      return price;
    },
  },
  mounted() {
    this.getOrderList();
    this.getAddress();
  },
  methods: {
    // 获取列表
    getOrderList() {
      getOrderList({
        ids: this.ids,
      }).then((res) => {
        this.list = res.entry;
        this.isSkeletonShow = false;
      });
    },
    // 获取地址
    getAddress() {
      getAddressList().then((res) => {
        const { list = [], defaultId = "" } = res.entry;
        let address = "";
        if (defaultId) {
          address = list.filter((item) => item.addressId === defaultId);
        } else address = list.filter((item) => item.isDefault === true);
        if (address && address.length) {
          const [{ name, tel, addressId }] = address;
          this.contact = {
            type: "edit",
            addressId,
            name,
            tel: tel + "",
          };
        } else {
          this.contact = { type: "add" };
        }
      });
    },
    // 地址栏跳转
    onContact() {
      this.$router.push({
        path: "/address",
      });
    },
    // 提交订单
    handleSubmit() {
      if (!this.contact.addressId) {
        this.$toast("请添加收货联系人地址");
        return;
      }
      this.submitLoading = true;
      settleOrder({
        uid: this.uid,
        list: this.list,
      }).then((res) => {
        const orderId = res.entry;
        this.submitLoading = false;
        this.$router.replace({
          path: "/order/status",
          query: {
            orderId,
          },
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.order-confirm {
  min-height: 100vh;
  background: #f5f5f5;
}
</style>
