class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }
  setAttribute(key, value) {
    this.root.setAttribute(key, value)
  }
  appendChild(vchild) {
    vchild.mountTo(this.root)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

export class Component {
  constructor(type) {
    this.children = []
  }
  appendChild(vchild) {
    this.children.push(vchild)
  }
  setAttribute(key, value) {
    this[key] = value
  }
  mountTo(parent) {
    const vdom = this.render()
    // parent.appendChild(vdom)
    vdom.mountTo(parent)
  }
}

export let ToyReact = {
  createElement(type, attrs, ...children) {
    let el
    // debugger
    if (typeof type === 'string') {
      el = new ElementWrapper(type)
    } else {
      el = new type
    }
    if (attrs) {
      for (let key in attrs) {
        el.setAttribute(key, attrs[key])
      }
    }
    let insertChildren = children => {
      for (let child of children) {
        if (Array.isArray(child)) {
          insertChildren(child)
        } else {
          if (typeof child === 'string') {
            child = new TextWrapper(child)
          }
          el.appendChild(child)
        }
      }
    }
    if (children) {

      insertChildren(children)
    }
    return el
  },
  render(vdom, parent) {
    vdom.mountTo(parent)
  }
}