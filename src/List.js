import React, {Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <ol>
        {this.props.data.map((val, i) => (
          <li key={val.id}>{val.name}</li>
        ))}
      </ol>
    );
  }
}


export default List;
