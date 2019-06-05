<template>
  <div id="app">
    <div
      class="container"
      style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
    >
      <div class="mb-3 h1 text-center">Simpson's 1/3 Rule</div>

      <div class="row">
        <div class="input-group mb-3 col">
          <div class="input-group-prepend">
            <span class="input-group-text">Lower domain</span>
          </div>
          <input v-model="lowerDomain" type="number" step="0.1" class="form-control">
        </div>
        <div class="input-group mb-3 col">
          <div class="input-group-prepend">
            <span class="input-group-text">Upper domain</span>
          </div>
          <input v-model="upperDomain" type="number" step="0.1" class="form-control">
        </div>
        <div class="input-group mb-3 col">
          <div class="input-group-prepend">
            <span class="input-group-text">Integration steps</span>
          </div>
          <input v-model="integrationSteps" type="number" step="0.1" class="form-control">
        </div>
      </div>
      <div class="row">
        <button @click="calculate()" class="btn col btn-outline-primary mx-3">Calculate</button>
      </div>

      <div v-if="resultIsAvailable">
        <div class="dropdown-divider my-3"></div>

        <div class="mt-2 h3 text-center">
          <div class="h5">
            <b>Result:</b>
            {{ result }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpsonsRule } from "@/assets/simpsons-rule.js";
export default {
  data() {
    return {
      lowerDomain: null,
      upperDomain: null,
      integrationSteps: null,

      resultIsAvailable: false,
      result: null
    };
  },

  methods: {
    calculate() {
      const lowerDomain = parseFloat(this.lowerDomain);
      const upperDomain = parseFloat(this.upperDomain);
      const integrationSteps = parseFloat(this.integrationSteps);
      const simpsonsRule = new SimpsonsRule(
        lowerDomain,
        upperDomain,
        integrationSteps
      );

      this.result = simpsonsRule.calculate();
      this.resultIsAvailable = true;
    }
  }
};
</script>
