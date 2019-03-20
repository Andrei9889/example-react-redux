import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../../components/Chat/Message/Message';
import { getMessages, postMessage } from '../../redux/actions';
import './Online.css';

class Chat extends Component {
  state = {
    text: ''
  }

  messageBlockRef = React.createRef();
  formRef         = React.createRef();
  
  componentDidMount() {
    const { isFetched } = this.props;
    
    if (!isFetched) {
      this.fetchMessages();
    }
  }

  componentDidUpdate() {
    const messageBlock = this.messageBlockRef.current;
    messageBlock.scrollTop = messageBlock.scrollHeight;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { text } = this.state;
    const nickname = localStorage.getItem('nickname');
    
    const message = {
      nickname: nickname,
      message: text,
    }

    this.props.postMessage(message);
    this.formRef.current.reset();
  }

  fetchMessages = () => {
    this.props.getMessages();
  }
  
  render() {
    const {messages} = this.props;

    return (
      <div className="container py-5">
        <div>
          <h3 className="mb-3">
            Сообщения 
            <button className="btn btn-sm btn-outline-secondary ml-3" onClick={this.fetchMessages}>
              Получить обновления
            </button>
          </h3>
          <div className="messages-block mb-3" ref={this.messageBlockRef}>
            {messages.map(message => <Message key={message._id} {...message} /> )}
          </div>
          <form className="mb-3" onSubmit={this.handleSubmit} ref={this.formRef}>
            <div className="form-row">
              <div className="col-md-7">
                <textarea
                  type="text"
                  name="text"
                  className="form-control mr-2"
                  placeholder="Введите ваше сообщение"
                  style={{height: '120px'}}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-success btn-block">
                  Отправить
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.chat.messages,
    isFetched: state.chat.isFetched,
  }
}

export default connect(mapStateToProps, { getMessages, postMessage })(Chat);






