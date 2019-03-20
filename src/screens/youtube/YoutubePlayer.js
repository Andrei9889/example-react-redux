import React from 'react';
import {Link} from 'react-router-dom';

class YoutubePlayer extends React.Component{

  state = {
    id: '',
  }

  componentDidMount(){
    const {videoId} = this.props.match.params;
    this.setState({id: videoId});
  }

  render(){
    const {id} = this.state;

    return (
      <div className="my-3 container">
        <Link to={`/youtube`} className="btn btn-danger mb-3">Назад к списку видео</Link>
        <div>
          <iframe 
            width="560"
            height="315" 
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen
            title={id}
            >
          </iframe>
        </div>
      </div>
    );
  }
}

export default YoutubePlayer;