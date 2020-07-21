<template>
    <div id="termynal-demo" data-termynal>
        <span data-ty="input">ls-lint</span>
        <span data-ty>src/test/Test.js failed for rules: snakecase<br>src/test/YouTube.js failed for rules: snakecase</span>
    </div>
</template>

<script>
import 'termynal/termynal.css';
import Termynal from '../packages/termynal/termynal';

export default {
  mounted() {
    const termynal = new Termynal('#termynal-demo');
  },
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');

    [data-termynal] {
        margin-top: 10px;
        font-size: 14px;
    }
</style>