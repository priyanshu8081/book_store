import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom'
import Login from './Login'

const schema = yup
    .object()
    .shape({
        email: yup.string().required(),
        password: yup.string().required(),
    }).required()
const Singup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => console.log(data)
    const closeModel = () => {
        document.getElementById('my_modal_3').close();
    }

    return (
        <div className='flex justify-center h-screen items-center'>
            <fieldset className="fieldset bg-base-200  border-[#00A385] rounded-box w-xs border-2 p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <legend className="fieldset-legend">Singup</legend>

                    <label className="label">Email</label>
                    <input {...register('email')} type="email" className="input outline-0" placeholder="Email" />
                    {errors?.email && <p className='to-red-600 mb-2'>{errors.email.message}</p>}
                    <label className="label">Password</label>
                    <input {...register('password')} type="password" className="input outline-0" placeholder="Password" />
                    {errors?.password && <p className='to-red-600 mb-2'>{errors.password.message}</p>}
                    <button className="btn btn-neutral outline-none border-0 my-3 mt-4 bg-[#00a385]">SingUp</button>
                </form>
                <Link onClick={() => document.getElementById('my_modal_3').showModal()} className='hover:link' >Have Account ? Login </Link>
                <Login />
            </fieldset>
        </div>
    )
}

export default Singup
