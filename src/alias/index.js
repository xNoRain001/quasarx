const alias = x => {
  x.stringify = x.json = JSON.stringify
  x.parse = JSON.parse
  x.el = document.querySelector.bind(document)
  x.createEl = document.createElement.bind(document)
  x.now = Date.now
  x.type = x.getType
}

export default alias
