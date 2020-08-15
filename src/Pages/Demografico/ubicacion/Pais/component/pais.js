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
import json from "./JSON.json";
export default class Pais extends React.Component {

    state = { loading: true, data: {} };

    componentDidMount() {
      let data = json,
        loading = false;
      this.setState({ loading, data });
    }

    

  render() {
      console.log(this.state.data)
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
            <Col lg="4">
              <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg bg-primary" />
                    <i className="pe-7s-world text-primary" />
                  </div>
                  <div className="widget-numbers">{this.state.data.mainInfo.cantidadDePaises.number}</div>
                  <div className="widget-subheading">
                    Cantidad de paises
                  </div>
                  <div className="widget-description text-success"></div>
                </div>
                <div className="widget-chart-wrapper chart-wrapper-relative">
                  <ResponsiveContainer height={100}>
                    <LineChart
                      data={data}
                      margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
                    >
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#3ac47d"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>



            <Col lg="4">
              <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg bg-primary" />
                    <i className="pe-7s-world text-primary" />
                  </div>
                  <div className="widget-numbers">{this.state.data.mainInfo.escuelasMundo.number}</div>
                  <div className="widget-subheading">
                  Escuelas registradas en todo el mundo 
                  </div>
                  <div className="widget-description text-success"></div>
                </div>
                <div className="widget-chart-wrapper chart-wrapper-relative">
                  <ResponsiveContainer height={100}>
                    <LineChart
                      data={data}
                      margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
                    >
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#3ac47d"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>



            <Col lg="4">
              <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg bg-primary" />
                    <i className="pe-7s-world text-primary" />
                  </div>
                  <div className="widget-numbers">{this.state.data.mainInfo.totalAlumnos.number}</div>
                  <div className="widget-subheading">
                  Cantidad de alumnos en todo el mundo
                  </div>
                  <div className="widget-description text-success"></div>
                </div>
                <div className="widget-chart-wrapper chart-wrapper-relative">
                  <ResponsiveContainer height={100}>
                    <LineChart
                      data={data}
                      margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
                    >
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#3ac47d"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>





            
          </Row>
          <Row>
          <Col lg="12">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Paises </CardTitle>
                <TablaColegios data={this.state.data.list}/>
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
  { name: "Page A", uv: Math.random()*2000, pv: Math.random()*2000, amt: Math.random()*2000 },
  { name: "Page B", uv: Math.random()*2000, pv: Math.random()*2000, amt: Math.random()*2000 },
  { name: "Page C", uv: Math.random()*2000, pv: Math.random()*2000, amt: Math.random()*2000 },
  { name: "Page D", uv: Math.random()*2000, pv: Math.random()*2000, amt: Math.random()*2000 },
  { name: "Page E", uv: Math.random()*2000, pv: Math.random()*2000, amt: Math.random()*2000 },
  { name: "Page F", uv: Math.random()*2000, pv: Math.random()*2000, amt: Math.random()*2000 },
  { name: "Page G", uv: Math.random()*2000, pv: Math.random()*2000, amt: Math.random()*2000 },
  { name: "Page C", uv: Math.random()*2000, pv: Math.random()*2000, amt: Math.random()*2000 },
  { name: "Page D", uv: Math.random()*2000, pv: Math.random()*2000, amt: Math.random()*2000 },
  { name: "Page E", uv: Math.random()*2000, pv: Math.random()*2000, amt: Math.random()*2000 },
  { name: "Page F", uv: Math.random()*2000, pv: Math.random()*2000, amt: Math.random()*2000 },
  { name: "Page G", uv: Math.random()*2000, pv: Math.random()*2000, amt: Math.random()*2000 },
];
