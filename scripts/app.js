var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var randomColors = [];

for (var i = 0; i < 12; i++) {
    randomColors[i] = {
        color: [Math.round(getRandomArbitrary(0, 255)), Math.round(getRandomArbitrary(0, 255)), Math.round(getRandomArbitrary(0, 255))]
    };
}

var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card(props) {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

        _this.plus = function (e) {
            e.preventDefault();
            if (_this.brightness < 100) {
                _this.brightness++;
                console.log(_this.brightness);
                var color = [];
                for (var _i in _this.color) {
                    color[_i] = Math.round(_this.color[_i] * (_this.brightness / 100));
                }
                console.log(color);
                _this.setState({ color: color });
            }
        };

        _this.minus = function (e) {
            e.preventDefault();
            if (_this.brightness > 0) {
                _this.brightness--;
                console.log(_this.brightness);
                var color = [];
                for (var _i2 in _this.color) {
                    color[_i2] = Math.round(_this.color[_i2] * (_this.brightness / 100));
                }
                console.log(color);
                _this.setState({ color: color });
            }
        };

        _this.toHex = function (colorRgb) {
            var colorHex = "";
            for (var _i3 in colorRgb) {
                if (colorRgb[_i3] >= 16) {
                    colorHex += colorRgb[_i3].toString(16);
                } else {
                    colorHex += "0" + colorRgb[_i3].toString(16);
                }
            }
            return colorHex.toUpperCase();
        };

        _this.brightness = Math.round(Math.max.apply(Math, _toConsumableArray(props.color)) / 2.55);
        _this.color = [];
        for (var _i4 in props.color) {
            _this.color[_i4] = Math.round(props.color[_i4] + props.color[_i4] / _this.brightness * (100 - _this.brightness));
        }
        _this.state = {
            color: props.color
        };
        console.log(_this.brightness);
        console.log(_this.props.color);
        console.log(_this.color);
        return _this;
    }

    _createClass(Card, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "card" },
                React.createElement(
                    "div",
                    { className: "fill" },
                    React.createElement(
                        "svg",
                        { width: "100%", height: "100%" },
                        React.createElement("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "#" + this.toHex(this.state.color) })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "buttons" },
                    React.createElement(
                        "div",
                        { className: "button button-plus", onClick: this.plus },
                        "+"
                    ),
                    React.createElement(
                        "div",
                        { className: "button button-minus", onClick: this.minus },
                        "-"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "color" },
                    "#",
                    this.toHex(this.state.color)
                )
            );
        }
    }]);

    return Card;
}(React.Component);

var Desk = function (_React$Component2) {
    _inherits(Desk, _React$Component2);

    function Desk(props) {
        _classCallCheck(this, Desk);

        return _possibleConstructorReturn(this, (Desk.__proto__ || Object.getPrototypeOf(Desk)).call(this, props));
    }

    _createClass(Desk, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "desk" },
                randomColors.map(function (card, index) {
                    return React.createElement(Card, { key: index, color: card.color });
                })
            );
        }
    }]);

    return Desk;
}(React.Component);

var domContainer = document.querySelector('#react_container');
ReactDOM.render(React.createElement(Desk, null), domContainer);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}