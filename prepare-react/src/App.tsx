import React, { Suspense, useState, lazy } from 'react';
import './App.css';
import Catergoy from './components/Category';
import Loading from './components/Loading';
// import Product from './components/Product';

const Product = lazy(() => import('./components/Product'));


function App() {
  const [selectedCategory, setCategorySelection] = useState("");
  return (
    <div className="wrapper">
      <div className="category box">
        <Catergoy
          selectedCategory={selectedCategory}
          setCategorySelection={setCategorySelection} />
      </div>
      <div className="list-product box">
        <Suspense fallback={<Loading />}>
          <Product
            selectedCategory={selectedCategory}
          />
        </Suspense>
      </div>
    </div>
  );
}
export default App;
