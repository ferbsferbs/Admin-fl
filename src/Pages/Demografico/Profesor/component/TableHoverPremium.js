import React from "react";
import { Table, Button } from "reactstrap";
import privateActions from "../../../../API/privateCalls/privateActions";
import { toast } from "react-toastify";


export default class TablaColegios extends React.Component {

deleteSponsor(e){
  privateActions.QuitarPremium(e.id,e.sponsor.id).then(()=>{
    this.props.onDelete()
    toast.error("Se quitó premium de  " +e.nombre)
  })
}
  render() {
    console.warn(this.props.data)
    if (!this.props.data) return null;

    return (
      <Table hover className="mb-0">
        <thead>
          <tr>
            <th className="text-center">id</th>
            <th className="text-center">Nombre</th>
            <th className="text-center">Colegio</th>
            <th className="text-center">Localidad</th>
            <th className="text-center">Sponsor</th>
            <th className="text-center">Alumnos</th>
            <th className="text-center">Aulas</th>
            <th className="text-center">Detalle</th>
            <th className="text-center">Premium</th>
            

          </tr>
        </thead>
        <tbody>
          {this.props.data.map((e, index) => {
            return (
              <tr key={e.id}>
                <td className="text-center">{e.id}</td>
                <td className="text-center">{e.nombre}</td>
                <td className="text-center">{e.instituciones.length<1?"No tiene":(<Button className="mb-2  " color="primary">
                    Ver Instituciones
                    <span className="badge badge-pill badge-light">
                      {e.Instituciones.length}
                    </span>
                  </Button>)}</td>
                <td className="text-center">{e.localidad?e.localidad.nombre:"No Tiene"}</td>
               
                <td className="text-center">
                 {e.sponsor.nombre}
                </td>

                <td className="text-center">
                  <Button className="mb-2  " color="warning">
                    Ver Alumnos
                    <span className="badge badge-pill badge-light">
                      {e.alumnos}
                    </span>
                  </Button>
                </td>
                <td className="text-center">
                  <Button className="mb-2  " color="primary">
                    Ver Aulas
                    <span className="badge badge-pill badge-light">
                      {e.aulas}
                    </span>
                  </Button>
                </td>
                <td className="text-center">
                  <Button className="mb-2  " color="info">
                    Ver Detalle
                 
                  </Button>
                </td>
                <td className="text-center">
                  <Button className="mb-2  "onClick={()=>this.deleteSponsor(e)} color="danger">
                    Quitar Premium
                   
                  </Button>
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
                                onClick={() => this.props.paginate(0)}
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
                                  {this.props.page } 
                                </a>
                              </li>
                              <li
                                className="page-item"
                                onClick={() => this.props.paginate(1)}
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
      </Table>
    );
  }
}
