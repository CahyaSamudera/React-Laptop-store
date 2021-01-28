import Card1 from '../../Images/card1.png';
import Card2 from '../../Images/card2.png';

const Product = () => {
  return (
    <>
      <section className='home-cards' id='product'>
        <div>
          <img src={Card1} alt='card1' />
          <h3>New Surface Pro 7</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quae
            explicabo architecto dolor laudantium neque!
          </p>
          <a href='#hero'>
            Detail <i className='fas fa-chevron-right'></i>
          </a>
        </div>
        <div>
          <img src={Card2} alt='card2' />
          <h3>New Surface Laptop</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            doloribus tenetur ut consequatur incidunt ipsum.
          </p>
          <a href='#hero'>
            Detail <i className='fas fa-chevron-right'></i>
          </a>
        </div>
        <div>
          <img src={Card1} alt='card3' />
          <h3>New Generation of Pro 9</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id
            fugiat neque quos blanditiis ad?
          </p>
          <a href='#hero'>
            Detail <i className='fas fa-chevron-right'></i>
          </a>
        </div>
        <div>
          <img src={Card2} alt='card4' />
          <h3>The new Microsoft Edge</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            totam nostrum voluptate earum perspiciatis laboriosam.
          </p>
          <a href='#hero'>
            Detail <i className='fas fa-chevron-right'></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Product;
