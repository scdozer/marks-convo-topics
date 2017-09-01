import React, { Component } from 'react';
import './App.css';
import Topic from './Topic.js';

class App extends Component {

  constructor(){
    super();
    // state is an object, Topic is its Key, which also is an array of object.
    this.state = {
      topics: [
        {
          topicName: 'Belize Eco Resort',
          percentage: 15,
          topicImage: 'http://www.hawaiimagazine.com/sites/default/files/styles/slideshow__1503x847_/public/field/image/Maui%207Michael%20Hamoa%20Beach%20near%2C%20Hana%2C%20East%20side%20of%20Maui%2C%20Hawaii%20ThinkstockPhotos-512828426.jpg?itok=41d9suCh'
        },
        {
          topicName: 'Hawaii',
          percentage: 30,
          topicImage: 'http://www.hawaiimagazine.com/sites/default/files/styles/slideshow__1503x847_/public/field/image/Maui%207Michael%20Hamoa%20Beach%20near%2C%20Hana%2C%20East%20side%20of%20Maui%2C%20Hawaii%20ThinkstockPhotos-512828426.jpg?itok=41d9suCh'
        },
        {
          topicName: 'Investment Properties',
          percentage: 30,
          topicImage: 'http://www.hawaiimagazine.com/sites/default/files/styles/slideshow__1503x847_/public/field/image/Maui%207Michael%20Hamoa%20Beach%20near%2C%20Hana%2C%20East%20side%20of%20Maui%2C%20Hawaii%20ThinkstockPhotos-512828426.jpg?itok=41d9suCh'
        },
      ],
      topicNameToAdd : '',
      topicPercentageToAdd: '',
      topicImageToAdd: ''
    }
  }

  submitTopic = () => {
    var stateClone = Object.assign({}, this.state);

    stateClone.topics.push({
      topicName: this.state.topicNameToAdd,
      percentage: this.state.topicPercentageToAdd,
      topicImage: this.state.topicImageToAdd
    })
    this.setState({
      topics : stateClone.topics,
      topicNameToAdd : '',
      topicPercentageToAdd: '',
      topicImageToAdd: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Marks Most Common Convo Topics</h1>
        <input placeholder='topic name' value = {this.state.topicNameToAdd} onChange={(e) => this.setState({topicNameToAdd: e.target.value})}/>
        <input placeholder='percentage' value = {this.state.topicPercentageToAdd}  onChange={(e) => this.setState({topicPercentageToAdd: e.target.value})}/>
        <input placeholder='image' value = {this.state.topicImageToAdd}  onChange={(e) => this.setState({topicImageToAdd: e.target.value})}/>
        <button onClick={this.submitTopic}>Click to Add</button>
         {this.state.topics.map((item, index) => {
          return (
            <Topic
              topicName={item.topicName}
              percentage={item.percentage}
              topicImage={item.topicImage}
              />
          )
        })}
      </div>
    );
  }
}

export default App;
