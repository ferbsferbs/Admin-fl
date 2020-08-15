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
import TablaSponsor from "./TableHover";
import { ResponsiveContainer, LineChart, Line } from "recharts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import privateActions from "../../../../API/privateCalls/privateActions";
import { toast } from "react-toastify";
export default class Sponsors extends React.Component {
  constructor() {
    super();
    this.formRef = React.createRef();
    }

    
  state = { loading: true, data: {},page:0,size:7,listSponsor:[] };

  componentDidMount() {
    this.loadSponsors()
  }

  loadSponsors(){
    privateActions.listSponsors(this.state.page,this.state.size).then(res=>{
      
      this.setState({listSponsor:res,loading:false})
    })
  }
  submit(e){
    e.preventDefault()

   var descripcion = e.target.descripcion.value
   var nombre = e.target.name.value
   privateActions.AddSponsors({nombre,descripcion}).then(res=>{
    this.loadSponsors()
    this.formRef.current.reset()
    toast.success('Sponsor agregado con exito!')
   })
   
  }
  paginate(direc) {
    if (direc > 0) {
      this.setState(
        { page: this.state.page + 1 },
        () => {
          privateActions
            .listSponsors(this.state.page, this.state.size)
            .then((res) => {
              this.setState({ listSponsor: res });
            });
        }
      );
    } else {
      this.setState(
        {
          page:
            this.state.page == 0
              ? this.state.page
              : this.state.page - 1,
        },
        () => {
          privateActions
            .listSponsors(this.state.page, this.state.size)
            .then((res) => {
              this.setState({ listSponsor: res });
            });
        }
      );
    }
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
          <Col md="6">
                            <Card className="main-card mb-5 ">
                                <CardBody >
                                    <CardTitle>Agregar Sponsor</CardTitle>
                                    <Form innerRef={this.formRef} onSubmit={e=>this.submit(e)}>
                                        <FormGroup>
                                            <Label for="name">Nombre</Label>
                                            <Input required  name="name" id="name"
                                                   placeholder="Nombre del sponsor"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="descripcion">Descripcion</Label>
                                            <Input required name="descripcion" id="descripcion"
                                                   placeholder="Detalle del sponsor"/>
                                        </FormGroup>
                                      {/*   <FormGroup>
                                            <Label for="examplePassword">Logo</Label>
                                            <Input type="file" name="password" id="examplePassword"
                                                   placeholder="Hacé click para subir un logo"/>
                                        </FormGroup> */}
                                        
                                        <Button color="primary" type="submit" className="mt-1">Crear Sponsor</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>

            <Col md="6">
              <div className="card mb-2 widget-chart card-hover-shadow-2x">
                <div className="icon-wrapper border-light rounded-circle">
                  <div className="icon-wrapper-bg bg-light" />
                  <i className="pe-7s-cash icon-gradient bg-malibu-beach"> </i>
                </div>
                <div className="widget-numbers">10</div>
                <div className="widget-subheading">Sponsors</div>
              </div>
           
           
              <div className="card mb-3 widget-chart card-hover-shadow-2x">
                <div className="icon-wrapper border-light rounded-circle">
                  <div className="icon-wrapper-bg bg-light" />
                  <i className="lnr-graduation-hat icon-gradient bg-malibu-beach"> </i>
                </div>
                <div className="widget-numbers">1</div>
                <div className="widget-subheading">Docentes Patrocinados</div>
              </div>
            </Col>
        
          
                   
                        </Row>
          <Row>
            <Col lg="12">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Sponsors</CardTitle>
                  <TablaSponsor page={this.state.page} paginate={num=>this.paginate(num)} data={this.state.listSponsor} />
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
