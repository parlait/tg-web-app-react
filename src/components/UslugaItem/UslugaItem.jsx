import React from 'react';
import Button from "../Button/Button";
import './UslugaItem.css';
//import datajjj from "../uslugipofilialam/ttt.json";
const UslugaItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }
// <div className={'img'}/>

    return (
       // <p>ну хоть это покажет</p>
        <div className={'product ' + className}>
            <div className={'title'}>{product.n}</div>
            {product.po ? <div className={'description'}>{product.o}</div> : null}
            {product.pc ? <div className={'price'}><span>Стоимость: <b>{product.c}</b></span></div> : null}
            <div className={'listdopopcii'}>
            <label for={product.x + 'dop'}>Дополнительные опции</label>
            <select multiple size={product.q} name="myselectdopopcii" id={product.x + 'dop'}>
            {product.d.map(item => (
            <option value={item.x}>
                {item.n}
            </option>
            ))}
            </select>
            </div>
            <div className={'listsotrudnikovuslugi'}>
            <label for={product.x + 'sotr'}>Сотрудник</label>
            <select name="myselectsotr" id={product.x + 'sotr'}>
            <option value="">все</option>
            {product.s.map(item => (
            <option value={item.x}>
                {item.n}
            </option>
            ))}
            </select>
            </div>
            

            <Button className={'add-btn'} onClick={onAddHandler}>
                Выбрать
            </Button>
            </div>
            /*
                         <div className={'listsotrudnikovuslugi'}>
            <label for={product.x + 'sotr'}>Сотрудник</label>
            <select multiple size="1" name="myselectsotr" id={product.x + 'sotr'}>
            {product.s.map(item => (
            <option value={item.x}>
                {item.n}
            </option>
            ))}
            </select>
            </div>

<select multiple name="myselectsotr" id={product.x + 'sotr'}>
    <option value="">все</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>



        */
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