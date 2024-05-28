import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default App;
