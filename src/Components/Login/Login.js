import React from 'react';
import './login.css'
import phone from "../../image/banner.png"
import logo from "../../image/logo.png"
import { FaFacebook } from 'react-icons/fa';
import googl from '../../image/google.png'

const Login = () => {
    return (
        <div className='login'>
            
            <div style={{ display: 'flex', justifyContent: "space-between" }} className='login-2'>
                <div>
                    <img style={{ height: '85%', position: "relative",left:"50%", top: "10%" }} src={phone} alt="" /></div>
                <div className="formShape">
                    <div className="marginal" style={{ height:"75%", width:"80%"}} >
                        <img src={logo} alt="" />
                        <h2 style={{ marginBottom: "10%", fontSize: '30px', fontWeight: '400', fontStyle: 'normal', lineHeight: "42px", color: "#473558" }}>Explore new courses... Hurry up!!</h2>
                        <div style={{ position: 'relative' }}>

                            <form action="">
                                <div style={{ position: 'relative' }}>
                                    <input style={{}} className="inputField" placeholder="Email Address" type="email" name="email" id="email" /> <br />
                                    <input placeholder="Password" className="inputField" type="password" name="email" id="email" />
                                    <br />
                                    <a href="/someWhere" className="forgotPass" style={{ position: "absolute", bottom: "0", right: "8%", textDecoration: "none" }} >Forgot Password?</a>
                                </div>
                                <div>
                                    <button style={{ marginTop: "5%", width: "380px" }} type='submit'
                                        className='buttonSubmit'
                                    >LOG IN</button>
                                </div>
                                <div className='flex items-center justify-between mt-2'>
                                    <div style={{ width: "38%", height: "0px", border: "1px solid #666666", display: 'inline-block' }} className='w-2/6 h-0.5 bg-gray-600'></div>
                                    <h6 style={{ display: 'inline-block', marginLeft: "2%", marginRight: "2%", fontSize: "17px", color: "#333333", fontWeight: "700" }}>or</h6>
                                    <div style={{ width: "38%", height: "0px", border: "1px solid #666666", display: 'inline-block' }} className='w-2/6 h-0.5 bg-gray-600'></div>
                                </div>
                            </form>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button onClick={() => console.log("kliik")} style={{ marginRight: "5%", borderRadius: "45%", backgroundColor: "transparent", border: "0 solid transparent" }} >
                                    <FaFacebook style={{ width: "55px", height: "55px", color: "#3B5998" }}></FaFacebook></button>
                                <button style={{ borderRadius: "45%", backgroundColor: "transparent", MarginLeft: "5%", border: "0 solid transparent" }}>
                                    <img src={googl} alt="ugiu" />
                                </button>

                            </div>
                            <h5 className='signup'>Don't have an account?
                                <a className='' style={{ textDecoration: "none", fontWeight: "600", color:"#04acec" }}
                                    href='#signup' > Sign Up</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;