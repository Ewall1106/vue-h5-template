/**
 * 分转换为元，并保留小数点后两位
 * @param {Number} num
 */
export function toDecimal(num = undefined) {
  return num ? (+num / 100).toFixed(2) : num
}
