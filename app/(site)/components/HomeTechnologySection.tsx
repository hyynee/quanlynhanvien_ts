

const HomeTechnologySection = () => {
    return (
        <section className="bg-gray-100 py-20 ">
            <div className="container mx-auto px-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Các Công Nghệ Chúng Tôi Sử Dụng</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center shadow-md rounded-md">
                        <img src="/images/php-logo.png" alt="PHP" className="w-24 h-24 mb-4" />
                        <p className="text-lg font-semibold">PHP</p>
                    </div>
                    <div className="flex flex-col items-center shadow-md rounded-md">
                        <img src="/images/html-logo.png" alt="HTML" className="w-24 h-24 mb-4" />
                        <p className="text-lg font-semibold">HTML</p>
                    </div>
                    <div className="flex flex-col items-center shadow-md rounded-md">
                        <img src="/images/css-logo.png" alt="CSS" className="w-24 h-24 mb-4" />
                        <p className="text-lg font-semibold">CSS</p>
                    </div>
                    <div className="flex flex-col items-center shadow-md rounded-md">
                        <img src="/images/bootstrap-logo.png" alt="Bootstrap" className="w-24 h-24 mb-4" />
                        <p className="text-lg font-semibold">Bootstrap</p>
                    </div>
                    <div className="flex flex-col items-center shadow-md rounded-md">
                        <img src="/images/tailwindcss-logo.png" alt="Tailwind CSS" className="w-24 h-24 mb-4" />
                        <p className="text-lg font-semibold">Tailwind CSS</p>
                    </div>
                    <div className="flex flex-col items-center shadow-md rounded-md">
                        <img src="/images/nodejs-logo.png" alt="Node.js" className="w-24 h-24 mb-4" />
                        <p className="text-lg font-semibold">Node.js</p>
                    </div>
                    <div className="flex flex-col items-center shadow-md rounded-md">
                        <img src="/images/nextjs-logo.png" alt="Next.js" className="w-24 h-24 mb-4" />
                        <p className="text-lg font-semibold">Next.js</p>
                    </div>
                    <div className="flex flex-col items-center shadow-md rounded-md">
                        <img src="/images/laravel-logo.png" alt="Laravel" className="w-24 h-24 mb-4" />
                        <p className="text-lg font-semibold">Laravel</p>
                    </div>
                    <div className="flex flex-col items-center shadow-md rounded-md">
                        <img src="/images/django-logo.png" alt="Django" className="w-24 h-24 mb-4" />
                        <p className="text-lg font-semibold">Django</p>
                    </div>
                    <div className="flex flex-col items-center shadow-md rounded-md">
                        <img src="/images/mysql-logo.png" alt="MySQL" className="w-24 h-24 mb-4" />
                        <p className="text-lg font-semibold">MySQL</p>
                    </div>
                    <div className="flex flex-col items-center shadow-md rounded-md">
                        <img src="/images/postgresql-logo.png" alt="PostgreSQL" className="w-24 h-24 mb-4" />
                        <p className="text-lg font-semibold">PostgreSQL</p>
                    </div>
                    <div className="flex flex-col items-center shadow-md rounded-md">
                        <img src="/images/mongodb-logo.png" alt="MongoDB" className="w-24 h-24 mb-4" />
                        <p className="text-lg font-semibold">MongoDB</p>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default HomeTechnologySection