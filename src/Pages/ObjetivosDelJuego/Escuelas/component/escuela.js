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
import TableHover from "../../../Tables/RegularTables/Examples/TableHover";
import TablaColegios from "./TableHover";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import json from "./JSON.json";
export default class Escuelas extends React.Component {

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
