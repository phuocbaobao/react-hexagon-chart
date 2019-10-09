import React from 'react';
import './styles.css';
import Hexagon from '../hexagon';
import { Row, Col } from 'react-bootstrap';

class Home extends React.Component {

  render() {
    const selfEvaluation = [2, 4, 5, 2, 1, 3];
    const mentorEvaluation = [3, 5, 1, 3, 2, 4];
    const teamMateEvaluation = [4, 2, 3, 1, 5, 2];
    const selfAndMentorTitle = "Self and Mentor's evaluation";
    const selfAndTeammateTitle = "Self and Teammate's evaluation"

    return (
      <Row className="App">
        <Col>
          <Hexagon self={selfEvaluation} external={mentorEvaluation} title={selfAndMentorTitle} />
        </Col>
        <Col>
          <Hexagon self={selfEvaluation} external={teamMateEvaluation} title={selfAndTeammateTitle} />
        </Col>
      </Row>
    );
  }
}

export default Home;
