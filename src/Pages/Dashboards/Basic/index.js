import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import {
  Row,
  Col,
  Button,
  CardHeader,
  Card,
  CardBody,
  Progress,
  TabContent,
  TabPane,
  CardTitle,
} from "reactstrap";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import {
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
  Bar,
  BarChart,
  ComposedChart,
  CartesianGrid,
  Tooltip,
  LineChart,
} from "recharts";

import privateActions from "../../../API/privateCalls/privateActions";
import ModalExample from "../../Components/Modal/Examples/Modal";
import ModalCustomCloseButton from "../../Components/Modal/Examples/ModalCustomCloseButton";
import ModalCustomCloseIcon from "../../Components/Modal/Examples/ModalCustomCloseIcon";
import ModalAlumno from "./modalAlumno";

export default class AnalyticsDashboard1 extends Component {
  constructor() {
    super();

    this.state = {
      dropdownOpen: false,
      activeTab1: "11",
      loading: true,
      loading1: true,
      mainData: null,
      canShowModal: false,
      combo: {},
      listaAlumnosPage: 0,
      listaAlumnos: [],
    };
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }
  componentDidMount() {
    privateActions.dashboardCombo().then((res) => {
      console.warn(res);
      this.setState({ loading: false, mainData: res.result });
    });

    privateActions.listAlumnos(this.state.listaAlumnosPage, 4).then((res) => {
      console.warn(res.result);
      this.setState({ loading1: false, listaAlumnos: res.result });
    });
  }

  paginate(direc) {
    if (direc > 0) {
      this.setState(
        { listaAlumnosPage: this.state.listaAlumnosPage + 1 },
        () => {
          privateActions
            .listAlumnos(this.state.listaAlumnosPage, 4)
            .then((res) => {
              this.setState({ listaAlumnos: res.result });
            });
        }
      );
    } else {
      this.setState(
        {
          listaAlumnosPage:
            this.state.listaAlumnosPage == 0
              ? this.state.listaAlumnosPage
              : this.state.listaAlumnosPage - 1,
        },
        () => {
          privateActions
            .listAlumnos(this.state.listaAlumnosPage, 4)
            .then((res) => {
              this.setState({ listaAlumnos: res.result });
            });
        }
      );
    }
  }

  handleOpen() {
    this.setState({ canShowModal: true });
  }

  handleClose() {
    this.setState({ canShowModal: false });
  }
  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  render() {
    if (this.state.loading || this.state.loading1) return null;
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
          <div>
         
            <PageTitle
              heading="Informaciones Generales"
              subheading="Bien Venido, estas en la pantalla principal. Podes ver los detalles generales del video juego!"
              icon="pe-7s-home icon-gradient bg-mean-fruit"
            />

            <Row>
              <Col md="12" lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>
                      Avance Promedio de los alumnos:{" "}
                      {this.state.mainData.alumnos.avancePromedio}%
                    </CardTitle>
                    <div className="divider"> </div>
                    <Progress
                      className="mb-3 progress-bar-animated-alt"
                      value={this.state.mainData.alumnos.avancePromedio}
                    />
                  </CardBody>
                </Card>
                <Row>
                  <Col lg="6">
                    <div className="card mb-3 widget-chart">
                      <div className="widget-chart-content">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-primary" />
                          <i className="pe-7s-world text-primary" />
                        </div>
                        <div className="widget-numbers">
                          {this.state.mainData.paises.cantidad}
                        </div>
                        <div className="widget-subheading">
                          Cantidad de paises participando
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
                          <div className="icon-wrapper-bg bg-danger" />
                          <i className="pe-7s-map-2 text-danger" />
                        </div>
                        <div className="widget-numbers">
                          {this.state.mainData.paises.localidad.cantidad}
                        </div>
                        <div className="widget-subheading">
                          Cantidad de localidades participando
                        </div>
                        <div className="widget-description text-danger"></div>
                      </div>
                      <div className="widget-chart-wrapper chart-wrapper-relative">
                        <ResponsiveContainer height={100}>
                          <BarChart data={data}>
                            <Bar
                              dataKey="uv"
                              fill="#81a4ff"
                              stroke="#3f6ad8"
                              strokeWidth={2}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md="12" lg="6">
                <Row>
                  <Col md="6">
                    <div className="card mb-3 bg-arielle-smile widget-chart text-white card-border">
                      <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-white opacity-10" />
                        <i className="lnr-users icon-gradient bg-arielle-smile" />
                      </div>
                      <div className="widget-numbers">
                        {this.state.mainData.familias.cantidad}
                      </div>
                      <div className="widget-subheading">
                        Familias Inscriptas
                      </div>
                      <div className="widget-description text-white">
                        <span className="pl-1"></span>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="card mb-3 bg-midnight-bloom widget-chart text-white card-border">
                      <div className="icon-wrapper rounded">
                        <div className="icon-wrapper-bg bg-white opacity-10" />
                        <i className="lnr-graduation-hat icon-gradient bg-warm-flame" />
                      </div>
                      <div className="widget-numbers">
                        {this.state.mainData.alumnos.cantidad}
                      </div>
                      <div className="widget-subheading">
                        Alumnos Inscriptos
                      </div>
                      <div className="widget-description text-white">
                        <span className="pl-1"></span>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="card mb-3 bg-grow-early widget-chart text-white card-border">
                      <div className="icon-wrapper rounded">
                        <div className="icon-wrapper-bg bg-dark opacity-9" />
                        <i className="lnr-briefcase " />
                      </div>
                      <div className="widget-numbers">
                        {this.state.mainData.docentes.cantidad}
                      </div>
                      <div className="widget-subheading">
                        docentes Inscriptos
                      </div>
                      <div className="widget-description text-white">
                        <span className="pl-1"></span>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="card mb-3 bg-love-kiss widget-chart card-border">
                      <div className="widget-chart-content text-white">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-white opacity-4" />
                          <i className="lnr-apartment" />
                        </div>
                        <div className="widget-numbers">
                          {this.state.mainData.colegios.cantidad}
                        </div>
                        <div className="widget-subheading">
                          Colegios Inscriptos
                        </div>
                        <div className="widget-description text-white">
                          <span className="pl-1"></span>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer width="100%" aspect={3.0 / 1.0}>
                          <LineChart
                            data={data}
                            margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
                          >
                            <Line
                              type="monotone"
                              dataKey="pv"
                              stroke="#ffffff"
                              strokeWidth={3}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <Card className="main-card mb-3">
                  <div className="card-header">
                    Resumen de alumnos
                    <div className="btn-actions-pane-right"></div>
                  </div>
                  <div className="table-responsive">
                    <table className="align-middle mb-0 table table-borderless table-striped table-hover ">
                      <thead>
                        <tr>
                          <th className="text-center">id</th>
                          <th>Name</th>
                          <th className="text-center">Localidad</th>
                          <th className="text-center">Completo</th>
                          <th className="text-center">Detalles</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.listaAlumnos.map((e, index) => {
                          return (
                            <tr>
                              <td className="text-center text-muted">
                                #{e.id}
                              </td>
                              <td>
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left flex2">
                                      <div className="widget-heading">
                                        {e.usuario}
                                      </div>
                                      <div className="widget-subheading opacity-7">
                                        Nivel: {/* {e.nivel.name} */} 50
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">
                                {/* {e.localidad} */}vicente lopez
                              </td>
                              <td className="text-center">
                                <div className="badge badge-warning">
                                  {/*   {e.nivel.percentaje} */} 50
                                </div>
                              </td>
                              <td className="text-center">
                                <ModalAlumno alumno={e}></ModalAlumno>
                              </td>
                            </tr>
                          );
                        })}
                        <div>
                          <nav
                            aria-label="Page"
                            className="d-flex w-100 justify-content-center  "
                          >
                            <ul className="pagination">
                              <li
                                className="page-item"
                                onClick={() => this.paginate(0)}
                              >
                                <a className="page-link" aria-label="Previous">
                                  <span aria-hidden="true">«</span>
                                  <span className="sr-only">
                                    {" "}
                                    Pagina Anterior
                                  </span>
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link">
                                  {this.state.listaAlumnosPage + 1}
                                </a>
                              </li>
                              <li
                                className="page-item"
                                onClick={() => this.paginate(1)}
                              >
                                <a className="page-link" aria-label="Next">
                                  <span aria-hidden="true">»</span>
                                  <span className="sr-only">
                                    Proxima Pagina
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
          
        </ReactCSSTransitionGroup>
        
      </Fragment>
    );
  }
}

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];
