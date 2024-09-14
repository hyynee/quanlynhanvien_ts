

const HomeContactSection = () => {
    return (
        <section className="shadow-md rounded-md py-20" id="contact">
            <div className="container mx-auto px-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Liên Hệ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Thông Tin Liên Hệ</h3>
                        <p className="text-lg text-gray-700 mb-4">Công ty CyberSoft</p>
                        <p className="text-lg text-gray-700 mb-4">123 Đường Cao Thắng, Phường 8, Quận 3</p>
                        <p className="text-lg text-gray-700 mb-4">Thành phố HCM, Quốc gia VietNam</p>
                        <p className="text-lg text-gray-700 mb-4">Email: contact@companyabc.com</p>
                        <p className="text-lg text-gray-700 mb-4">Điện thoại: (+123) 456-7890</p>
                    </div>
                    <div>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-1">Họ và Tên</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-1">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-1">Nội dung</label>
                                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600"></textarea>
                            </div>
                            <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-300">Gửi</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeContactSection