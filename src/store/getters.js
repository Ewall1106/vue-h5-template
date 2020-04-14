const getters = {
  // base info
  id: state => state.user.id,
  name: state => state.user.name,
  userInfo: state => state.user.userInfo,

  // address
  addressList: state => state.address.addressList,
  selectedAddress: state => state.address.selectedAddress,

  // search
  searchKey: state => {
    if (state.search.searchKey.length <= 0) {
      return JSON.parse(localStorage.getItem('searchKey')) || []
    } else {
      return state.search.searchKey
    }
  }
}

export default getters
