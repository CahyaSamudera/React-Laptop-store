import './Hero.css';

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className='text-box'>
        <h1>Laptop Store</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque
          fugiat explicabo porro similique voluptas ipsum ut impedit quis
          voluptatibus.
        </p>
        <button type='button'>Lihat Produk</button>
      </div>
      <div className='sidebar'>
        <div className='icon-box'>
          <div className='side-text'>Beli</div>
          <div className='icon'>
            <i className='fa fa-laptop'></i>
          </div>
        </div>
        <div className='icon-box'>
          <div className='side-text'>Toko</div>
          <div className='icon'>
            <i className='fa fa-home'></i>
          </div>
        </div>
        <div className='icon-box'>
          <div className='side-text'>Pengiriman</div>
          <div className='icon'>
            <i className='fa fa-truck'></i>
          </div>
        </div>
        <div className='icon-box'>
          <div className='side-text'>Rewards</div>
          <div className='icon'>
            <i className='fas fa-gem'></i>
          </div>
        </div>
        <div className='icon-box'>
          <div className='side-text'>Pembayaran</div>
          <div className='icon'>
            <i className='fas fa-money-check'></i>
          </div>
        </div>
        <div className='icon-box'>
          <div className='side-text'>Pertanyaan</div>
          <div className='icon'>
            <i className='fab fa-quora'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
