<template>
 <label v-if="label">{{label}}</label>
    <select :value="modelValue"
    class="field"
    v-bind="{...$attrs,onChange:($event)=>{$emit('update:modelValue', $event.target.value)} }">
        <option
          v-for="option in options"
          :value="option"
          :key="option"
          :selected="option === modelValue"
        >{{ option }}</option>
      </select>
</template>
<script>
export default {
  name: 'base_select',
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
