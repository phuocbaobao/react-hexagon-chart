import React from 'react';
import './styles.css';
import { Col } from 'react-bootstrap';

class Hexagon extends React.Component {
    constructor(props) {
        super(props);
        this.drawHexagonChart = this.drawHexagonChart.bind(this);
    }

    componentDidMount() {
        const { self, external } = this.props;

        const hexagon = this.refs.hexagon;
        const context = hexagon.getContext('2d');
        const height = hexagon.height - 70;
        const width = Math.sqrt(Math.pow(height / 2, 2) - Math.pow(height / 4, 2)) * 2;
        // X axis start at hexagon.width - width) / 2
        // Y axis start at 35
        context.translate((hexagon.width - width) / 2, 35);
        const hexagonContainerPoint = [5, 5, 5, 5, 5, 5];
        this.drawHexagonChart(context, height, width, hexagonContainerPoint, '#ff4500', false);
        this.edgeTitle(context, height, width);
        this.hexagonAxis(context, height, width);
        for (let i = 0; i < 4; i++) {
            let internalHexagonContainer = [i + 1, i + 1, i + 1, i + 1, i + 1, i + 1];
            this.drawHexagonChart(context, height, width, internalHexagonContainer, '#e1e4e6', false);
        }
        this.drawHexagonChart(context, height, width, self, 'purple', false);
        this.drawHexagonChart(context, height, width, external, 'orange', false);
    }

    sin(degree) {
        return Math.sin((degree * Math.PI) / 180);
    }

    cos(degree) {
        return Math.cos((degree * Math.PI) / 180);
    }

    handleInvalidInput(point) {
        if (point > 5) {
            return 5;
        } else if (point < 0) {
            return 0;
        } else {
            return point;
        }
    }

    hexagonAxis(context, height, width) {
        const centerX = width / 2;
        const centerY = height / 2;
        const hexagonTopPosition = [
            {
                x: width / 2,
                y: 0
            },
            {
                x: width,
                y: height / 4
            },
            {
                x: width,
                y: height * 3 / 4
            },
            {
                x: width / 2,
                y: height
            },
            {
                x: 0,
                y: height * 3 / 4
            },
            {
                x: 0,
                y: height / 4
            }
        ]
        context.strokeStyle = '#e1e4e6';
        for (let i = 0; i < hexagonTopPosition.length; i++) {
            context.beginPath();
            context.moveTo(centerX, centerY);
            context.lineTo(hexagonTopPosition[i].x, hexagonTopPosition[i].y);
            context.stroke();
        }
    }

    edgeTitle(context, height, width) {
        const title = ['Hiệu quả', 'Tiến bộ', 'Kiến thức', 'Kỹ năng', 'Tinh thần \ntrách nhiệm', 'Chủ động \ntích cực'];
        const hexagonTitlePosition = [
            {
                x: width / 2,
                y: -20
            },
            {
                x: width + 40,
                y: height / 4
            },
            {
                x: width + 50,
                y: height * 3 / 4 + 10
            },
            {
                x: width / 2,
                y: height + 30
            },
            {
                x: -50,
                y: height * 3 / 4 + 10
            },
            {
                x: -50,
                y: height * 1 / 4 - 10
            }
        ]
        context.font = "20px Arial";
        context.textAlign = "center";
        for (let i = 0; i < hexagonTitlePosition.length; i++) {
            this.breakLine(context, title[i], hexagonTitlePosition[i].x, hexagonTitlePosition[i].y)
        }
    }

    breakLine(context, text, x, y) {
        const lineHeight = 20;
        var lines = text.split('\n');
        for (var i = 0; i < lines.length; i++) {
            context.fillText(lines[i], x, y + (i * lineHeight));
        }
    }

    drawHexagonChart(context, height, width, points, color, isFill) {
        const a = this.handleInvalidInput(points[0]);
        const b = this.handleInvalidInput(points[1]);
        const c = this.handleInvalidInput(points[2]);
        const d = this.handleInvalidInput(points[3]);
        const e = this.handleInvalidInput(points[4]);
        const f = this.handleInvalidInput(points[5]);
        const hexagonAngle = height / 2;
        context.strokeStyle = color;
        context.fillStyle = color;
        context.beginPath();
        // F Point
        const fy = (height / 4) + (this.cos(60) * hexagonAngle * (1 - f / 5));
        const fx = this.sin(60) * hexagonAngle * (1 - f / 5);
        // Start at F
        context.moveTo(fx, fy);
        const ax = width / 2;
        const ay = hexagonAngle * (1 - a / 5);
        // A Point
        context.lineTo(ax, ay);
        // B Point
        const by = (height / 4) + (this.cos(60) * hexagonAngle * (1 - b / 5));
        const bx = (width / 2) + (width / 2 - this.sin(60) * hexagonAngle * (1 - b / 5))
        context.lineTo(bx, by);
        // C Point
        const cy = hexagonAngle + (this.sin(30) * hexagonAngle * (c / 5));
        const cx = (width / 2) + (this.cos(30) * hexagonAngle * (c / 5));
        context.lineTo(cx, cy);
        // D Point
        const dx = width / 2;
        const dy = height - hexagonAngle * (1 - d / 5);
        context.lineTo(dx, dy);
        // E Point
        const ex = (width / 2) - this.cos(30) * hexagonAngle * (e / 5);
        const ey = hexagonAngle + this.sin(30) * hexagonAngle * (e / 5);
        context.lineTo(ex, ey);
        // Return to F
        context.lineTo(fx, fy);
        context.stroke();
        if (isFill) context.fill();
    }

    render() {
        const { title } = this.props;
        const hexagonSize = 500;

        return (
            <Col>
                <h3 className="title">{title}</h3>
                <canvas className="canvas" ref="hexagon" width={hexagonSize + 100} height={hexagonSize}></canvas>
            </Col>
        )
    }
}

export default Hexagon;