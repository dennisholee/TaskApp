import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions/index';

class Form extends Component {

  constructor() {
    super();

    this.state = {
         formControls: {
             description: { value: '' }
         },
         dataSource: {}
     }
  }

  _onSubmit = event => {
    this.changeHandler(event);
    event.preventDefault();
  }

  _changeDescription = event => {
    console.log(event.target.value)
    this.props.dispatch({
      type: 'description_change',
      description: event.target.value,
    })
  }

  _changeHandler = event => {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({
          formControls: {
            [name]: value
          }
      });
  }

  render() {return (
      <div>
        <form onSubmit = { this._onSubmit }>
          <label htmlFor="description">Description</label>

          <input name="description" value={ this.props.description } onChange={ this._changeDescription }/>
          <input type="submit" value="Enter" />
          <input type="submit" value="Cancel" />
        </form>
      </div>
    );
  }
}

export default connect() (Form);
