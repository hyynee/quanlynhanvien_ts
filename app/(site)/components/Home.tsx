"use client"




import HomeIntroduceSection from "./HomeIntroduceSection";
import Header from "./HomeHeader";
import HomeRecruitmentSection from "./HomeRecruitmentSection";
import HomeTechnologySection from "./HomeTechnologySection";
import HomeContactSection from "./HomeContactSection";
import Footer from "./Footer";
import Navbar from "./Navbar";

 




const HomePage = () => {
    return (
        <div className="w-full h-full">
            <Navbar/>


            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <Header />
                    <HomeIntroduceSection/>

                    <HomeRecruitmentSection/>

                    <HomeTechnologySection/>
                
                    <HomeContactSection/>

                </div>
            </div>

            <Footer/>
        </div>
    );
};


export default HomePage;
