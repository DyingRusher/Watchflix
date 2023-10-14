const Auth = () =>{
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-8 py-8">
                    <img src="/images/logo.png" alt="" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black px-16 py-11 bg-opacity-70 self-center mt-3 max-w-md w-full rounded-xl">
                        <h2 className="text-white text-semibold text-3xl mb-3">Sign in</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth