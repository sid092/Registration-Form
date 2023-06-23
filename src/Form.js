import React, { useEffect, useState } from 'react'

const Form = () => {
    const data ={name:"",email:"",password:''}
    const [InputData , setInputData]=useState(data)
    const [flag, setFlag]= useState(false)
    
    useEffect(()=>{
        setInputData(data)
    },[flag])

    function handleData(e){
        setInputData({...InputData,[e.target.name]:e.target.value})
        console.log(InputData)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!InputData.name || !InputData.email || !InputData.password){
            alert("All Fields are mandatory")
        }else{
            setFlag(true)
        }
    }
    return (
        <>
        {(flag)?<h2 className='ui-define'>Hello {InputData.name}!<br></br>You have Registered Successfully...</h2>:
            <form className="container" onSubmit={handleSubmit}>
                <div className='header'>
                    <h1>Registration Form</h1>
                </div>
                <div>
                    <input type ="text" 
                    placeholder='Enter your name'
                    name ='name' 
                    value={InputData.name}
                    onChange={handleData}>
                    </input>
                </div>
                <div>
                    <input type ="email" 
                    placeholder='Enter your email' 
                    name ='email'
                    value={InputData.email}
                    onChange={handleData}>
                    </input>
                </div>
                <div>
                    <input type ="password"
                    placeholder='Enter your password' 
                    name ='password'
                    value={InputData.password}
                    onChange={handleData}>
                    </input>
                </div>
                <div>
                    <button type='submit'>submit</button>
                </div>
            </form>}
        </>
    )
}

export default Form
