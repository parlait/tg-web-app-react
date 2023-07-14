import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useCallback} from 'react';
import './UslugiList.css';
import {useTelegram} from '../hooks/useTelegram';
import UslugaItem from '../UslugaItem/UslugaItem.jsx';
import { useLocation } from 'react-router-dom';
import datajjj from "../uslugipofilialam/ttt.json";

//const kodFiliala2=useLocation().pathname.replace("/uslugilist/","");
const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.c
    }, 0)
}

 
const UslugiList = () => {
    
 //   const [country, setCountry] = useState('');//
 //   const [street, setStreet] = useState('');//
 //   const [subject, setSubject] = useState('physical');//
    
    //const {tg,queryId} = useTelegram();
    const {tg} = useTelegram();
    const [addedItems, setAddedItems] = useState([]);

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            sotrudniki: smotretsotrudnikov(addedItems),
            dopuslugi: smotretdopuslugi(addedItems)
            //totalPrice: getTotalPrice(addedItems),
            //queryId,
        //}
        
        //fetch('http://85.119.146.179:8000/web-data', {
        //fetch('http://localhost:8000',{
        //    method: 'POST',
        //    headers: {
        //        'Content-Type': 'application/json',
        //    },
        //    body: JSON.stringify(data)
        //})
        
       
    
    
     //       country,//
    //        street,//
     //       subject//
        }//
        tg.sendData(JSON.stringify(data));//
        }, [addedItems])
    //},[country,street,subject])//

    useEffect( () => {
        tg.onEvent('mainButtonClicked',onSendData)
        return () =>{ 
            tg.offEvent('mainButtonClicked',onSendData)
        }
    }, [onSendData])



    useEffect( () => {//
        tg.MainButton.setParams({//
            text: 'Отправить данные'//
        })//

    },[])//

    function smotretsotrudnikov(addedItemsItog) {
        let sotrudnikiAdded = {};
        try{
        if(addedItemsItog.length>0){
            let selectSotrElem;
            let selectedIndexSotr;
            addedItemsItog.forEach(element => {
            selectSotrElem = document.getElementById(element.x + 'sotr');
            //let selectedValueSotr = selectSotr.options[selectSotr.selectedIndex].value; 
            selectedIndexSotr = selectSotrElem.selectedIndex;
            sotrudnikiAdded[element.x]=selectedIndexSotr;
        });
        }
        }
        catch{sotrudnikiAdded.oshibka="да"}
        /*
        var selectElem = document.getElementById('select')
var pElem = document.getElementById('p')

// Когда выбран новый элемент <option>
selectElem.addEventListener('change', function() {
  var index = selectElem.selectedIndex;
  // Добавить данные в <p>
  pElem.innerHTML = 'selectedIndex: ' + index;
})
        */
//создаем пустой объект var cat = {}; //добавляем свойство: cat.name = "Garfield";
            /*Спасибо за обратную связь
            {"products":[
                {"x":23,"n":"маникюр","o":"самая крутая процедура на Земле",
                "pc":true,"ps":true,"po":true,"pd":"da","ks":2,"kd":2,"q":2,
                "c":30,"v":20,"p":0,"s":[{"x":29,"n":"маша"},{"x":30,"n":"камилла"}],
                "d":[{"x":23,"n":"массаж кисти","c":30,"v":20,"p":0},
                {"x":26,"n":"массаж локтя","c":30,"v":20,"p":0}]},
            {"x":37,"n":"маникюр","o":"самая крутая процедура на Земле",
            "pc":true,"ps":true,"po":true,"pd":"da","ks":2,"kd":2,"q":2,"c":30,"v":20,"p":0,
            "s":[{"x":29,"n":"маша"},{"x":30,"n":"камилла"}],"d":
            [{"x":23,"n":"массаж кисти","c":30,"v":20,"p":0},{"x":24,"n":"массаж локтя",
            "c":30,"v":20,"p":0}]}],"sotrudniki":["2","3","4"],"dopuslugi":["2","3","4"]}
            */
        return sotrudnikiAdded}
    
    function smotretdopuslugi(addedItemsItog) {  

        let dopUslugiAdded = {"ничего": "ничего"};
        let i;
        let vseDopyOdnoiAdded;
        let selectDopElem;
        let vseDopyMassiv;
        
        
        if(addedItemsItog.length>0){
                
            addedItemsItog.forEach(element => {
                dopUslugiAdded = {"ни1": addedItemsItog.length};
                try{
                selectDopElem = document.getElementById(element.x + 'dop');
                dopUslugiAdded.ни2=document.getElementById(element.x + 'dop').id;
                //dopUslugiAdded = {"kk": "hh"};
                
            try{
                
                vseDopyOdnoiAdded =selectDopElem.selectedOptions;
                dopUslugiAdded.ни3=vseDopyOdnoiAdded.length;
                if(vseDopyOdnoiAdded.length>0){
                    vseDopyMassiv = [];
                for (i = 0; i < vseDopyOdnoiAdded.length; i++) {
                    vseDopyMassiv.push(vseDopyOdnoiAdded.label)
                }
            }
            else{vseDopyMassiv = ['ничего']}
            //  
            //    output += collection[i].label;
            //  }
              //output += collection[i].label;
            //let selectedValueSotr = selectSotr.options[selectSotr.selectedIndex].value; 
            //selectedIndexDop = selectSotrElem.selectedIndex;

            //dopUslugaAdded= Array.prototype.slice.call(document.querySelectorAll('#' + element.x + 'dop' + ' option')).filter(option => option.selected).map(x => x.value).join();
        }
        catch(err){vseDopyMassiv=err.message}   
            dopUslugiAdded[element.x]=vseDopyMassiv;
    }
            catch(er){vseDopyMassiv=er.message
                dopUslugiAdded[element.x]=vseDopyMassiv}
        });
        


    }
        return dopUslugiAdded  
        
    
     }
                 /*document.getElementById('resultId').innerHTML = Array.prototype.slice.call(document.querySelectorAll('#selectId option')).filter(option => option.selected).map(x => x.value).join();
            
            <div id="weeklyID" class=" multisel-container">
  <label class=" multisel-label" for="groupFormReportsInput">Назначьте
                        показатели</label>
  <div class=" select-container">
    <select id="selectId" class="multisel selectpicker" multiple name="week_days">
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="1">1</option>
    </select>
  </div>
</div>
<br>
<input type="button" value="click me" onclick="isUserId()">
<br>
<div id='resultId'></div>
*/
/*
const element = document.querySelector('#select');

console.log(element.value)

element.addEventListener("change", function() {
  const element = document.querySelector('#select');
  alert(element.value)
});
*/
const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.x === product.x);
    let newItems = [];

    if(alreadyAdded) {
        newItems = addedItems.filter(item => item.x !== product.x);
    } else {
        newItems = [...addedItems, product];
    }

    setAddedItems(newItems)

    if(newItems.length === 0) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.show();
        tg.MainButton.setParams({
            text: `Далее`//(Выбрано на ${getTotalPrice(newItems)})`
        })
    }
}
let kodFiliala;
kodFiliala=useLocation().pathname.replace("/uslugilist/","");

let zamenimputnagoogle=true;
if(zamenimputnagoogle==true){
    kodFiliala=kodFiliala.replace("ghfjeldofndjfkskslejfkdosdhdhdhfesaslhr","1rA9whn8a9x0ayCFdd0r_NeqrjQoOccJS");
}
//let putkfilialu ="https://drive.google.com/file/d/" + kodFiliala + "/view";
//let itogdata='jjj';
//const getjsonFiliala= async () => {
    /*
async function getjsonFiliala() {
    try {
    const response = await fetch(putkfilialu);
    const data = await response.json();
    itogdata=data.stringify();
    //console.log(data)
  } catch(err) {
    //console.log('Error >>>', err)
    try{
        itogdata='Error >>>' + err.message;
    } catch {itogdata='Error >>>' + 'сообщение не удалось вывести об ошибке'}
  }
  return itogdata
}
const getjsonFiliala1 = async () => {  return 10; }

function getjsonFiliala2() {
    try {
    const response = fetch(putkfilialu);
    const data = response.json();
    itogdata=data.stringify();
    //console.log(data)
  } catch(err) {
    //console.log('Error >>>', err)
    try{
        itogdata='Error >>>' + err.message;
    } catch {itogdata='Error >>>' + 'сообщение не удалось вывести об ошибке'}
  }
  return itogdata
}
function getjsonFiliala3() {
    try {
    //const response = fetch(putkfilialu);
    //const data = response.json();
    //itogdata=JSON.stringify(datajjj);
    itogdata=kodFiliala2//putkfilialu;//datajjj.name;
    //console.log(data)
  } catch(err) {
    //console.log('Error >>>', err)
    try{
        itogdata='Error >>>' + err.message;
    } catch {itogdata='Error >>>' + 'сообщение не удалось вывести об ошибке'}
  }
  return itogdata
}
*/
const products = datajjj[kodFiliala];/*[
    {id: '1', title: 'Наращивание', price: 2000, description: 'включен классический маникюр, снятие, покрытие'},
    {id: '2', title: 'Удаление лака', price: 200, description: 'на 10 ногтях снятие геля, акрила,обычного лака'},
    {id: '3', title: 'Покрытие под кутикулу', price: 5000, description: 'покрытие под кутикулу гель-лаком или обычным лаком'},
    {id: '4', title: 'Обрезной маникюр', price: 122, description: 'маникюр ножничками с коррекцией формы и длины и снятием'},
]
*/
//const summm= (q,p) => {q+p} 
//await summm(2,3)
//for(let jj=1;jj<3;jj++){
//    if(jj==1){

//}
//else{
    //getjsonFiliala()
    /*
    function nuzhnyedannye(){
        let kff=Number(datajjj.kf);
        for(let jii=0;jii<kff;jii++){
            if(datajjj.f[jii].n==kodFiliala){return (datajjj.f[jii])}
        }
    }
    let key = "likes birds";

    // то же самое, что и user["likes birds"] = true;
    user[key] = true;
    */
    return (
    //    <p>{kodFiliala}</p>
    //<p>{datajjj[kodFiliala].length}</p>

//};

    <div className={'list'}>
        {datajjj[kodFiliala].map(item => (
            <UslugaItem
                product={item}
                onAdd={onAdd}
                className={'item'}
            />
        ))}
    </div>

 );


};
export default UslugiList;





/*

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
 /*
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

async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
  }

  async function aaaa(bbbb){
    const response = await fetch("https://drive.google.com/file/d/" + bbbb.replace("/uslugilist/","").replace("/uslugilistvnessotr/","").replace("ghfjeldofndjfkskslejfkdosdhdhdhfesaslhr","1rA9whn8a9x0ayCFdd0r_NeqrjQoOccJS") + "/view");
    const movies = await response.json();
    //return movies;
    return(  <div className={"form"}>
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
  }
async function aaaaudakit(bbbb){
   
    let dannyejson='';
    let nnn='222';
    let aaa="ddd";
    /*
    nnn = await bbbb.replace("/uslugilist/","").replace("/uslugilistvnessotr/","");
        nnn="1rA9whn8a9x0ayCFdd0r_NeqrjQoOccJS"
        aaa="https://drive.google.com/file/d/" + nnn + "/view"
        var requestURL = aaa;
        var request = new XMLHttpRequest();
        await request.open('GET', requestURL);
        request.responseType = 'json';
        await request.send();
   
        var request = new XMLHttpRequest();
        request.open('GET', "https://drive.google.com/file/d/" + bbbb.replace("/uslugilist/","").replace("/uslugilistvnessotr/","").replace("ghfjeldofndjfkskslejfkdosdhdhdhfesaslhr","1rA9whn8a9x0ayCFdd0r_NeqrjQoOccJS") + "/view");
        request.responseType = 'json';
        request.send();
        request.onload = await function() {
            var superHeroes = request.response;
            //populateHeader(superHeroes);
            //showHeroes(superHeroes);
            aaa="нет ошибок пока"
            }
          return aaa;
}
export default UslugiList;
     */