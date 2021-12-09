<template>
  <div class="address-edit">
    <nav-bar :title="`${type === 1 ? '新增' : '编辑'}地址`" />

    <van-address-edit
      :address-info="addressInfo"
      :area-list="areaList"
      show-postal
      :show-delete="type === 2"
      show-set-default
      show-search-result
      :is-saving="isSaving"
      :is-deleting="isDeleting"
      :save-button-text="`${type === 1 ? '保存' : '更新'}`"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import areaList from "@/utils/area.js";
import {
  addAddress,
  deleteAddress,
  updateAddress,
  getAddress,
} from "@/api/user";
import { nanoid } from "nanoid";

export default {
  name: "AddressEdit",
  components: {
    NavBar,
  },
  data() {
    return {
      type: 1, // 1-新增 2-编辑
      isSaving: false,
      isDeleting: false,
      areaList,
      addressInfo: {},
    };
  },
  mounted() {
    const { type, id } = this.$route.query;
    this.type = Number(type);
    if (this.type === 2) {
      this.getAddressInfo(id);
    }
  },
  methods: {
    // 获取地址信息
    getAddressInfo(id) {
      this.$toast.loading("加载中...");
      getAddress({ addressId: id }).then((res) => {
        this.addressInfo = res.entry;
        this.$toast.clear();
      });
    },
    // 新增or更新
    onSave(address) {
      this.isSaving = true;
      if (this.type === 1) {
        addAddress({
          addressId: nanoid(6),
          ...address,
        }).then((res) => {
          this.isSaving = false;
          this.$notify({
            type: "success",
            message: "保存成功",
            duration: 2000,
            onOpened: () => {
              this.$router.back();
            },
          });
        });
      } else {
        updateAddress({
          ...address,
        }).then((res) => {
          this.isSaving = false;
          this.$notify({
            type: "success",
            message: "更新成功",
            duration: 2000,
            onOpened: () => {
              this.$router.back();
            },
          });
        });
      }
    },
    // 删除地址
    onDelete(address) {
      deleteAddress({
        addressId: address.addressId,
      }).then(() => {
        this.isSaving = false;
        this.$notify({
          type: "success",
          message: "删除成功",
          duration: 2000,
          onOpened: () => {
            this.$router.back();
          },
        });
      });
    },
  },
};
</script>

<style></style>
