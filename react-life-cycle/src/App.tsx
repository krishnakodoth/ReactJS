import React from 'react';
import './App.css';

type MyProps = {
  nameFromParent: String;
};

type MyState = {
  name: String;
  data: any[];
};

export default class App extends React.Component<{}, { show: boolean }> {
  constructor(props: any) {
    super(props);
    console.log("App - constructor");
    this.state = {
      show: true,
    }
  }

  render() {
    console.log("App - Render");
    return (
      <div>
        <div>{this.state.show ? <ChildComponent nameFromParent="getDerivedStateFromProps Method" /> : null}</div>

        <button onClick={() => { this.setState({ show: !this.state.show }) }}>Click me to toggle</button>
      </div>
    )
  }
}
class ChildComponent extends React.Component<MyProps, MyState>{
  constructor(props: any) {
    super(props);
    console.log("ChildComponent - constructor")
    this.state = {
      name: 'Constructor Method',
      data: [],
    }
  }
  static getDerivedStateFromProps(props: MyProps, state: MyState) {
    console.log("ChildComponent - getDerivedStateFromProps");
    return { name: props.nameFromParent }
  }
  componentDidMount() {
    console.log("ChildComponent - componentDidMount");
    fetch('https://jsonplaceholder.typicode.com/users').then(
      (response) => response.json()
    ).then(data => this.setState({ data: data }))

    setTimeout(() => {
      this.setState({ name: "componentDidMount Method" })
    }, 5000)
  }

  shouldComponentUpdate() {
    console.log("ChildComponent - shouldComponentUpdate");
    return true; //Change to true for state to update
  }

  getSnapshotBeforeUpdate(prevProps: MyProps, prevState: MyState) {
    console.log('ChildComponent - getSnapshotBeforeUpdate');
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
  }

  componentDidUpdate(prevState: any) {
    console.log('ChildComponent - componentDidUpdate');
    console.log('current-state', this.state)
    console.log('current-props', this.props)
    console.log('prevState', prevState)
  }

  componentWillUnmount() {
    console.log('ChildComponent - componentWillUnmount');
  }

  render() {
    console.log("ChildComponent - Render");
    return (
      <div>
        <p> This is a {this.state.name}</p>
      </div>
    )
  }
}
