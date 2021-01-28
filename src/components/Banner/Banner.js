import './Banner.css';

const Banner = () => {
  return (
    <>
      <section className='xbox' id='about'>
        <div className='content'>
          <h2>Produk Terbaru dan Tercanggih</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus voluptate optio dignissimos quasi eaque amet expedita
            sed eligendi exercitationem tempora?
          </p>
          <a href='#hero' className='btn'>
            Detail <i className='fas fa-chevron-right'></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Banner;
