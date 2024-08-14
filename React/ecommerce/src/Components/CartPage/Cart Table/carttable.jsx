import React from 'react';
import pro2 from '../../../Assests/pro2.png';
import images from "../../../Assests/pro4.png";
import pro7 from '../../../Assests/pro7.png';
import "./carttable.css";

export default function CartTable() {
  return (
    <div>
      <section id="cart">
        <h2>Your Shopping Cart</h2>
        <div className="cart table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Display</th>
                <th scope="col">Price</th>
                <th scope="col">Color</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Iphone</td>
                <td><img src={pro2} alt="Iphone" height="50px" /></td>
                <td>Rs.250,000</td>
                <td>Red</td>
                <td>1</td>
                <td>Rs.250,000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Men Coat</td>
                <td><img src={images} alt="Coats" height="50px" /></td>
                <td>Rs.5000</td>
                <td>Black</td>
                <td>2</td>
                <td>Rs.10,000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bag</td>
                <td><img src={pro7} alt="Bag" height="50px" /></td>
                <td>Rs.1,999</td>
                <td>White</td>
                <td>1</td>
                <td>Rs.1,999</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button className="btn btn-primary" type="button" style={{ margin: '5px' }}>Continue Shopping</button>
          <button className="btn" style={{ backgroundColor: 'orange' }}>Add to Cart</button>
        </div>
      </section>
    </div>
  );
}
