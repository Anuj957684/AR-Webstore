import React, { useEffect, useState } from "react";
import axios from "axios";
import ModelViewer from "../ModelViewer/ModelViewer";
import LazyLoad from "react-lazyload";
import "./ProductList.css";

const ProductList = ({ addToWishlist, wishlist, removeFromWishlist }) => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://backend-zd8i.onrender.com/api/posts");

        console.log("API Response:", response.data); // Debugging

        if (response.data && Array.isArray(response.data.data)) {
          setProductItems(response.data.data);
        } else {
          throw new Error("Invalid API Response");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProductItems([]); // Set to an empty array on error
      }
    };

    fetchData();
  }, []);

  return (
    <section className="list-view">
      {productItems.length > 0 ? (
        productItems.map((item, idx) => (
          <LazyLoad key={idx}>
            <div className="product-item">
            {/* Check if the blogImage is a .glb or .usdz file */}
{item.blogImage.endsWith(".glb") || item.blogImage.endsWith(".usdz") ? (
  <ModelViewer
    item={item}
    addToWishlist={addToWishlist}
    wishlist={wishlist}
    removeFromWishlist={removeFromWishlist}
  />
) : (
  <img src={item.blogImage} alt={item.title} className="blog-image" />
)}

              <h3>{item.title}</h3>
              <p>{item.about}</p>
            </div>
          </LazyLoad>
        ))
      ) : (
        <p>Loading or no products found...</p>
      )}
    </section>
  );
};

export default ProductList;
