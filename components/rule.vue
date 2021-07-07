<template>
  <div class="md-modal md-effect" ref="modal">
    <div class="md-content">
      <img
        src="../assets/images/pink.jpg"
        width="100%"
        height="100%"
        style="position: fixed;z-index:-1;"
      />
      <h3>Modal Dialog</h3>
      <div>
        <p>
          This is a modal window. You can do the following things with it:
        </p>
        <ul>
          <li>
            <strong>Read:</strong>
            modal windows will probably tell you something important so don't
            forget to read what they say.
          </li>
          <li>
            <strong>Look:</strong>
            a modal window enjoys a certain kind of attention; just look at it
            and appreciate its presence.
          </li>
          <li>
            <strong>Close:</strong>
            click on the button below to close the modal.
          </li>
        </ul>
        <button class="md-close" @click="close">Close me!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$refs.modal.classList.remove('md-show');
    }
  }
};
</script>

<style lang="scss" scoped>
.md-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  max-width: 630px;
  min-width: 320px;
  height: auto;
  z-index: 99;
  visibility: visible;
  -webkit-backface-visibility: visible;
  -moz-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.md-effect .md-content {
  -webkit-transform: scale(0.7);
  -moz-transform: scale(0.7);
  -ms-transform: scale(0.7);
  transform: scale(0.7);
  opacity: 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.md-show.md-effect .md-content {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}
</style>
