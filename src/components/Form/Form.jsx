import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import './Form.css';
import {useTelegram} from '../hooks/useTelegram';

// className={'header'}>
//     <Button onClick={onClose}>Закрыть</Button>
//     <span className={'username'}>
//         {user?.username}
//     </span>
//const {user, onClose} = useTelegram();

 
const Form = () => {
    /*
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    
    const {tg} = useTelegram();
    useEffect( () => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })

    },[])


    useEffect( () => {
            if(!street || !country) {
                tg.mainButton.hide();
            } else {
                tg.mainButton.show();
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
    
    */
    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input 
            className={'input'} 
            type="text" 
            placeholder={'Страна'}
            /* 
            value={country} 
            onChange={onChangeCountry} 
            */
            />
            <input 
            className={'input'} 
            type="text" 
            placeholder={'Улица'} 
            /*
            value={street} 
            onChange={onChangeStreet} 
            */
            />
            <select className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
//select value={subject} onChange={onChangeSubject} className=

};

export default Form;