"use strict";

/**
 * Application root.
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyApp = function (_React$Component) {
  _inherits(MyApp, _React$Component);

  function MyApp(props) {
    _classCallCheck(this, MyApp);

    var _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));

    _this.state = {
      clicked: 0
    };

    _this.clickHandler = _this.clickHandler.bind(_this);
    return _this;
  }

  _createClass(MyApp, [{
    key: "clickHandler",
    value: function clickHandler(e) {
      e.preventDefault();
      this.setState({
        clicked: this.state.clicked + 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var clicked = this.state.clicked;
      return React.createElement(
        "div",
        { className: "application" },
        React.createElement(
          "p",
          null,
          "This is a React app."
        ),
        clicked == 0 && React.createElement(
          "p",
          null,
          "You have not clicked the button."
        ),
        clicked > 0 && React.createElement(
          "p",
          null,
          "You have clicked the button ",
          clicked,
          " time(s)!"
        ),
        React.createElement(
          "button",
          { onClick: this.clickHandler },
          "Click me!"
        )
      );
    }
  }]);

  return MyApp;
}(React.Component);

var domContainer = document.querySelector('#application-container');
ReactDOM.render(React.createElement(MyApp, null), domContainer);