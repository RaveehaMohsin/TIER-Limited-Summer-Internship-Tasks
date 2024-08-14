import React, { useEffect, useState } from 'react';
import './products.css';
import smartWatchImg from '../../../Assests/R-010-Ultrs2.webp';
import iphoneImg from '../../../Assests/pro2.png';
import macLaptopImg from '../../../Assests/pro3.png';
import dressImg from '../../../Assests/pro4.png';
import waterBottleImg from '../../../Assests/Pro5.jpg';
import electricFanImg from '../../../Assests/pro6.png';
import pantImg from '../../../Assests/pant.png';
import bagImg from '../../../Assests/pro7.png';
import starsImg from '../../../Assests/download__1_-removebg-preview.png';



export default function Products() {
        const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));
    }, []);
  return (
    <div>
      <section id="products">
        <h2>Our Recent Products</h2>
        <div className="containerproducts">
          <div className="singleproduct">
            <img src={smartWatchImg} alt="Smart Watch" />
            <h5>Smart Watch</h5>
            <img src={starsImg} alt="stars" />
            <h6 style={{ color: 'orange' }}>4,999 Rs</h6>
            <p>
              Our Smart Watch combines style, functionality, and cutting-edge technology to enhance your daily life. With its sleek design and advanced features, it's more than just a timepiece.
            </p>
            <button className="btn">Buy Now</button>
          </div>

          <div className="singleproduct">
            <img src={iphoneImg} alt="Apple iPhone" />
            <h5>Apple iPhone</h5>
            <img src={starsImg} alt="stars" />
            <h6 style={{ color: 'orange' }}>350,999 Rs</h6>
            <p>
              The iPhone is a revolutionary smartphone that has redefined the way we communicate, work, and stay entertained. Packed with powerful features and a sleek design. Much in nowadays.
            </p>
            <button className="btn">Buy Now</button>
          </div>

          <div className="singleproduct">
            <img src={macLaptopImg} alt="Mac Laptop" />
            <h5>Mac Laptop</h5>
            <img src={starsImg} alt="stars" />
            <h6 style={{ color: 'orange' }}>130,000 Rs</h6>
            <p>
              Our laptops are designed to empower you with the ultimate computing experience, whether you're working, studying, or enjoying entertainment on the go. Combining sleek design. Very popular nowadays.
            </p>
            <button className="btn">Buy Now</button>
          </div>

          <div className="singleproduct">
            <img src={dressImg} alt="Dress" />
            <h5>Dress</h5>
            <img src={starsImg} alt="stars" />
            <h6 style={{ color: 'orange' }}>7,999 Rs</h6>
            <p>
              Our dress coat is the epitome of timeless elegance and sophisticated style. Crafted with meticulous attention to detail, it is designed to elevate your formal attire and make a lasting impression.
            </p>
            <button className="btn">Buy Now</button>
          </div>

          {products.map(product => (
                        <div className="singleproduct" key={product.id}>
                            <img src={product.image} alt={product.title} style={{ height: '90px' }} />
                            <h5>{product.title}</h5>
                            <img src={starsImg} alt="stars" />
                            <h6 style={{ color: 'orange' }}>{product.price} Rs</h6>
                            <p>{product.description}</p>
                            <button className="btn">Buy Now</button>
                </div>
            ))}

          <div className="singleproduct">
            <img src={waterBottleImg} alt="Water Bottle" />
            <h5>Water Bottle</h5>
            <img src={starsImg} alt="stars" />
            <h6 style={{ color: 'orange' }}>1,999 Rs</h6>
            <p>
              Stay hydrated on the go with our high-quality water bottle. Designed for convenience and sustainability, it is the perfect companion for your active lifestyle. Very much in use nowadays to beat the heat this summer.
            </p>
            <button className="btn">Buy Now</button>
          </div>

          <div className="singleproduct">
            <img src={electricFanImg} alt="Electric Fan" style={{ height: '90px' }} />
            <h5>Electric Fan</h5>
            <img src={starsImg} alt="stars" />
            <h6 style={{ color: 'orange' }}>2,999 Rs</h6>
            <p>
              Beat the heat and stay cool with our powerful and efficient electric fan. Designed to provide refreshing airflow, it is the perfect solution for hot summer days and stuffy environments.
            </p>
            <button className="btn">Buy Now</button>
          </div>

          <div className="singleproduct">
            <img src={pantImg} alt="Pant" />
            <h5>Pant</h5>
            <img src={starsImg} alt="stars" />
            <h6 style={{ color: 'orange' }}>2,999 Rs</h6>
            <p>
              Elevate your wardrobe with our stylish and comfortable pants. Designed with a perfect blend of fashion and functionality, our pants offer versatility for both casual and formal occasions. Light wear.
            </p>
            <button className="btn">Buy Now</button>
          </div>

          <div className="singleproduct">
            <img src={bagImg} alt="Bag" />
            <h5>Bag</h5>
            <img src={starsImg} alt="stars" />
            <h6 style={{ color: 'orange' }}>1,999 Rs</h6>
            <p>
              Discover the perfect blend of style, functionality, and durability with our versatile bags. Designed to suit your everyday needs, our bags are crafted with meticulous. Easy to carry and handle.
            </p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
