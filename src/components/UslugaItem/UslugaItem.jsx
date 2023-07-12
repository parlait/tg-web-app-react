import React from 'react';
import Button from "../Button/Button";
import './UslugaItem.css';

const UslugaItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }
// <div className={'img'}/>

    return (
        <div className={'product ' + className}>
           
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <div className={'listsotrudnikovuslugi'}>
            {sotrudnkiuslugi.map(item => (
            <SotrudnikpoUslugeItem
                dolzhnost={item}
                imya={onAdd}
                className={'sotr'}
            />
            ))}
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    );
};

export default UslugaItem;
/*
import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';
//import { useTelegram } from '../hooks/useTelegram';
// className={'header'}>
//     <Button onClick={onClose}>Закрыть</Button>
//     <span className={'username'}>
//         {user?.username}
//     </span>
 //const {user, onClose} = useTelegram();
const ProductItem = ({product,className,onAdd}) => {
    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;
*/