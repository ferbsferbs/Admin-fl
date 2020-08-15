import React from "react";
import { Table, Button } from "reactstrap";


export default class TablaColegios extends React.Component {


  render() {
    console.warn(this.props.data)
    if (!this.props.data) return null;

    return (
      <Table hover className="mb-0">
        <thead>
          <tr>
            <th className="text-center">id</th>
            <th className="text-center">Nombre Institución</th>
            <th className="text-center">Localidad</th>
            <th className="text-center">Docentes</th>
            <th className="text-center">Alumnos</th>
            <th className="text-center">Aulas</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((e, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td className="text-center">{e.name}</td>
                <td className="text-center">{e.localidad}</td>
                <td className="text-center">
                  <Button className="mb-2 mr-2 " color="info">
                    Ver Docentes
                    <span className="badge badge-pill badge-light">
                      {e.docentes}
                    </span>
                  </Button>
                </td>
                <td className="text-center">
                  <Button className="mb-2 mr-2 " color="warning">
                    Ver Alumnos
                    <span className="badge badge-pill badge-light">
                      {e.alumnos}
                    </span>
                  </Button>
                </td>
                <td className="text-center">
                  <Button className="mb-2 mr-2 " color="primary">
                    Ver Aulas
                    <span className="badge badge-pill badge-light">
                      {e.aulas}
                    </span>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
