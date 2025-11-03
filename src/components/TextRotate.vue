<template>
  <span class="txt-rotate">
    <span class="wrap">{{ displayText }}</span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  toRotate: {
    type: Array,
    required: true
  },
  period: {
    type: Number,
    default: 1000
  }
})

const displayText = ref('')
const loopNum = ref(0)
const isDeleting = ref(false)
let timer = null
const delta = ref(300)

const tick = () => {
  const i = loopNum.value % props.toRotate.length
  const fullTxt = props.toRotate[i]

  if (isDeleting.value) {
    displayText.value = fullTxt.substring(0, displayText.value.length - 1)
  } else {
    displayText.value = fullTxt.substring(0, displayText.value.length + 1)
  }

  let newDelta = 300 - Math.random() * 100

  if (isDeleting.value) {
    newDelta /= 2
  }

  if (!isDeleting.value && displayText.value === fullTxt) {
    newDelta = props.period
    isDeleting.value = true
  } else if (isDeleting.value && displayText.value === '') {
    isDeleting.value = false
    loopNum.value++
    newDelta = 100
  }

  delta.value = newDelta
  timer = setTimeout(tick, newDelta)
}

onMounted(() => {
  tick()
})

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
  }
})
</script>

<style scoped>
.txt-rotate > .wrap {
  border-right: 0.08em solid #666;
}
</style>

