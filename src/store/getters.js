const getters = {
  // base info
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  token: state => state.user.token,
  // address
  selectedAddress: state => state.address.selectedAddress
}

export default getters
