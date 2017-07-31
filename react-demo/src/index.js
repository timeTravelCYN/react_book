import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
class Title extends Component {
  handleClickOnTitle (e) {
    console.log(this)
    console.log(e.target.innerHTML)
  }
  
  render () {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this)}>React 小书</h1>
    )
  }
}

class Header extends Component {
  render () {
    const word = 'is Good'
    const flag = true
    return (
      <div>
        <h1>React 小书 {word}</h1>
        {flag ? <strong>哈哈哈</strong> : null}
        <Title />
        <h2>This is Header</h2>
      </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
      <div>
        <h2>this is content</h2>
      </div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
      <div>
        <h2>this is footer</h2>
      </div>
    )
  }
}

class LikeButton extends Component {
  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    // this.setState({
    //   isLiked: !this.state.isLiked
    // })
    this.setState((prevState) => {
      return { isLiked: !prevState.isLiked}
    })
  }

  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? '取消' : '点赞'}  👍
      </button>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <LikeButton />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))