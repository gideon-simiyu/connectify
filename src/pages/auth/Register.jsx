function Login() {
    return (
        <div className="h-screen flex justify-center items-center">
            <form className="max-w-sm w-full p-3">
                <div className="flex justify-center mb-8">
                    <img src="/images/logo.png" width={150} alt=""/>
                </div>
                <div className="mb-8">
                    <h5 className="text-4xl text-primary text-center">Welcome Back</h5>
                    <p className="text-secondary text-center">Enter your login details to continue.</p>
                </div>

                <div className="w-full mb-6">
                    <label className="input-group-filled">
              <span className="input-group-text">
                <span className="icon-[tabler--mail] text-base-content/80 size-6"></span>
              </span>
                        <div className="form-control grow">
                            <input
                                type="text"
                                placeholder="johndoe@example.com"
                                className="input input-filled peer"
                            />
                            <span className="input-filled-label">Email or Username</span>
                        </div>
                    </label>
                    <span className="input-filled-focused"></span>
                </div>

                <div className="w-full mb-6">
                    <label className="input-group-filled">
              <span className="input-group-text">
                <span className="icon-[tabler--lock] text-base-content/80 size-6"></span>
              </span>
                        <div className="form-control grow">
                            <input
                                type="text"
                                placeholder="**************"
                                className="input input-filled peer"
                            />
                            <span className="input-filled-label">Password</span>
                        </div>
                    </label>
                    <span className="input-filled-focused"></span>
                </div>

                <button className="w-full btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;
