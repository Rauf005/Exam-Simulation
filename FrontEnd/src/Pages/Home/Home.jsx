import React from 'react'
import style from "./style.module.css"
import {NavLink} from "react-router-dom"
import {Helmet} from "react-helmet"
import { FaHeart } from "react-icons/fa";
import { useEffect,useState } from 'react';
import axios from "axios"
import { useContext } from 'react';
import { favoriteContext } from '../../Context/ContextFavorites';

function Home() {

let { favorite, setFavorite } = useContext(favoriteContext);
let [searchQuery, setSearchQuery] = useState('')
const [products,setProducts]=useState([])
const [sortOption, setSortOption] = useState('');


function getData(){
  axios.get("http://localhost:3000/arrivals/")
  .then((res)=>{
    setProducts(res.data)
  })
  }
  useEffect(()=>{
    getData()
  },[])
  
function handleSearch(event) {
  setSearchQuery(event.target.value)
}
function handleSort(event) {
  setSortOption(event.target.value);
}

const filteredProducts = products
  .filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .sort((a, b) => {
    if (sortOption === 'low-high') return a.price - b.price;
if (sortOption === 'high-low') return b.price - a.price;

    return 0; 
  });



function handleAddFavorite(product) {
  let findFavorite = favorite.find(item => item._id == product._id);

  if (findFavorite) {
    alert('Bu mehsul wishlistde movcuddur');
  } else {
    setFavorite([...favorite, product]);
    
  }
}

  return (
    <div className={style.home}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <div className={style.hero}>
        <div className={style.heroimg}>
          <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" />

</div>
<div className={style.herotext}>
  <h2>Flat 75%Off</h2>
  <h1>IT’S HAPPENING <br />
  THIS SEASON!</h1>
<button>PURCHASE NOW</button>
        </div>
        </div>
      </section>
      <section>
        <div className={style.categori}>
          <h1>Shop for Different Categories</h1>
          <p>Who are in extremely love with eco friendly system.</p>

          <div className={style.aa}>
            <div className={style.fimg}>
            <img  src="https://preview.colorlib.com/theme/shop/img/c4.jpg" alt="" />

            </div>

          <div className={style.ab}>
            <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="" />
          <div className={style.ac}>
            <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg" alt="" />
            <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg" alt="" />
            </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={style.man}>
          <h1>
          New realeased Products for Men</h1>
          <p>Who are in extremely love with eco friendly system.</p>

          <div className={style.mancards}>
          <div className={style.mancard}>
            <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg" alt="" />
            <div className={style.mantext}>
            <h5>Long Sleeve shirt</h5>
            <span>$150.00</span>
            </div>
            
            </div>
            <div className={style.mancard}>
            <img src="https://preview.colorlib.com/theme/shop/img/l2.jpg" alt="" />
            <div className={style.mantext}>
            <h5>Long Sleeve shirt</h5>
            <span>$150.00</span>
            </div>
            
            </div>
            <div className={style.mancard}>
            <img src="https://preview.colorlib.com/theme/shop/img/l3.jpg" alt="" />
            <div className={style.mantext}>
            <h5>Long Sleeve shirt</h5>
            <span>$150.00</span>
            </div>
            
            </div>
            <div className={style.mancard}>
            <img src="https://preview.colorlib.com/theme/shop/img/l4.jpg" alt="" />
            <div className={style.mantext}>
            <h5>Long Sleeve shirt</h5>
            <span>$150.00</span>
            </div>
            
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className={style.woman}>
          <h1>
          New realeased Products for Women</h1>
          <p>Who are in extremely love with eco friendly system.</p>
          <div className={style.ss}>
            <form action="">
              <input type="text" placeholder='Search' onChange={handleSearch}/>
            </form>
            <select name="d" id="d" onChange={handleSort}>
              <option disabled value="">Sort</option>
              <option value="low-high" >A-Z</option>
              <option value="high-low">Z-A</option>
            </select>
          </div>

          <div className={style.cards}>
          {filteredProducts.map(product=>(
                 <div className={style.card} key={product._id}>
                 <img src={product.image} alt="" />
                 <div className={style.text}>
                 <h5>{product.name}</h5>
                 <span>${product.price}</span>
                 <b  className={style.heart} onClick={() => handleAddFavorite(product)}><FaHeart/></b>
                 </div>
                 </div>
          )
       
        )}
            
            
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home