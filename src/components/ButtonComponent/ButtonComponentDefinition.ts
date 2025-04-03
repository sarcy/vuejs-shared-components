import type { PropType } from 'vue';

type callbackFunction = () => {}
type ButtonType = 'submit' | 'button' | 'reset' | undefined

const props = {
  buttonLabel: {
    type: String,
    required: true,
  },
  buttonType: {
    type: String as PropType<ButtonType>,
    required: true,
    default: 'submit'
  },
  tabIndex: {
    type: Number,
    required: false,
    default: 1
  },
  clickHandler: {
    type: Function as PropType<callbackFunction>,
    required: false,
    default: () => {}
  }
}

export default props;