import React, { Component } from 'react';

class PhoneForm extends Component {

  input = React.createRef(); // null

  state = {
    name: '',
    phone: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: ''
    });
    this.input.current.focus();
    //this.input.focus();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name='name'
          placeholder="이름" 
          onChange={this.handleChange} 
          value={this.state.name}
          ref={this.input} //ref => this.input = ref
        />
        <input 
          name='phone'
          placeholder="전화번호" 
          onChange={this.handleChange} 
          value={this.state.phone}
        />
        <button type='submit'>등록</button>
      </form>
    );
  }
}

export default PhoneForm;