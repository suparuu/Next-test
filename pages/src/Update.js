import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState }  from 'react'


const Update = () => {
    const router = useRouter();
    const {query} = router
    console.log(router,'라우터')
    console.log(query,'쿼리')

    let initial = {
        id: query.id,
        name:query.name,
        email:query.email,
        tel: query.tel
    }
    console.log(initial,"이니셜")
    const [inputValue, setValue] = useState(initial);
    console.log(inputValue,'스테이트 초기값 initial')

    function valueChange(e){
        let t = e.target
        setValue((obj)=>{
            return {...obj , [t.name]: t.value}
        })
        console.log(e,'event.target')
    }
    function create(e){
        e.preventDefault();

        axios.put('/api/hello', {...inputValue, id: query.id})
        router.push('/');

    }

  return (

        <div>
            <form onSubmit={create}>
                <p><input value={inputValue.name} onChange={valueChange} type="text" placeholder='이름' name="name" /></p>
                <p><input value={inputValue.email} onChange={valueChange} type="email" placeholder='메일' name="email" /></p>
                <p><input value={inputValue.tel} onChange={valueChange} type="tel" placeholder='연락처' name="tel" /></p>
                <p><input type="submit" value="저장" /></p>
            </form>
        </div>


  )
}

export default Update