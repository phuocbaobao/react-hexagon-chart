import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.createHexagonContainer = this.createHexagonContainer.bind(this);
  }
  

  componentDidMount() {
    this.createHexagonContainer();
    this.drawHexagon(1);
  }

  createHexagonContainer(a = 5, b = 5, c = 5, d = 5, e = 5) {
    const hexagon = this.refs.hexagon;
    const context = hexagon.getContext('2d');
    const hWidth = hexagon.width;
    context.strokeStyle = "#ff4500";
    context.fillStyle = "#ff4500";
    context.beginPath();
    context.moveTo(hWidth / 2, 0);
    context.lineTo(0, hWidth / 4);
    context.lineTo(0, hWidth * 0.75);
    context.lineTo(hWidth / 2, hWidth);
    context.lineTo(hWidth, hWidth * 0.75);
    context.lineTo(hWidth, hWidth / 4);
    context.lineTo(hWidth / 2, 0);
    context.stroke();
    // context.fill();
  }

  drawHexagon(a = 5, b = 5, c = 5, d = 5, e = 5) {
    const hexagon = this.refs.hexagon;
    const context = hexagon.getContext('2d');
    const hWidth = hexagon.width;
    // context.strokeStyle = "black";
    context.fillStyle = "#ff4500";
    context.beginPath();
    context.moveTo(hWidth / 2, (hWidth/2) * (1 - (a / 5)));
    context.lineTo(0, hWidth / 4);
    context.lineTo(0, hWidth * 0.75);
    context.lineTo(hWidth / 2, hWidth);
    context.lineTo(hWidth, hWidth * 0.75);
    context.lineTo(hWidth, hWidth / 4);
    context.lineTo(hWidth / 2, (hWidth/2) * (1 - (a / 5)));
    context.stroke();
    context.fill();
  }


  render() {
    const hexagonSize = window.innerHeight / 2;

    return (
      <div className="App">
        <canvas ref="hexagon" width={hexagonSize} height={hexagonSize}></canvas>
      </div>
    );
  }
}

export default App;
