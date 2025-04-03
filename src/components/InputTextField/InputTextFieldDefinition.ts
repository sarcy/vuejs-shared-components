const props = {
  fieldLabel: {
    type: String,
    required: true
  },
  fieldId: {
    type: String,
    required: true
  },
  fieldName: {
    type: String,
    required: true
  },
  tabIndex: {
    type: Number,
    required: false,
    default: 1
  },
  required: {
    type: Boolean,
    required: false,
    default: false
  }
}

export default props;