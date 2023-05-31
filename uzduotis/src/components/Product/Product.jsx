import React, { useEffect, useState } from "react";
import "./Product.css";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  //produktu  istraukimas  ir issaugojimas
  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me/")
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
        console.log(product);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // produkto istrinimas
  const productDelate = (id) => {
    const updateProduct = product.filter((item) => item.id !== id);
    setProduct(updateProduct);
  };

  //puslapio perkrovimo
  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <h1>Product list</h1>
      <div className="productCard">
        {product.map((item) => (
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
