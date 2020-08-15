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
import TablaPremium from "./TableHoverPremium";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import privateActions from "../../../../API/privateCalls/privateActions";
export default class DocentePremium extends React.Component {

  state = { loading: true, data: {},listaDocPages:0,itemsQnty:7,listaDocente:[] };

  paginate(direc) {
    if (direc > 0) {
      this.setState(
        { listaDocPages: this.state.listaDocPages + 1 },
        () => {
          privateActions
            .listDocentes(this.state.listaDocPages, this.state.itemsQnty,4)
            .then((res) => {
              this.setState({ listaDocente: res.result });
            });
        }
      );
    } else {
      this.setState(
        {
          listaDocPages:
            this.state.listaDocPages == 0
              ? this.state.listaDocPages
              : this.state.listaDocPages - 1,
        },
        () => {
          privateActions
            .listDocentes(this.state.listaDocPages, this.state.itemsQnty,4)
            .then((res) => {
              this.setState({ listaDocente: res.result });
            });
        }
      );
    }
  }
  componentDidMount() {
  
this.fetchDocentes()

  }

  fetchDocentes(){
    privateActions
    .listDocentes(this.state.listaDocPages,this.state.itemsQnty,4)
    .then((res) => {
      console.warn(res)
      this.setState({ listaDocente: res.result,loading:false });
    });
  }
  onDelete(){
    this.fetchDocentes()

  }

  render() {
     
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
            <Col lg="6">
              <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg bg-primary" />
                    <i className="lnr-graduation-hat text-primary" />
                  </div>
                  <div className="widget-numbers">5</div>
                  <div className="widget-subheading">
                    Cantidad de alumnos totales de docentes Premium
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



            <Col lg="6">
              <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                  <div className="icon-wrapper rounded-circle">
                    <div className="icon-wrapper-bg bg-primary" />
                    <i className="pe-7s-users text-primary" />
                  </div>
                  <div className="widget-numbers">7</div>
                  <div className="widget-subheading">
                  Cantidad de docentes Premium
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
                <CardTitle>Docentes Premium </CardTitle>
                <TablaPremium onDelete={()=>this.onDelete()} page={this.state.listaDocPages} paginate={num=>this.paginate(num)} data={this.state.listaDocente}/>
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
