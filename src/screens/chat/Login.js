import React from 'react';

class Login extends React.Component {

  state = {
    nickname: localStorage.getItem('nickname') || ''
  }

  handleChange = (e)=>{
    const {name, value} = e.target;
    this.setState({[name]:value}); 
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const { nickname } = this.state;
    localStorage.setItem('nickname', nickname);
    this.props.history.push('/chat/online');
  }

  render(){
    const { nickname } = this.state;

    return (
      <div className="container py-5">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="nickname"
            className="form-control mr-2"
            placeholder="Введите ваш логин"
            value={nickname}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-success">
          Войти
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
