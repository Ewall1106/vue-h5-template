// https://webpack.js.org/guides/dependency-management/#requirecontext
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18446
const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  return requireContext.keys().map(requireContext)
}
requireAll(req)
