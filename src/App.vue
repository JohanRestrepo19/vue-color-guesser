<script>
import { getRandomExaCode } from './utils/exaColorUtils'

export default {
  data() {
    return {
      containerColor: '',
      optionColors: [],
      isCorrectOption: false,
      hasClicked: false,
    }
  },
  mounted() {
    this.containerColor = getRandomExaCode()
    this.optionColors = this.getNewOptions()
  },
  methods: {
    handleClickButton(option) {
      this.hasClicked = true
      if (option === this.containerColor) {
        this.containerColor = getRandomExaCode()
        this.isCorrectOption = true
      } else {
        this.isCorrectOption = false
      }
    },
    getNewOptions() {
      return [this.containerColor, getRandomExaCode(), getRandomExaCode()].sort(
        () => 0.5 - Math.random()
      )
    },
  },
  watch: {
    containerColor() {
      this.optionColors = this.getNewOptions()
    },
  },
}
</script>

<template>
  <div class="container">
    <h1>Color Guesser</h1>
    <div v-if="hasClicked">
      <h3 v-if="isCorrectOption && hasClicked">Right answer</h3>
      <h3 v-else>Wrong answer</h3>
    </div>
    <div
      class="color-conatiner"
      :style="{ backgroundColor: containerColor }"
    ></div>
    <div class="options-container">
      <button
        v-for="option in optionColors"
        :key="option"
        @click="handleClickButton(option)"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
}

h1,
h3 {
  text-align: center;
}

.color-conatiner {
  width: 300px;
  height: 300px;
  border-radius: 8px;
  border-width: 8px;
}

.options-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

button {
  border-radius: 4px;
}
</style>
