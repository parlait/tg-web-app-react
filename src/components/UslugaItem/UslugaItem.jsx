import React from 'react';
import Button from "../Button/Button";
import './UslugaItem.css';
import datajjj from "../uslugipofilialam/ttt.json";
const UslugaItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }
// <div className={'img'}/>
if(vyborsotr==true) {"vybrat"}
if(vybordop==true) {"vybrat"}
if(pokazyvatcenu==true){"vybrat"}
nuzhnoOpisanieUslugi=true
nuzhnaCenaUslugi=true
    return (
        <div className={'product ' + className}>
            <div className={'title'}>{product.title}</div>
            {nuzhnoOpisanieUslugi ? <div className={'description'}>{product.description}</div> : null}
            {nuzhnaCenaUslugi ? <div className={'price'}><span>Стоимость: <b>{product.price}</b></span></div> : null}
            <div className={'listdopopcii'}>
            <select multiple name="myselectdopopcii" id={product.id + dop}>
            {sotrudnkiuslugi.map(item => (
            <option value={dopid}>
                {imyadop}
            </option>
            ))}
            </select>
            </div>
            <div className={'listsotrudnikovuslugi'}>
            <select multiple name="myselectsotr" id={product.id + sotr}>
            {sotrudnkiuslugi.map(item => (
            <option value={sotrid}>
                {imyasotr}
            </option>
            ))}
            </select>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Выбрать
            </Button>
        </div>
    );
};
export default UslugaItem;
//<select multiple name="myselect" id="myselect">
//  <option value="1">option1</option>
//  <option value="2">option2</option>
//  <option value="3">option3</option>
//  <option value="4">option4</option>
//</select>
/*
//<input list="%идентификатор%">
//<datalist id="%идентификатор%">
//<option value="Город1">
//<option value="Город2">
//</datalist>
*/
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