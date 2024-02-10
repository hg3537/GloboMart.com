import axios from "axios";
import { useState, createContext, useEffect } from "react";
import Home from "./Component/Home";
import Tabs from "./Component/Tabs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import OverLay from "./Component/OverLay";
import SavedProdects from "./Component/SavedProdects";
import CartBox from "./Component/CartBox";
export const ProdectContext = createContext([]);
function App ()
{
  const [ prodects, setProdects ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ spiner, setSpiner ] = useState(false);
  const [ text, setText ] = useState('');
  const [ selectedProdect, setSelectedProdect ] = useState([]);
  const [ buyProdect, setBuyProdect ] = useState(JSON.parse(localStorage.getItem('BuyProduct')) ||[]);
  const [ savedProdect, setSavedProdect ] = useState(JSON.parse(localStorage.getItem('savedProdect'))||[]);
  const [ showOverLay, setShowOverLay ] = useState(false);
  const [ cart, setCart ] = useState(false);
  const categoriesUrl = 'https://dummyjson.com/products/categories';
  let fetchproducts = async (url) =>
  {
    setSpiner(true);
    try
    {
      let products = await axios(url);
      products ? setProdects(products.data.products) : setProdects([]);
    } catch (error)
    {
      console.log(`it erro ${error}`);
    }
    setSpiner(false);
  };
  function NotFound ()
  {
    if (prodects.length <= 0)
    {
      return (
        <>
          <h1 className="m-3 text-center"> It is Not Found</h1>
        </>
      );
    }
  }
  useEffect(() =>
  {

    fetchproducts(`https://dummyjson.com/products/search?q=${text}`);
  }, [ text ]);
  useEffect(() =>
  {
    fetch(categoriesUrl).then(res => res.json()).then(res => setCategories(res));
  }, []);

  let singleCategory = (category) =>
  {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(res => setProdects(res.products));

  };

  function handlerOnChange (e)
  {
    setText(e.target.value);
  }
  function handlerSubmint (e)
  {
    e.preventDefault();
  }
  function handlerOverLay (Prodect)
  {
    setSelectedProdect([ Prodect ]);
    setShowOverLay(true);

  }
  
  function closeOverLay ()
  {
    setShowOverLay(false);
  }
 
  function savedProdectFun (prodectID)
  {
    const OneProdect = prodects.find(pro => pro.id === prodectID);
    const alreadySaved = savedProdect.find(pro => pro.id === prodectID);
    if (alreadySaved)
    {
      return null;
    }
   let LastSave = [ ...savedProdect, OneProdect ]
    setSavedProdect(LastSave);
  }
  
  function UnsavedProdectFun (prodectID)
  {
    let UpDate = savedProdect.filter(saved => saved.id !== prodectID);
    setSavedProdect(UpDate);
  }

  function handlerCartBtn (prodectID)
  {
    const OneProdect = selectedProdect.find(pro => pro.id === prodectID);
    const alreadyBuy = buyProdect.find(pro => pro.id === prodectID);
    if (alreadyBuy)
    {
      return null;
    }
    setCart(true);
    setBuyProdect(prev => ([ ...prev, OneProdect ]
    ));

  }

  cart && document.querySelector('.fa-cart-shopping').classList.add(`active`);
  function deleteProdect (prodectID)
  {
    let FilterBuy = buyProdect.filter(product => product.id !== prodectID);
    setBuyProdect(FilterBuy);
    document.querySelector('.cart-container').classList.add('opacity-0')
    document.querySelector('.cart-container').classList.toggle('increase-index')
    document.querySelector('.fa-cart-shopping').classList.remove(`active`)
    setCart(false)
  }
function handlerDark ()
{

  document.querySelector('.App').classList.toggle('bg-dark');
  document.querySelector('.fa-moon').classList.toggle('fa-solid');
  document.querySelector('.landing')&& document.querySelector('.landing').classList.toggle('dark-landing');
  document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-card'))
}
  
  useEffect(() =>
  {
    localStorage.setItem('savedProdect', JSON.stringify(savedProdect));
    localStorage.setItem('BuyProduct', JSON.stringify(buyProdect));
  })
 
  
  return (
    <ProdectContext.Provider value={
      [ prodects, spiner, categories, handlerOnChange, handlerSubmint, handlerOverLay, closeOverLay, selectedProdect, savedProdectFun, savedProdect, UnsavedProdectFun, deleteProdect, handlerCartBtn, buyProdect, handlerDark ]
    }>
      <BrowserRouter>
        < div className="App" >
          <Navbar />
          { showOverLay && <OverLay /> }
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="categories" element={ <Tabs singleCategory={ singleCategory } /> }></Route>
            <Route path="savedProdects" element={ <SavedProdects /> }></Route>
          </Routes>
          <CartBox deleteProdect={ deleteProdect } />
          <NotFound />
        </div >
      </BrowserRouter>
    </ProdectContext.Provider>
  );
}
export default App;
