import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useCallback} from 'react';
import './FormDolzhnosti.css';
import {useTelegram} from '../hooks/useTelegram';

 //поля: название должности,комментарий, права доступа
 //nazvanieDolzhnosti,kommentarij,pravaDostupa 
const FormDolzhnosti = () => {
    
    const [nazvanieDolzhnosti, setCountry] = useState('');
    const [kommentarij, setStreet] = useState('');
    const [pravaDostupa, setSubject] = useState('нет прав доступа');
    
    const {tg} = useTelegram();
    

    const onSendData = useCallback( () =>{ 
        const data = {
            nazvanieDolzhnosti,
            kommentarij,
            pravaDostupa
        }
        tg.sendData(JSON.stringify(data));
    },[nazvanieDolzhnosti,kommentarij,pravaDostupa])
    useEffect( () => {
        tg.onEvent('mainButtonClicked',onSendData)
        return () =>{ 
            tg.offEvent('mainButtonClicked',onSendData)
        }
    },[onSendData])
    



    useEffect( () => {
        tg.MainButton.setParams({
            text: 'Внести эту должность'
        })

    },[])
   


    useEffect( () => {
            if(!nazvanieDolzhnosti) {
                tg.MainButton.hide();
            } else {
                tg.MainButton.show();
            }
    },[nazvanieDolzhnosti])
     
    const onChangeNazvanieDolzhnosti = (e) => {
        setNazvanieDolzhnosti(e.target.value)
    }
    const onChangeKommentarij = (e) => {
        setKommentarij(e.target.value)
    }
    const onChangePravaDostupa = (e) => {
        setPravaDostupa(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите данные для должности</h3>
            <input 
            className={'input'} 
            type="text" 
            placeholder={'Название должности'}
         
            value={nazvanieDolzhnosti} 
            onChange={onChangeNazvanieDolzhnosti} 
          
            />
            <input 
            className={'input'} 
            type="text" 
            placeholder={'Комментарий'} 
       
            value={street} 
            onChange={onChangeKommentarij} 
       
            />
            <select value={pravaDostupa} onChange={onChangePravaDostupa} className={'select'}>
                <option value={'prosmotr'}>Просмотр</option>
                <option value={'redactirovanie'}>Редактирование</option>
            </select>
        </div>
    );


};

export default FormDolzhnosti;