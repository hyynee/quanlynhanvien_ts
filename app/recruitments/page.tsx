"use client"

import { useState } from 'react';

const RecruitmentPage = () => {
    const [formData, setFormData] = useState({
        imageUrl: '',
        level: '',
        skills: '',
        field: '',
        experiences: '',
        time: '',
        hobby: ''
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
       
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Nộp Hồ Sơ</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block font-semibold mb-1">Link Ảnh</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" />
                </div>
                <div className="mb-4">
                    <label htmlFor="level" className="block font-semibold mb-1">Level</label>
                    <input type="text" id="level" name="level" value={formData.level} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" />
                </div>
                <div className="mb-4">
                    <label htmlFor="skills" className="block font-semibold mb-1">Kỹ Năng</label>
                    <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" />
                </div>
                <div className="mb-4">
                    <label htmlFor="field" className="block font-semibold mb-1">Lĩnh Vực</label>
                    <input type="text" id="field" name="field" value={formData.field} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" />
                </div>
                <div className="mb-4">
                    <label htmlFor="experiences" className="block font-semibold mb-1">Kinh Nghiệm</label>
                    <input type="text" id="experiences" name="experiences" value={formData.experiences} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" />
                </div>
                <div className="mb-4">
                    <label htmlFor="time" className="block font-semibold mb-1">Thời Gian</label>
                    <input type="text" id="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" />
                </div>
                <div className="mb-4">
                    <label htmlFor="hobby" className="block font-semibold mb-1">Sở Thích</label>
                    <input type="text" id="hobby" name="hobby" value={formData.hobby} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" />
                </div>
                <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-300">Nộp Hồ Sơ</button>
            </form>
        </div>
    );
};

export default RecruitmentPage;
