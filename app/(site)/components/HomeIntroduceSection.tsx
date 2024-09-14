import React from 'react'

const HomeIntroduceSection = () => {
    return (
        <section className="bg-gray-50 py-20 rounded-md shadow-md" id='introduce'>
            <div className="container mx-auto px-8">
                <div className="lg:flex">

                    <div className="lg:w-1/2 ">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Giới thiệu về Công ty ABC</h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                            Công ty ABC là một doanh nghiệp hàng đầu trong lĩnh vực công nghệ web với hơn 10 năm kinh nghiệm hoạt động. Chúng tôi tự hào là đối tác đáng tin cậy của hàng nghìn khách hàng trên toàn thế giới.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                            Tại Công ty ABC, chúng tôi cam kết cung cấp các dịch vụ và sản phẩm công nghệ web chất lượng cao nhất, từ việc thiết kế và phát triển website, ứng dụng di động, đến các giải pháp phần mềm tùy chỉnh và dịch vụ hỗ trợ kỹ thuật.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                            Sứ mệnh của chúng tôi là mang đến giá trị thực sự cho khách hàng thông qua sự sáng tạo, uy tín và chuyên nghiệp. Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu và không ngừng nỗ lực để đáp ứng mọi yêu cầu và mong muốn của họ.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                            Hãy để Công ty ABC trở thành đối tác đồng hành tin cậy của bạn trong việc xây dựng và phát triển các dự án công nghệ web của bạn. Liên hệ với chúng tôi ngay hôm nay để bắt đầu hành trình mới!
                        </p>
                    </div>

                    <div className="lg:w-1/2 mb-8 lg:pl-12">
                        <img src="images/business-website-6805-1389581638.jpg" alt="Introduction" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeIntroduceSection