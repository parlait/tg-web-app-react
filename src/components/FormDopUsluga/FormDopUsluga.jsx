import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useCallback} from 'react';
import './FormDopUsluga.css';
import {useTelegram} from '../hooks/useTelegram';

//сколько плюс к цене, сколько плюс ко времени,
//какие сотрудники могут делать, какие типы инструмента нужны,
//сколько сотрудников делает, еще сделать тип инструмента форму
//(айди услуги,айди допопции)
//название,описание, есть ли описание
//дата начала действия, дата окончания действия
//может оказываться не ранее,чем со скольки часов
//может оказываться не позднее скольки часов
//плюс сколько к перерыву после услуги
//может ли перерыв пересекаться с обедом и/или другими перерывами,окончание дня


 
const FormDopUsluga = () => {
    
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

export default FormDopUsluga;