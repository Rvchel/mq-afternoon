import React from 'react';
import './Reset.css';
import './App.css';

class App extends React.Component {
constructor() {
  super();
  this.state = {
    menuStatus: 'drop-down-menu',
    buttonStatus: 'drop-down-buttons'
  }
}

handleClick = () => {
  if(this.state.menuStatus === 'drop-down-menu-open') {
    this.setState({menuStatus: 'drop-down-menu-closed', buttonStatus:'drop-down-buttons-closed'})
  } else {
    this.setState({menuStatus: 'drop-down-menu-open', buttonStatus:'drop-down-buttons-open' })
  }
}


  render() {
  return (
  <nav>
    <ul>
        <div>
        <li id='title'>Start Bootstrap</li>
        </div>
        <li className='menu-text'>Home</li>
        <li className='menu-text'>About</li>
        <li className='menu-text'>Services</li>
        <li className='menu-text'>Contact</li>
        <li>
          <button 
          className='menu-button'
          onClick={this.handleClick} >
            Menu
          </button>
        </li>
        <div className={this.state.menuStatus}>
        <li className={this.state.buttonStatus}>Home</li>
        <li className={this.state.buttonStatus}>About</li>
        <li className={this.state.buttonStatus}>Services</li>
        <li className={this.state.buttonStatus}>Contact</li>
        </div>
    </ul>
    {/* <div id='word-container'>
    <h1 id='welcome'>
      Welcome To Our Studio!
    </h1>
    </div> */}
  </nav>
    )
  }
}

export default App;
