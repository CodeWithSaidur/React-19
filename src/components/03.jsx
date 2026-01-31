export default function Three() {

    const isLogin = true

    return (
        <div>
            {
                isLogin && <p>Welcome!</p>
            }

            {
                isLogin ? <p style={{ color: isLogin ? 'blue' : 'Red' }}>Welcome</p> : <p>Login</p>
            }
        </div>
    )
}
