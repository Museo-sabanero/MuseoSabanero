<template>
  <div>
    <div class="steps-wrap">
      <div class="steps-box">
        <span> <i :class="['bx', icon]"></i></span>
        <div class="content">
          <h4 class="title-color font-sm">{{ title }}:</h4>
          <div class="input-box mt-3">
            <input
              :id="id"
              :value="modelValue"
              type="text"
              :placeholder="placeholder"
              class="form-control"
              :required="required"
              @input="$emit('update:modelValue', $event.target.value)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['modelValue', 'title', 'icon', 'id', 'required', 'placeholder'],
  emits: ['update:modelValue'],
}
</script>
<style lang=""></style>
