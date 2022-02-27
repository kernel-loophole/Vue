/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable indent */
// eslint-disable-next-line no-trailing-spaces
// eslint-disable-next-line no-trailing-spaces
<template>
    <h3>Extras</h3>
      <div>
        <input
          type="checkbox"
          class="field"
        />
        <label>{{options[0]}}</label>
      </div>
</template>
<script>

export default {
  name: 'radio_button',
  props: {
    label: {
      type: String,
      default: 'Title'
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      default: () => ['All', 'Music', 'Sports', 'Arts', 'Food', 'Other'],
      required: true
    }
  }
}
</script>
