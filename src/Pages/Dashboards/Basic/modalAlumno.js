import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class ModalAlumno extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <span className="d-inline-block mb-2 mr-2">
                <Button color="primary" onClick={this.toggle}>Ver Detalle</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.alumno.usuario}</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <Row className="d-flex justify-content-center">
                        <Col md="10 ">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">Nombre</Label>
                                            <Input value={this.props.alumno.usuario} type="email" name="email"disabled id="exampleEmail"
                                                   placeholder="with a placeholder"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="example">Fecha de nacimiento</Label>
                                            <Input value={this.props.alumno.fechaNacimiento} type=""disabled name="localidad" id="localidad"
                                                   placeholder="No tiene fecha de nacimiento registrada"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="example">Familiar</Label>
                                            <Input value={this.props.alumno.familiar} type=""disabled name="localidad" id="flia"
                                                   placeholder="No tiene familiar registrado"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="example">Localidad</Label>
                                            <Input value="Olivos" type=""disabled name="localidad" id="localidad"
                                                   placeholder="No tiene localidad registrada"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Docente</Label>
                                            <Input value={this.props.alumno.docente} type=""disabled name="localidad" id="localidad"
                                                   placeholder="No tiene docente registrado"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Aulas</Label>
                                            
                                            <Input type="select" name="select" id="exampleSelect">
                                                {this.props.alumno.aulas.length>0?this.props.alumno.aulas.map(e=>{
                                                return(
                                                    <option>1</option>
                                                )
                                            }):(<option>No tiene aulas registradas</option>)}
                                      
                                                
                                            </Input>
                                            <Button className="mt-2" color="primary" >Ver Aula</Button>
                                        </FormGroup>
                                        
                                        
                                      
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                        </Row>
                        <ModalFooter>
                       
                        <Button color="primary" onClick={this.toggle}>Volver</Button>{' '}
                    </ModalFooter>
                </Modal>
            </span>
        );
    }
}

export default ModalAlumno;
