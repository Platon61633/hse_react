'use client'

import React, { useEffect, useState } from 'react';
import style from './style.module.css'

const Messenger = () => {

    const [Messenges , SetMessenges] = useState();
    

    useEffect(
        ()=>{
            
        },
        []
    )



    return(
        <div className={style.Messenger}>
            <div className={style.users}>
                <img src="/arrow_left_alt.svg" alt="back" width={50} className={style.backArrow}/>
                {[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(
                    e=>
                    <div className={style.user}>
                        <img src="/user.svg" alt="" width={50}/>
                    </div>
                )}
            </div>
            <div className={style.chat}>
                <div className={style.bro}>
                    <div className={style.name}>
                        dora
                    </div>
                    <div className={style.option}>
                        <img src="/search.svg" alt="" />
                    </div>
                </div>
                <div className={style.messenges}>
                    <div className={style.MyMesseng}>
                        hi, bro
                    </div>
                    <div className={style.BroMesseng}>
                        hi
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messenger