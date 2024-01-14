import React, { Component } from 'react'
import S from './css/tonghop.module.css';
const listGlass=[
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./img/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./img/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./img/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./img/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./img/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./img/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./img/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./img/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./img/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
];
export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
         
           clickValue:null,

        }
    }

    renderGlass=()=>{
     
        const listGl=listGlass.map((value)=>{
         
            return (
          <div className={S['glass-item']} key={value.id} onClick={()=>{
            
            const newState={
                clickValue:value.id,
               }
               console.log(newState);
               this.setState(newState);
               
          }}>
        <img src={value.url} alt="" />
         </div>
          )
        })
        return listGl;
    };
  
  render() {
    return (
        <div className={S['body']}>
        <div className={S['body-top']}>
            <div className={S['image-left']}>
                <div className={S['image-item']}>
                <img src="/public/img/model.jpg" alt="" />
            
                {
        
   
            this.state.clickValue ?(
        
        <div>
            
               <div className={S['image-text']}>
                <h4>{  listGlass.find(glass=>glass.id===this.state.clickValue).name}</h4>
                <p>{  listGlass.find(glass=>glass.id===this.state.clickValue).desc}</p>
            </div>
            <div className={S['image-change']}>
                <img src={  listGlass.find(glass=>glass.id===this.state.clickValue).url} alt="" />
            </div>   
            </div>
     
          ):('')
        
          }  
                </div>
                
                
            </div>
            <div className={S['image-right']}>
            <div className={S['image-item']}>
    <img src="/public/img/model.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className={S['body-bottom']}>
            <div className="glass-bg">
                <div className={S['glass-box']}>
                    {/* <div className={S['glass-item']}>
                        <img src="/public/img/g1.jpg" alt="" />
                    </div>
                    <div className={S['glass-item']}>
                        <img src="/public/img/g1.jpg" alt="" />
                    </div>
                    <div className={S['glass-item']}>
                        <img src="/public/img/g1.jpg" alt="" />
                    </div>
                    <div className={S['glass-item']}>
                        <img src="/public/img/g1.jpg" alt="" />
                    </div>
                    <div className={S['glass-item']}>
                        <img src="/public/img/g1.jpg" alt="" />
                    </div>
                    <div className={S['glass-item']}>
                        <img src="/public/img/g1.jpg" alt="" />
                    </div>
                    */}
                    {this.renderGlass()}
                </div>
            </div>
        </div>
    </div>
    )
  }
}
