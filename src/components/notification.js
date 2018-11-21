import React, { Component } from 'react';
import { connect } from 'react-redux';


class Notification extends Component {

  render() {
    return (
      <div>
        Description { ' ' }
        {this.props.description}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { description: state.description };
}

export default connect(mapStateToProps, ) (Notification);
