import React, {useState} from 'react';
import axios from 'axios'

const ProductForm = (props) => {

    const {allProducts, setallProducts} = props
    const [product, setProduct] = useState({
        Title: "",
        Price: '',
        Description: '',
    })
    
    const handleInputChange = (e) => {
        setProduct({...product,[e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/postProduct`, product)
            .then((res) => {
                setallProducts([...allProducts, res.data])
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Title:</label>
                <input type="text" onChange={handleInputChange} value ={product.Title} name='Title' />

                <label>Price:</label>
                <input type="text"  onChange={handleInputChange} value ={product.Price} name='Price' />

                <label>Description:</label>
                <input type="text"  onChange={handleInputChange} value ={product.Description} name='Description'/>

                <button>Create</button>
            </form>
        </div>
    )
}

export default ProductForm;