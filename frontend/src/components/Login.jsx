import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom'
const schema = yup
    .object()
    .shape({
        email: yup.string().required(),
        password: yup.string().required(),
    }).required()
const Login = () => {

    const { register, handleSubmit,formState:{errors} } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit=(data)=> console.log(data)
    const closeModel=()=>{
        document.getElementById('my_modal_3').close();
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        {/* if there is a button in form, it will close the modal */}
                        <Link to={'/'}  onClick={closeModel} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h3 className="font-bold text-lg">Login!</h3>
                    <div>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input  {...register('email')} type="email" className="input w-[100%] outline-none" placeholder="Email" />
                            {errors?.email && <p className='to-red-600 mb-2'>{errors.email.message}</p>}
                            <label className="label">Password</label>
                            <input  {...register('password')} type="password" className="input w-[100%] outline-none" placeholder="Password" />
                            {errors?.password && <p className='to-red-600 mb-2'>{errors.password.message}</p>}
                            <div className='flex justify-between'>
                                <a className="link link-hover text-[15px]">Forgot password?</a>
                                <Link to={'/singup'} className="link link-hover text-[15px]">Not Registered?SingUp</Link>
                            </div>
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
