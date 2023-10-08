import React, { useEffect, useMemo, useState } from 'react';
import './Catergoy.css';

interface CategoryProps {
    selectedCategory:string,
    setCategorySelection: (value: string) => void
   }

const Catergoy:React.FC<CategoryProps> = (props) => {
    const categoryApi = "https://fakestoreapi.com/products/categories";
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch(categoryApi)
            .then(res => res.json())
            .then(result => {
                setCategories(result);
                props.setCategorySelection(result[0]);
            })
    }, [])
    return (
        <div className="ListCategory">
            {
                categories.map(category => (
                    <button className={category===props.selectedCategory?'active':''} onClick={()=>props.setCategorySelection(category)}>{category}</button>
                ))
            }
        </div>
    )
}
export default Catergoy;