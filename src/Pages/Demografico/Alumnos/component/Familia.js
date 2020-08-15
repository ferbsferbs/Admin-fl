import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
} from "reactstrap";
import TablaColegios from "./TableHover";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import json from "./JSON_FREE.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export default class Familia extends React.Component {
  state = { loading: true, data: {} };

  componentDidMount() {
    let data = json,
      loading = false;
    this.setState({ loading, data });
  }

  render() {
    console.log(this.state.data);
    if (this.state.loading) return null;
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Row>
            <Col md="4">
              
            </Col>
            <Col md="4">
              <div className="card mb-3 widget-chart card-hover-shadow-2x">
                <div className="icon-wrapper border-light rounded-circle">
                  <div className="icon-wrapper-bg bg-light" />
                  <i className="lnr-users icon-gradient bg-malibu-beach"> </i>
                </div>
                <div className="widget-numbers">394</div>
                <div className="widget-subheading">Familias</div>
              </div>
            </Col>
            <Col md="4">
              
              </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Docentes Free</CardTitle>
                  <TablaColegios data={this.state.data.list} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

const data = [
  {
    name: "Page A",
    uv: Math.random() * 2000,
    pv: Math.random() * 2000,
    amt: Math.random() * 2000,
  },
  {
    name: "Page B",
    uv: Math.random() * 2000,
    pv: Math.random() * 2000,
    amt: Math.random() * 2000,
  },
  {
    name: "Page C",
    uv: Math.random() * 2000,
    pv: Math.random() * 2000,
    amt: Math.random() * 2000,
  },
  {
    name: "Page D",
    uv: Math.random() * 2000,
    pv: Math.random() * 2000,
    amt: Math.random() * 2000,
  },
  {
    name: "Page E",
    uv: Math.random() * 2000,
    pv: Math.random() * 2000,
    amt: Math.random() * 2000,
  },
  {
    name: "Page F",
    uv: Math.random() * 2000,
    pv: Math.random() * 2000,
    amt: Math.random() * 2000,
  },
  {
    name: "Page G",
    uv: Math.random() * 2000,
    pv: Math.random() * 2000,
    amt: Math.random() * 2000,
  },
  {
    name: "Page C",
    uv: Math.random() * 2000,
    pv: Math.random() * 2000,
    amt: Math.random() * 2000,
  },
  {
    name: "Page D",
    uv: Math.random() * 2000,
    pv: Math.random() * 2000,
    amt: Math.random() * 2000,
  },
  {
    name: "Page E",
    uv: Math.random() * 2000,
    pv: Math.random() * 2000,
    amt: Math.random() * 2000,
  },
  {
    name: "Page F",
    uv: Math.random() * 2000,
    pv: Math.random() * 2000,
    amt: Math.random() * 2000,
  },
  {
    name: "Page G",
    uv: Math.random() * 2000,
    pv: Math.random() * 2000,
    amt: Math.random() * 2000,
  },
];
