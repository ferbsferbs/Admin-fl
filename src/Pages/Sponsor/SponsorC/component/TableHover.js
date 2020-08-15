import React from "react";
import { Table, Button } from "reactstrap";

export default class TablaSponsors extends React.Component {
  render() {
    console.warn(this.props.data, "DATA");
    if (!this.props.data) return null;

    return (
      <Table hover className="mb-0">
        <thead>
          <tr>
            <th className="text-center">id</th>
            <th className="text-center">Nombre</th>
            <th className="text-center">Descripcion</th>
            <th className="text-center">Ver Docentes</th>
            <th className="text-center">Ver Detalles</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((e, index) => {
            return (
              <tr key={e.id}>
                <td className="text-center">{e.id}</td>
                <td className="text-center">{e.nombre}</td>

                <td className="text-center">{e.descripcion}</td>

                <td className="text-center">
                  <Button className="mb-2  " color="warning">
                    Ver Docentes
                  </Button>
                </td>

                <td className="text-center">
                  <Button className="mb-2  " color="primary">
                    Ver Detalles
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
                    <span className="sr-only"> Pagina Anterior</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link">{this.props.page}</a>
                </li>
                <li
                  className="page-item"
                  onClick={() => this.props.paginate(1)}
                >
                  <a className="page-link" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Proxima Pagina</span>
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
