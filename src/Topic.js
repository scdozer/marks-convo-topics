import React, {Component} from 'react';

class Topic extends Component{
  render(){
    const styles = this.styles();
    return(
      <div style = {styles.component}>
        <h2>{this.props.topicName}</h2>
        <div>{this.props.percentage}</div>
        <img src={this.props.topicImage} style={styles.image}/>
      </div>
    )
  }

  styles = () => {
    return {
      image: {
        width: '50%'
      },
      component:{
        padding: '20px',
        border: '2px solid blue',
        margin: '10px'
      }
    }
  }
}

export default Topic;
