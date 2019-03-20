import React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';

import {fetchMemes, createMem} from '../redux/actions';

class Memes extends React.Component{

  state = {
    memesCount: '',
    firstWord: '',
    secondWord: '',
    memId:'',
  }

  handleClickGetMemes = () => {
    const {memesCount} = this.state;
    
    this.props.fetchMemes(memesCount);
  }
  handleClickGenerateMeme = () => {
    const {firstWord, secondWord, memId} = this.state;
    const mem = { template_id: memId, 
                  username: 'g_user_107257642549096835361', 
                  password: '1234', 
                  text0: firstWord, 
                  text1: secondWord 
                };
    
    const requestDate = qs.stringify(mem);
    this.props.createMem(requestDate);
  }

  handleChangeNumber = (e)=>{
    const {name, value} = e.target;
    this.setState({[name]:+value}); 
  }

  handleChange = (e)=>{
    const {name, value} = e.target;
    this.setState({[name]:value}); 
  }

  render() {

    const {memesCount,firstWord,secondWord } = this.state;
    const {memes, mainMeme, isFetched} = this.props
        
    return (
      <div className="container">
        <h2>Memes generator</h2>
        <div className="mb-3">
          <button className="btn btn-info mr-3" onClick={this.handleClickGetMemes}>Получить</button>
          <input 
              className="form-control w-25 d-inline-block align-middle"
              type="number" 
              name="memesCount" 
              placeholder='Количество мемов' 
              value={memesCount} 
              onChange={this.handleChangeNumber}>
          </input> Мемов
        </div>
        <div className="mb-3">
          {memes.map(meme => {
            return (
              <img 
                  key={meme.id} 
                  src={meme.url} 
                  alt={meme.name} 
                  height="180" 
                  onClick={()=>this.setState({memId:meme.id})}
              />
            )
          })}
        </div>
          {isFetched && 
            <div>
              <input 
                className="form-control w-25 d-inline-block align-middle mr-2"
                type="text" 
                name="firstWord" 
                placeholder='Первое слова' 
                value={firstWord} 
                onChange={this.handleChange}>
              </input> 
              <input 
                className="form-control w-25 d-inline-block align-middle mr-2"
                type="text" 
                name="secondWord" 
                placeholder='Второе слово' 
                value={secondWord} 
                onChange={this.handleChange}>
              </input> 
              <button className="btn btn-info mr-3 mb-3 mt-3" onClick={this.handleClickGenerateMeme}>Сгенерировать</button>
            </div>
          }
          {mainMeme && 
            <div>
              <img  src={mainMeme} alt="yourMeme" height="400" />
            </div>
          }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    memes: state.memes.items,
    mainMeme: state.memes.mainMeme,
    isFetched: state.memes.isFetched,
  }
}

export default connect(mapStateToProps, {fetchMemes, createMem})(Memes);

