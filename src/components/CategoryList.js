import React, {Component} from 'react';
import data from '../data'
import Emitter from "../helper/Emitter";


class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: data.category[0].id,
    }
  }

  handleClick = (id) => {
    this.setState({selected: id})
    Emitter.call('CHANGE_CATEGORY', id);
  }

  render() {
    const {selected} = this.state
    const {category} = data
    return (
      <div className="div-nav">
        <div className="grid_12">
          <ul className="nav">
            {category.map((cat) => (
              <li className={cat.id === selected ? 'selected' : ''}
                  onClick={() => this.handleClick(cat.id)}
                  key={cat.id}>
                {cat.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CategoryList;
