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

    return (
      <ol>
        {this.props.data.map((val, i) => {
            if( val.name.search(this.props.searchVal) === 0){
              return <li key={val.id}>{val.name}</li>
            }else if(this.props.searchVal === ''){
              return <li key={val.id}>{val.name}</li>
            }
        })}
      </ol>
    );
  }
}


export default List;
