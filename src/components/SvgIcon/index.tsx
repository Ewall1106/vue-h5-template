import { computed, defineComponent } from 'vue'
import './index.scss'

export default defineComponent({
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: () => ''
    },
    size: {
      type: String,
      default: () => '28px'
    },
    width: {
      type: Number,
      default: () => 0
    },
    height: {
      type: Number,
      default: () => 0
    }
  },
  setup(props) {
    const iconName = computed(() => `#icon-${props.iconClass}`)
    const svgClass = computed(() =>
      props.className ? `svg-icon ${props.className}` : 'svg-icon'
    )
    return () => (
      <svg
        class={svgClass.value}
        aria-hidden="true"
        width={props.width ? props.width : props.size}
        height={props.width ? props.width : props.size}
      >
        <use xlinkHref={iconName.value} />
      </svg>
    )
  }
})
