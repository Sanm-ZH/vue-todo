import '../assets/styles/footer.styl'

export default {
  data() {
    return { author: 'if(){}else{}' }
  },
  render() {
    return (
      <div id="footer">
        <span>Written by { this.author }</span>
      </div>
    )
  }
}
