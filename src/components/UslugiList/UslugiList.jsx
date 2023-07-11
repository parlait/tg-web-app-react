import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useCallback} from 'react';
import './UslugiList.css';
import {useTelegram} from '../hooks/useTelegram';
import { useLocation } from 'react-router-dom';
//import { useHistory ,useLocation } from 'react-router-dom';
//import ReactDOM from 'react-dom/client';

//<input type="text" value={mmm} id="myinputmmm"></input>
//try{
//    mmmn=window.document.getElementById("myinputmmm").value;
//}
//catch{
 //   mmmn=11;
//}
//import {pathkusl} from './index.js';

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
//let pathkusl2=0;


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

    //let mmmn='sss';
    let bbb ='';

    try{
   //const location = window.useLocation();
   //useLocation()
   //mmmn=location.pathname;
   bbb=useLocation().pathname;
   //mmmn=magicheskoe;
    //ReactDom.document.getElementById('myinputmmm').value;
    //async () => {
    //    let response = await fetch('/article/promise-chaining/user.json');
     //   let user = await response.json();  
    // };
        //let aaa='https://ИЗМЕНИТЬ'
        
        }
        catch(err){
                bbb="не найдено";
                aaa=err.message;
        }
     
        /*
        else{
            nnn = bbb.replace("/uslugilist/","").replace("/uslugilistvnessotr/","");
            try{
            dannyejson =require('../uslugikompanii/' + nnn +'.json').stringify()//;
        }
        catch{dannyejson ="fgfgfgfg"}
        
        }
        */

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
            placeholder={'Улица' + aaaa(bbb)} 
        
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

async function aaaa(bbbb){
   
    let dannyejson='';
    let nnn='222';
    let aaa="ddd";
    nnn = await bbbb.replace("/uslugilist/","").replace("/uslugilistvnessotr/","");
        nnn="1rA9whn8a9x0ayCFdd0r_NeqrjQoOccJS"
        aaa="https://drive.google.com/file/d/" + nnn + "/view"
        var requestURL = aaa;
        var request = new XMLHttpRequest();
        await request.open('GET', requestURL);
        request.responseType = 'json';
        await request.send();
        request.onload = await function() {
            var superHeroes = request.response;
            //populateHeader(superHeroes);
            //showHeroes(superHeroes);
            aaa="нет ошибок пока"
            }
          return(aaa);
}
export default UslugiList;