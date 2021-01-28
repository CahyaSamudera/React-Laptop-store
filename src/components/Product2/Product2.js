import Card1 from '../../Images/card1.png';
import Card2 from '../../Images/card2.png';

const Product2 = () => {
  return (
    <>
      <section className='home-cards'>
        <div>
          <img src={Card1} alt='card1' />
          <h3>New Surface Pro 8</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nulla
            ex repellendus iusto, voluptatibus necessitatibus!
          </p>
          <a href='#hero'>
            Detail <i className='fas fa-chevron-right'></i>
          </a>
        </div>
        <div>
          <img src={Card2} alt='card2' />
          <h3>New Wave Laptop</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sequi
            necessitatibus pariatur reiciendis quidem blanditiis.
          </p>
          <a href='#hero'>
            Detail <i className='fas fa-chevron-right'></i>
          </a>
        </div>
        <div>
          <img src={Card1} alt='card3' />
          <h3>New Pro Dell 7</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            pariatur quos fugiat distinctio doloremque quo.
          </p>
          <a href='#hero'>
            Detail <i className='fas fa-chevron-right'></i>
          </a>
        </div>
        <div>
          <img src={Card2} alt='card4' />
          <h3>The new Super Lenovo</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, ad.
            Mollitia deserunt ducimus quam eos.
          </p>
          <a href='#hero'>
            Detail <i className='fas fa-chevron-right'></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Product2;
