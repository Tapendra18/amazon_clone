import React from 'react'
import "./signup.css"
const Sign_in = () => {
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
                            <input type="text" name="email" id="email"></input>
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password'>password</label>
                            <input type="passowrd" name="password" placeholder='At teast 6 char' id="password"></input>
                        </div>
                        <button className='signin_btn' >Continue</button>
                    </form>
                </div>
                <div>
                    <div className='create_accountinfo'>
                        <p>New To Amazon</p>
                        <button>Create Your amazon account</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Sign_in