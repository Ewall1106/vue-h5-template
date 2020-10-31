const getters = {
  // base info
  id: state => state.user.id,
  name: state => state.user.name,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,

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
