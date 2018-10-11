export default {
    // 保存
    saveAddress(state, address) {
        state.address.push(address)
    },
    // 删除
    removeAddress(state, idx) {
        state.address.splice(idx, 1);
    },
    // 修改
    editAddress(state, payload) {
        console.log(payload)
        state.address.splice(payload.idx, 1, payload.data)
    }
}