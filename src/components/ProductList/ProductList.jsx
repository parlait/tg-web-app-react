import React from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../hooks/useTelegram';
import {useCallback, useEffect} from 'react';
// className={'header'}>
//     <Button onClick={onClose}>Закрыть</Button>
//     <span className={'username'}>
//         {user?.username}
//     </span>
 //const {user, onClose} = useTelegram();
const products = [
 {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
 {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
 {id: '3', title: 'Джинсы3', price: 6000, description: 'Синего цвета, прямые'},
 {id: '4', title: 'Куртка4', price: 7000, description: 'Зеленого цвета, теплая'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc,item) => {
        return acc +=item.price
    },0)
}
const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryID} = useTelegram();

    const onDendData = useCallback( () =>{
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryID,
        }
        fetch('http://localhost:8000',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    },[])

    return (
        <div>
            ProductList
        </div>
    );


};

export default ProductList;