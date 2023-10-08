import React, { useEffect, useState } from 'react';
import './Product.css';
import minus from '../images/minus.svg';
import plus from '../images/plus.svg';
interface ProductProps {
    selectedCategory: string,
}
const result : string[] = [];


const Product: React.FC<ProductProps> = (props) => {
    const productApi = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [likes, setLikes] = useState(result);

    useEffect(() => {
        if (props.selectedCategory !== "") {
            fetch(`${productApi}/category/${props.selectedCategory}`)
                .then(res => res.json())
                .then(result => setProducts(result))
        }
    }, [props.selectedCategory])


    const handleLikeClick = (productId:string) => {
        const tempLikes = [...likes];
        if(likes.includes(productId)){
            setLikes(likes.filter((like) => like !== productId))
        }
        else{
            setLikes([...tempLikes,productId]);
        }
    }

    return (
        <>
            {
                products.map((product: any) => (
                    <div className="item" key={product.id}>
                        <div className="buttons">
                            <span className="delete-btn" onClick={()=>setLikes(likes.filter(id => id !== product.id))}></span>
                            <span className={likes.includes(product.id) ? 'like-btn is-active' :'like-btn'} onClick={()=>handleLikeClick(product.id)}></span>
                        </div>

                        <div className="image">
                            <img src={product.image} alt=""  />
                        </div>

                        <div className="description" title={product.description}>
                            {product.description}
                        </div>

                        <div className="quantity">
                            <button className="plus-btn" type="button" name="button">
                                <img src={plus} alt="" />
                            </button>
                            <input type="text" name="name" value="1" />
                            <button className="minus-btn" type="button" name="button">
                                <img src={minus} alt="" />
                            </button>
                        </div>

                        <div className="total-price">${product.price}</div>
                    </div>
                ))
            }
        </>
    )
}
export default Product;