import React, { useState } from 'react'
import "./signup.css"
import { NavLink } from 'react-router-dom'
const Sign_in = () => {

    const [logdata , setdata] = useState({
        email:"",
        password:""
    });
    console.log(logdata)

    const adddata =(e)=>{
        const {name , value} = e.target;

        setdata(()=>{
            return{
                ...logdata,
                [name]:value
            }
        })
    }
  return (
    <>
        <section>
            <div className='sign_container'>
                <div className='sign_header'>
                    <img src='./blacklogoamazon.png' alt='amazon_logo'/>
                </div>
                <div className='sign_form'>
                    <form>
                        <h1>Sign-In</h1>
                        <div className='form_data'>
                            <label htmlFor='email'>Email</label>
                            <input type="text" value={logdata.email} name="email" onChange={adddata} id="email"></input>
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password'>password</label>
                            <input type="passowrd" value={logdata.password} name="password" onChange={adddata} placeholder='At teast 6 char' id="password"></input>
                        </div>
                        <button className='signin_btn' >Continue</button>
                    </form>
                </div>
                <div>
                    <div className='create_accountinfo'>
                        <p>New To Amazon</p>
                       <NavLink to="/register"> <button>Create Your amazon account</button></NavLink>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Sign_in