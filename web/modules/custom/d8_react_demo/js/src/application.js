"use strict";

/**
 * Application root.
 */
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState({
      clicked: (this.state.clicked + 1)
    });
  }

  render() {
    let clicked = this.state.clicked;
    return (
      <div className="application">
        <p>This is a React app.</p>
        {clicked == 0 && 
          <p>You have not clicked the button.</p>
        }
        {clicked > 0 &&
          <p>You have clicked the button {clicked} time(s)!</p>
        }
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    );
  }
}

const domContainer = document.querySelector('#application-container');
ReactDOM.render(<MyApp />, domContainer);
