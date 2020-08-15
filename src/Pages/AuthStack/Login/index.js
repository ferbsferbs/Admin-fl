import React, { Component } from 'react'
import publicActions from '../../../API/publicCalls/publicActions'
import { connect } from 'react-redux'
import { logged_success } from '../../../reducers/auth'

class Login extends Component{
   loggear(e){
    e.preventDefault()
 
    publicActions.login( e.target.mail.value, e.target.pass.value).then(res=>{
      if(res==null)return 
      this.props.loginSuccess()
      localStorage.setItem('token',res)
      
      this.props.history.push('/menu/home')
      }) 
  }
  render(){
    return (
       <div className="container  h-100 " >
  <div className="d-flex justify-content-center  h-100" style={{marginTop:'10%'}}>
    <div className="user_card">
      <div className="d-flex justify-content-center">
        <div className="brand_logo_container">
          <img src="data:image/png;base64,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" className="brand_logo" alt="Logo" />
        </div>
      </div>
      <div className="d-flex justify-content-center form_container">
        <form onSubmit={(e)=>this.loggear(e)}>
          <div className="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text"> <i className="pe-7s-mail" /></span>
            </div>
            <input type="text" name className="form-control input_user" id="mail" placeholder="Correo eletronico" />
          </div>
          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text"> <i className="pe-7s-key " /></span>
            </div>
            <input type="password" name className="form-control input_pass" id="pass" placeholder="Contraseña" />
          </div>
          
          <div className="d-flex justify-content-center mt-3 login_container">
            <button type="submit" name="button" className="btn login_btn">Login</button>
          </div>
        </form>
      </div>
      <div className="mt-4">
      
        <div className="d-flex justify-content-center links">
          <a href="#">Me olvidé la clave?</a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

 
  loginSuccess: () => dispatch(logged_success()),


});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
