import axios from "axios"
import { useRouter } from "next/router"
import React, { useState } from 'react'
import about from '@/styles/about.module.scss'


const Write = () => {
    const router = useRouter();
    const initial = {id: '', name:'', email:'', tel:''}
    const [inputValue, setValue] = useState(initial);
    function valueChange(e){
        let t = e.target
        setValue((obj)=>{
            return { ...obj, [t.name]: t.value}
        })
    }//인풋값 inputValue안으로 변환
    
    console.log(inputValue)

    function create(e) {
        e.preventDefault();
        // get, post, put, delete
        axios.post('/api/hello', { ...inputValue, id: Date.now().toString() }, {
            headers: { 'Content-Type': 'application/json' }
        })

        router.push('/');
    }
    

  return (

    <div className={about.section}>
        <form onSubmit={create}>
        <p><input onChange={valueChange} type="text" placeholder='이름' name="name" /></p>
        <p><input onChange={valueChange} type="email" placeholder='메일' name="email" /></p>
        <p><input onChange={valueChange} type="tel" placeholder='연락처' name="tel" /></p>
        <p><input type="submit" value="저장" /></p>
        </form>
    </div>

  )
}

export default Write