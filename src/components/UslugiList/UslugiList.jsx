import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useCallback} from 'react';
import './UslugiList.css';
import {useTelegram} from '../hooks/useTelegram';
import pathkusl from '.../index.js';

  /*
  {
  key: 'ac3df4', // отсутствует в HashHistory
  pathname: '/somewhere',
  search: '?some=search-string',
  hash: '#howdy',
  state: {
    [userDefined]: true
  }
}
2

First you have to import the useLocation hook

import { useLocation } from "react-router-dom";
then set

const location = useLocation();

now you can use the location object which has the following properties: key, pathname, search, hash, state

{
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere',
  search: '?some=search-string',
  hash: '#howdy',
  state: undefined
}
*/
// className={'header'}>
//     <Button onClick={onClose}>Закрыть</Button>
//     <span className={'username'}>
//         {user?.username}
//     </span>
//const {user, onClose} = useTelegram();
let pathkusl2=pathkusl;


//this.context.router.route.location.pathname
 
const UslugiList = () => {
    
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
            placeholder={'Страна' + pathkusl2}
         
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

export default UslugiList;