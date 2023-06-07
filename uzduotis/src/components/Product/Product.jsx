import React, { useEffect, useState } from "react";
import "./Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //produktu  istraukimas  ir issaugojimas
  useEffect(() => {
    setIsLoading(true);

    fetch("https://golden-whispering-show.glitch.me/")
      .then((response) => response.json())
      .then((products) => {
        setIsLoading(false);
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // produkto istrinimas
  const productDelate = (id) => {
    const updateProduct = products.filter((item) => item.id !== id);
    setProducts(updateProduct);
  };

  //puslapio perkrovimo
  // if (isLoading) {
  //   return
  // }

  return (
    <div>
      {isLoading && <div>Loading..</div>}
      {!isLoading && products.length === 0 && <div>No products found...</div>}

      <div className="productCard">
        {products.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <span>{item.title}</span>
            <span> {item.price}</span>
            <button onClick={() => productDelate(item.id)}>Ištrinti</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;

// const DataFetchingExample = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://golden-whispering-show.glitch.me")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     const updatedData = data.filter((item) => item.id !== id);
//     setData(updatedData);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Product list</h1>
//       {data.map((item) => (
//         <div key={item.id}>
//           <img src={item.image} alt="item.title" />
//           <span>{item.title}</span>
//           <span> {item.price}</span>
//           <button onClick={() => handleDelete(item.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DataFetchingExample;
