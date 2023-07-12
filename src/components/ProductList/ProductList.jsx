import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useCallback} from 'react';
import './ProductList.css';
import {useTelegram} from '../hooks/useTelegram';

// className={'header'}>
//     <Button onClick={onClose}>Закрыть</Button>
//     <span className={'username'}>
//         {user?.username}
//     </span>
//const {user, onClose} = useTelegram();

 
const ProductList = () => {
    
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    
    const {tg} = useTelegram();
    

    const onSendData = useCallback( () =>{ 
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    },[country,street,subject])
    useEffect( () => {
        tg.onEvent('mainButtonClicked',onSendData)
        return () =>{ 
            tg.offEvent('mainButtonClicked',onSendData)
        }
    },[onSendData])
    



    useEffect( () => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })

    },[])
   


    useEffect( () => {
            if(!street || !country) {
                tg.MainButton.hide();
            } else {
                tg.MainButton.show();
            }
    },[country, street])
     
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input 
            className={'input'} 
            type="text" 
            placeholder={'Страна'}
         
            value={country} 
            onChange={onChangeCountry} 
          
            />
            <input 
            className={'input'} 
            type="text" 
            placeholder={'Улица'} 
        
            value={street} 
            onChange={onChangeStreet} 
       
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
//select value={subject} onChange={onChangeSubject} className=

};

export default ProductList;






/*

import React from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem.jsx';
import {useTelegram} from '../hooks/useTelegram';
import {useCallback, useEffect} from 'react';
const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
    {id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
    {id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые'},
    {id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая'},
    {id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
    {id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();
/*
    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        
        //fetch('http://85.119.146.179:8000/web-data', {
        fetch('http://localhost:8000',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        
       
    }, [addedItems])
 
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;
*/
/*
import React from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem.jsx';
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
    return items.reduce((acc, item) => {
        return acc +=item.price
    },0)
}
const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryID} = useTelegram();

    const onSendData = useCallback( () =>{
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
    },[addedItems])

useEffect( ()=> {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
        tg.offEvent('mainButtonClicked', onSendData)
    }
},[onSendData])



    }

})



};

export default ProductList;
*/