import React from 'react';
import { connect } from 'react-redux';

import {fetchPromos,writeSearchValue} from '../../redux/actions';
import PromoImg from '../../components/Youtube/PromoImg'

class Youtube extends React.Component {

  state = {
    searchValue: "",
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState( { [name]: value } ); 
  }

  handleClickGetPromos = () => {
    const {searchValue} = this.state;
    this.props.fetchPromos(searchValue);
    this.props.writeSearchValue(searchValue);

  }

  render() {
    const {searchValue} = this.state;
    const {isFetched,items} = this.props
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 my-3">
            <input 
              placeholder="Введи что-нибудь" 
              type="text" 
              className="mr-2 form-control" 
              name="searchValue"
              onChange={this.handleInput}   
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-info my-3" onClick={this.handleClickGetPromos}>Поиск</button>
          </div>
        </div>
        {isFetched && 
          <div className="my-3">
            <div className="row mb-3">
              {items.map(item => <div key={item.id.videoId} className='mr-2'><PromoImg searchValue={searchValue}{...item}/></div>)}
            </div>
          </div>
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetched: state.youtube.isFetched,
    items: state.youtube.items,
  }
}

export default connect(mapStateToProps, {fetchPromos,writeSearchValue})(Youtube);