const alias = x => {
  x.stringify = JSON.stringify
  x.parse = JSON.parse
  x.el = document.querySelector.bind(document)
  x.now = Date.now
}

export default alias
