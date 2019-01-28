import React, {Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    searchVal: PropTypes.string
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const data = this.props.data.filter((val) => {
      return !this.props.searchVal || val.name.search(this.props.searchVal) === 0
    })
    return (
      <ol>
        {data.map((val, i) => (
          <li key={val.id}>{val.name}</li>
        ))}
      </ol>
    );
  }
}


export default List;
