import IconCard from '../components/images/icon-cart.svg'
import PerfumeImg from '../components/images/image-product-desktop.jpg'
import './App.css'

const App = () => {
  return(
    <>
    <section className="card">
    
    <img src={PerfumeImg} alt="" className='PerfumeImg'/>
    <div className='content-info'>
      <span className='category'>PERFUME</span>
      <h1 className='title'>Gabrielle Essence Eau De Parfum</h1>
      <p className='paragraph'>A floral, solar and voluptuous interpratation composed by Olivier Polge, Perfurmer-Creator for the Gouse of CHANEL.</p>
      <div className='content-price'>
        <p className='price'>$149.99</p>
        <span className='PriceRisk'>$169.99</span>
      </div>
      <button id='ButtonCart'><img src={IconCard} alt="" id='IconCart'/>Add to Cart</button>
    </div>
    </section>
    </>
  )
}


export default App;