import { ToyReact, Component } from './ToyReact'

class MyComponent extends Component {
  render() {
    return (
      <div class="my-component">
        <span>Hello, </span>
        <span>{this.name}</span> 
        {this.children}
      </div>
    )
  }
}

let a = (
  <MyComponent name="Marvin">
    <span>!!</span>
  </MyComponent>
)

ToyReact.render(a, document.body)

// let b = 
//   <div name="b" id="b">
//     <span></span>
//     <span></span>
//   </div>
// document.body.appendChild(b)