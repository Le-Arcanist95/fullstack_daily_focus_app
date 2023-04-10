export default function AuthForm(props) {
    const {
        inputs: {
            username,
            password,
            repeatPassword,
            email
        },
        isRegister,
        errorState,
        handleChange,
        handleSubmit,
        handleToggle
    } = props;
    // Github copilot -- use tailwindcss snippets to generate code
    return (
        <section className="flex flex-col items-center justify-center">
            { isRegister ? (
                <>
                    { errorState && 
                        <div role="alert">
                            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                Error
                            </div>
                            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                <p>{errorState}</p>
                            </div>
                        </div>
                    }
                    <form onSubmit={ handleSubmit } className="flex flex-col items-center justify-center">
                        <input
                            type="text"
                            name="username"
                            value={ username }
                            onChange={ handleChange }
                            placeholder="Username"
                            required
                            className="border-2 border-gray-300 p-2 rounded-full my-2"
                        />
                        <input
                            type="password"
                            name="password"
                            value={ password }
                            onChange={ handleChange }
                            placeholder="Password"
                            required
                            className="border-2 border-gray-300 p-2 rounded-full my-2"
                        />
                        <input
                            type="password"
                            name="repeatPassword"
                            value={ repeatPassword }
                            onChange={ handleChange }
                            placeholder="Repeat Password"
                            required
                            className="border-2 border-gray-300 p-2 rounded-full my-2"
                        />
                        <input
                            type="email"
                            name="email"
                            value={ email }
                            onChange={ handleChange }
                            placeholder="Email"
                            required
                            className="border-2 border-gray-300 p-2 rounded-full my-2"
                        />
                        <button className="bg-green-300 hover:bg-green-400 py-2 px-4 rounded-full my-2" type="submit">Register</button>
                    </form>
                    <p className="mt-4">Already have an account? <button className="text-blue-500 cursor-pointer" onClick={ handleToggle }>Login</button></p>
                </>
                ) : (
                    <>
                        { errorState && 
                        <div role="alert">
                            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                Error
                            </div>
                            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                <p>{errorState}</p>
                            </div>
                        </div>
                    }
                        <form onSubmit={ handleSubmit } className="flex flex-col items-center justify-center">
                            <input
                                type="text"
                                name="username"
                                value={ username }
                                onChange={ handleChange }
                                placeholder="Username"
                                required
                                className="border-2 border-gray-300 p-2 rounded-full my-2"
                            />
                            <input
                                type="password"
                                name="password"
                                value={ password }
                                onChange={ handleChange }
                                placeholder="Password"
                                required
                                className="border-2 border-gray-300 p-2 rounded-full my-2"
                            />
                            <button className="bg-green-300 hover:bg-green-400 py-2 px-4 rounded-full my-2" type="submit">Login</button>
                        </form>
                        <p className="mt-4">Don't have an account? <button className="text-blue-500 cursor-pointer" onClick={ handleToggle }>Register</button></p>
                    </>
                )
            }
        </section>
    )
}