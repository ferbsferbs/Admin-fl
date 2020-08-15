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
            <th className="text-center">Nombre</th>
            <th className="text-center">Colegio</th>
            <th className="text-center">Localidad</th>
            <th className="text-center">Detalle</th>
            
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((e, index) => {
            return (
              <tr>
                <td className="text-center">{index }</td>
                <td className="text-center">{e.name}</td>
                <td className="text-center">{e.colegio}</td>
                <td className="text-center">{e.localidad}</td>

                <td className="text-center">
                  <Button className="mb-2 mr-2 " color="primary">
                    Ver detalle
                   
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
