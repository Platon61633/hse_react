'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import style from '../style.module.css'
import axios from "axios";

export default function SignIn() {

  const [isLoader , SetisLoader] = useState(false);
  

  const TrueParol = '123456'
  const TrueLogin = 'jora'

  const [Login , SetLogin] = useState<String>('');
  const [Password , SetPassword] = useState<String>('');

  const [isFalsePassword , SetisFalsePassword] = useState<Boolean>(false);

  const Auth = ()=>{
    SetisLoader(true)
    setTimeout(()=>SetisLoader(false), 2000)
    
    if (TrueLogin===Login && TrueParol===Password) {
      
      
      // axios.post('http://')
    }
    else{
      SetisFalsePassword(true)
    }
  }

  return (
    <main className={style.main}>
        <div className={style.container}>
            
            <h1 className={style.form__title}>Вход в профиль</h1>
            <form className={style.form}>
                <div className={`${style.form__input_wrapper} ${style.wrapper}`}>
                    <label htmlFor="email" className={style.form__label}>Электронная почта</label>
                    <input onChange={e=>SetLogin(e.target.value)} className={style.form__input}/>
                </div>
                <div className={`${style.form__input_wrapper} ${style.wrapper}`}>
                    <label htmlFor="password" className={style.form__label}>Пароль</label>
                    <input id="password" onChange={e=>SetPassword(e.target.value)} type="password" className={style.form__input}/>
                </div>
                {isFalsePassword
                ?
                <div className={`${style.wrong} ${style.text}`}>
                    Неверный email или пароль.
                    Проверьте корректность отправляемых данных.
                </div>
                :
                null}
                

                {/* <!-- <a href="#" className={style.">}е помню пароль</a> --> */}
                {isLoader?
                <div className={style.loader_btn}>
                  <div className={style.loader}></div>
                </div>
                :
                <button onClick={e=>{
                  Auth()
                  e.preventDefault()
                }} className={`${style.btn} ${style.form__btn} ${Login && Password?style.btn_active:style.btn_disabled}`}>Войти
                </button>
                }
                
            </form>
            <Link href="/auth/registration" className={`${style.btn} ${style.registration_btn}`}>Создать профиль</Link>
        </div>

        
    </main>
  );
}
