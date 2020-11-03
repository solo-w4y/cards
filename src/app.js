let randomColors = [];

for(let i = 0; i < 12; i++) {
    randomColors[i] = {
        color: [Math.round(getRandomArbitrary(0, 255)), Math.round(getRandomArbitrary(0, 255)), Math.round(getRandomArbitrary(0, 255))]
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color
        }
        this.fillColor = {
            bacgroundColor: this.toHex(this.state.color)
        }
    }

    plus = e => {
        e.preventDefault();
        if(Math.max(...this.state.color) < 255) {
            let color = [];
            for(let i in this.state.color) {
                color[i] = this.state.color[i] + 1;
            }
            this.setState({ color: color });
            console.log(this.state.color)
        }
    }

    minus = e => {
        e.preventDefault();
        if(Math.min(...this.state.color) > 0) {
            let color = [];
            for(let i in this.state.color) {
                color[i] = this.state.color[i] - 1;
            }
            this.setState({ color: color });
            console.log(this.state.color)
        }
    }

    toHex = (colorRgb) => {
        let colorHex = "";
        for(let i in colorRgb) {
            if(colorRgb[i] >= 16) {
                colorHex += colorRgb[i].toString(16);
            } else {
                colorHex += "0" + colorRgb[i].toString(16);
            }
        }
        return colorHex.toUpperCase();
    }

    render() {
        return (
            <div className="card">
                <div className="fill">
                    <svg  width="100%" height="100%">
                        <rect x="0" y="0" width="100%" height="100%" fill={"#" + this.toHex(this.state.color)}></rect>
                    </svg>
                </div>
                <div className="buttons">
                    <div className="button button-plus" onClick={this.plus}>+</div>
                    <div className="button button-minus" onClick={this.minus}>-</div>
                </div>
                <div className="color">#{this.toHex(this.state.color)}</div>
            </div>
        );
    }
}

class Desk extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="desk">
                {randomColors.map(card => (
                    <Card color={card.color}/>
                ))}
            </div>
        );
    }
}

const domContainer = document.querySelector('#react_container');
ReactDOM.render(<Desk />, domContainer);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }