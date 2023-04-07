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

    return (
        <section className="auth-form">
            { isRegister ? (
                <>
                    { errorState && <p className="error">{ errorState }</p> }
                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            name="username"
                            value={ username }
                            onChange={ handleChange }
                            placeholder="Username"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={ password }
                            onChange={ handleChange }
                            placeholder="Password"
                            required
                        />
                        <input
                            type="password"
                            name="repeatPassword"
                            value={ repeatPassword }
                            onChange={ handleChange }
                            placeholder="Repeat Password"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={ email }
                            onChange={ handleChange }
                            placeholder="Email"
                            required
                        />
                        <button type="submit">Register</button>
                    </form>
                    <p>Already have an account? <button onClick={ handleToggle }>Login</button></p>
                </>
                ) : (
                    <>
                        { errorState && <p className="error">{ errorState }</p> }
                        <form onSubmit={ handleSubmit }>
                            <input
                                type="text"
                                name="username"
                                value={ username }
                                onChange={ handleChange }
                                placeholder="Username"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                value={ password }
                                onChange={ handleChange }
                                placeholder="Password"
                                required
                            />
                            <button type="submit">Login</button>
                        </form>
                        <p>Don't have an account? <button onClick={ handleToggle }>Register</button></p>
                    </>
                )
            }
        </section>
    )
}