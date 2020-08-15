import { BrowserRouter as Router, Route, Redirect, withRouter } from "react-router-dom";
import React, { Suspense, lazy, Fragment, Component } from "react";
import {ProtectedRoute} from './protectedRoute/ProtectedRoute'
import { ToastContainer } from "react-toastify";
import Demografico from "../../Pages/Demografico";
import ObjetivosDelJuego from "../../Pages/ObjetivosDelJuego";
import SatisfaccionComponent from "../../Pages/Satisfaccion";
import Auth from "../../Pages/AuthStack";
import Sponsors from "../../Pages/Sponsor";
import { useEffect } from "react";
import publicActions from "../../API/publicCalls/publicActions";
import { useState } from "react";
import { logged_success } from "../../reducers/auth";
import { connect } from "react-redux";
import { render } from "react-dom";

const Dashboards = lazy(() => import("../../Pages/Dashboards"));

const Widgets = lazy(() => import("../../Pages/Widgets"));
const Elements = lazy(() => import("../../Pages/Elements"));
const Components = lazy(() => import("../../Pages/Components"));
const Charts = lazy(() => import("../../Pages/Charts"));
const Forms = lazy(() => import("../../Pages/Forms"));
const Tables = lazy(() => import("../../Pages/Tables"));

class AppMain extends Component{
 
componentDidMount(){
  console.warn(this.props.authed)
  publicActions.verify().then(()=>{
    
    this.props.loginSuccess()
    this.props.history.push('/menu/home')
  })

}

render(){
  return (
    <Fragment>
      {/* Components */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">
                Estamos Dibujando los mejores graficos para ustedes!
              </h6>
            </div>
          </div>
        }
      >
        <Route  path="/auth" component={Auth} />
        <ProtectedRoute  authed={this.props.authed} path="/components" component={Components} />
    
        <ProtectedRoute  authed={this.props.authed} path="/forms" component={Forms} />
   
        <ProtectedRoute  authed={this.props.authed} path="/charts" component={Charts} />
  
        <ProtectedRoute  authed={this.props.authed} path="/tables" component={Tables} />
  
        <ProtectedRoute  authed={this.props.authed} path="/elements" component={Elements} />
   
        <ProtectedRoute  authed={this.props.authed} path="/widgets" component={Widgets} />
  
        <ProtectedRoute  authed={this.props.authed} path="/menu" component={Dashboards} />

        <ProtectedRoute  authed={this.props.authed} path="/demografico" component={Demografico} />

        <ProtectedRoute  authed={this.props.authed} path="/satisfaccion" component={SatisfaccionComponent}/>

        <ProtectedRoute  authed={this.props.authed} path="/objetivo-juego" component={ObjetivosDelJuego} />

        <ProtectedRoute  authed={this.props.authed} path="/sponsor" component={Sponsors} />
  
      </Suspense>

     
      <ToastContainer />
    </Fragment>
  )}
};


const mapStateToProps = state => ({
authed: state.auth.logged
});

const mapDispatchToProps = dispatch => ({

  loginSuccess: () => dispatch(logged_success())


});

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(AppMain))

