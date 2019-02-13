import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import TopProduct from "../components/TopProduct";
import data from '../data'
import {Link} from "react-router-dom";

class Home extends Component {
  render() {
    const {topProducts} = data.home
    return (
      <Wrapper>
        <div className="content">
          <div className="ic">
            More Website Templates @ TemplateMonster.com - December 02, 2013!
          </div>
          {topProducts.map((item) => (
            <TopProduct key={item.id} item={item}/>
          ))}

          <div className="container_12">
            <div className="grid_12">
              <h3 className="home_title">New in Menu</h3>
            </div>
            <div className="grid_3">
              <div className="box maxheight">
                <img src="images/box_img2.jpg" alt=""/>
                <div className="title">Aliquamh ante</div>
                Benteger convallis orci veli elaoreet, at ornare loremo konsequat. Phasellus era nisl auctor vel
                veliterut.
                <br/>
                <Link to="#">More Info</Link>
              </div>
            </div>
            <div className="grid_3">
              <div className="box maxheight">
                <img src="images/box_img3.jpg" alt=""/>
                <div className="title">Ulum volutpat</div>
                Hrtolieger convallis omi tem aore, at ornare loren coate. Pasellus era nisl auctor vel veliterolsed
                pharetra.
                <br/>
                <Link to="#">More Info</Link>
              </div>
            </div>
            <div className="grid_3">
              <div className="box maxheight">
                <img src="images/box_img4.jpg" alt=""/>
                <div className="title">Vestibulum volu</div>
                Convallis orci vel mi oreet, at kotornare lorem consequat. Sellus era nisl auctor vel
                veliterolvenenatis nulla.
                <br/>
                <Link to="#">More Info</Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}


export default Home;
