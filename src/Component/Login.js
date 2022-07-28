import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
// import useToken from '../hooks/useToken';
import Loading from '../Pages/Shared/Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [
        signInWithGoogle,
        gUser,
        gLoading,
        gError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const [token] = useToken(user || gUser)
    const onSubmit = data => {
        reset()
        signInWithEmailAndPassword(data?.email, data?.password)
    };
    let from = location.state?.from?.pathname || "/";
    let signInError;
    if (user || gUser) {
        navigate(from, { replace: true });
    }
    if (loading || gLoading) {
        return <Loading />
    }
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }
    return (
        <div>
            <div className='flex max-h-screen justify-around m-10 items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors?.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                                    {errors?.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors?.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                    {errors?.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                </label>
                            </div>
                            <input className='btn btn-primary w-full mt-5 max-w-xs text-white' type="submit" value="Login" />
                            {signInError}
                        </form>
                        <p className='text-2xl'><small><Link className='text-red-700 hover:text-green-600 font-bold' to="/register">Create A New Account</Link></small></p>
                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-primary btn-outline"
                        >Continue with Google</button>
                    </div>

                </div>
                <div className='w-0 md:w-80 lg:w-96'>
                    <img className='bg-base-100 shadow-xl rounded-lg' src="https://thumbs.dreamstime.com/b/business-woman-drawing-global-structure-networking-business-woman-drawing-global-structure-networking-data-exchanges-customer-109179483.jpg" alt="" />
                </div>
            </div >

        </div>
    );
};

export default Login;