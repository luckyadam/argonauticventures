export default {
  computed: {
    winSize () {
      const win = window
      return {
        width: win.innerWidth,
        height: win.innerHeight
      }
    }
  }
}
