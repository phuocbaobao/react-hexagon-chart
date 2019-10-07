import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.createHexagonContainer = this.createHexagonContainer.bind(this);
  }
  

  componentDidMount() {
    this.createHexagonContainer(5, 5, 5, 2, 5, 5);
  }

  createHexagonContainer(a = 5, b = 5, c = 5, d = 5, e = 5, f = 5) {
    const hexagon = this.refs.hexagon;
    const context = hexagon.getContext('2d');
    const height = hexagon.height;
    context.strokeStyle = "#ff4500";
    context.fillStyle = "#ff4500";
    context.beginPath();
    const fy = (height / 4) * (1 - f / 5);
    context.moveTo(0, (height / 4) + fy);
    const width = Math.sqrt(Math.pow(height / 2, 2) - Math.pow(height / 4, 2)) * 2;
    context.lineTo(width / 2, (height / 2) * (1 - a / 5));
    context.lineTo(width, height / 4);
    context.lineTo(width, height * 0.75);
    context.lineTo(width / 2, height - (height / 2) * (1 - d / 5));
    context.lineTo(0, height * 0.75);
    context.lineTo(0, height / 4);
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
