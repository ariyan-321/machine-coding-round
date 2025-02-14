import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;
  const totalPages = products.length;
  const noOfPages = Math.ceil(totalPages / pageSize);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const start = currentPage * pageSize;
  const end = start + pageSize;

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div>
        <button disabled={currentPage === 0} onClick={handlePrev}>
          Prev
        </button>
        {[...Array(pageSize).keys()].map((i) => (
          <button onClick={() => setCurrentPage(i)} className="button" key={i}>
            {i}
          </button>
        ))}
        <button disabled={currentPage === pageSize - 1} onClick={handleNext}>
          Next
        </button>
      </div>
      {products.slice(start, end).map((product) => (
        <div className="card" key={product.id}>
          <img src={product.thumbnail} alt="" />
          <h1>{product.title}</h1>
        </div>
      ))}
    </>
  );
}

export default App;
