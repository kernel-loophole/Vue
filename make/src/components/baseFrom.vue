<template>
    <label>{{label}}</label>
      <input
        type="text"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="field"
      >
</template>
<script>
export default {
  name: 'base_From',
  props: {
    label: {
      type: String,
      default: 'Title'
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}

</script>
