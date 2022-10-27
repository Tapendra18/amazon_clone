import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const SignUp = () => {
    const [udata , setUdata] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    })
    console.log(udata)


    // const adddata =(e)=>{
    //     const {name , value}= e.target
    // }

  return (
    <>
      <section>
            <div className='sign_container'>
                <div className='sign_header'>
                    <img src='./blacklogoamazon.png' alt='amazon_logo'/>
                </div>
                <div className='sign_form'>
                    <form>
                        <h1>Sign-Up</h1>
                        <div className='form_data'>
                            <label htmlFor='fname'>Your Name</label>
                            <input type="text" value={udata.fname} name="fname" onChange={(e)=>setUdata({...udata,fname:e.target.value})} id="fname"></input>
                        </div>
                        <div className='form_data'>
                            <label htmlFor='email'>Email</label>
                            <input type="text" value={udata.email} name="email" onChange={(e)=>setUdata({...udata,email:e.target.value})} id="email"></input>
                        </div>
                        <div className='form_data'>
                            <label htmlFor='number'>Mobile Number</label>
                            <input type="text" value={udata.mobile} name="mobile" onChange={(e)=>setUdata({...udata,mobile:e.target.value})} id="mobile"></input>
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password'>password</label>
                            <input type="passowrd" value={udata.password} name="password" onChange={(e)=>setUdata({...udata,password:e.target.value})} placeholder='At teast 6 char' id="password"></input>
                        </div>
                        <div className='form_data'>
                            <label htmlFor='cpassword'>password Again</label>
                            <input type="passowrd" value={udata.cpassword} name="cpassword" onChange={(e)=>setUdata({...udata,cpassword:e.target.value})} id="password"></input>
                        </div>
                        <button className='signin_btn' >Continue</button>

                        <div className='signin_info'>
                            <p>Already have an account?</p>
                            <NavLink to="/login">SignIn</NavLink>
                        </div>
                    </form>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default SignUp