const getters = {
  // base info
  id: state => state.user.id,
  name: state => state.user.name,
  userInfo: state => state.user.userInfo,
  // address
  selectedAddress: state => state.address.selectedAddress
}

export default getters
