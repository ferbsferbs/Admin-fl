import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import DropdownStyles from '../../../Elements/Dropdowns/Examples/DropdownStyles';
import FormInputGroupButtonDropdown from '../../../Forms/Elements/Controls/Examples/InputGroup/InputGroupButtonDropdown';
import privateActions from '../../../../API/privateCalls/privateActions';
import { toast } from 'react-toastify';

class ModalAgregarSponsor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data:[],
            loading:true
        };

        this.toggle = this.toggle.bind(this);
    }
    componentDidMount(){
        privateActions.listSponsors(0,1000000).then(res=>{
            console.warn(res)
        
this.setState({data:res,loading:false})
        })
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    send(e) {
        e.preventDefault()
 
     privateActions.AsignarSponsors(this.props.data.id,e.target.select.value).then((res)=>{
         console.log(res)
        toast.success("Se agregó premium a "+this.props.data.nombre)
        this.toggle()
        this.props.premiumAdded()
     })


    }

    render() {
        if(this.state.loading)return null
        return (
            <span className="d-inline-block ">
                <Button color="success" onClick={this.toggle}>Hacer Premium</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Hacer Premium: {this.props.data.nombre}</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <Row className="d-flex justify-content-center">
                        <Col md="10 ">
                            <Card className="main-card mb-3">
                            
                                <CardBody>
                               
                                <Form id="myform"onSubmit={(e)=>this.send(e)}>
                                       
                                        <FormGroup>
                                            <Label for="select">Sponsor Patrocinador</Label>
                                            <Input type="select" name="select" id="select">
                                    {this.state.data.map(e=>{
                                       
                                        return(
                                            <option value={e.id}>{e.nombre}</option>
                                        )
                                    })}
                                             
                                            </Input>
                                        </FormGroup>
                    
</Form>

                                </CardBody>
                            </Card>
                        </Col>
                        </Row>
                        <ModalFooter>
                       
                        <Button color="primary" onClick={this.toggle}>Volver</Button>{' '}
                        <Button color="success"type="submit"form="myform" > Hacer Premium</Button>{' '}
                    </ModalFooter>
                </Modal>
            </span>
        );
    }
}

export default ModalAgregarSponsor;
