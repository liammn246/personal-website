function Topbar() {
    return (
        <div className="fixed w-full h-16 bg-black top-0 left-0 flex items-center justify-between">
            {/* Name */}
            <div className="ml-5 flex items-center">
                <span className="text-white text-lg font-semibold">Liam Nagel</span>
            </div>
            {/* Links */}
            <div className="mr-5 flex items-center space-x-3"> 
                <div className="w-12 h-12 bg-gray-700 flex items-center justify-center">
                    <a href="https://github.com/liammn246" target="_blank">
                        <img src="/images/github_logo.png" className="h-9 w-9"/>
                    </a>
                </div>
                <div className="w-12 h-12 bg-gray-700 flex items-center justify-center">
                    <a href="https://www.linkedin.com/in/liam-nagel-35659831b/" target="_blank">
                        <img src="/images/linkedin_logo.png" className="h-9 w-9"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar