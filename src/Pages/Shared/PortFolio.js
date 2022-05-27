import React from 'react';
import profile from '../../images/DSC_08632.jpg'
const PortFolio = () => {
    return (
        <div className="review-container profile-container">
            <div className="color profile-color"></div>
            <div className="reviewer-info profile-info">
                <div class="avatar">
                    <div class="w-64 rounded-full ring ring-white ring-offset-base-100 ">
                        <img src={profile} alt="" />
                    </div>
                </div>
                <p>Developer,Student</p>
                <h2 className="cs-name uppercase">SAJAL HOWLADER</h2>
                <a href="www.gmail.com" className='text-emerald-600 font-bold text-lg'>sajolhowlader08@gmail.com</a>
            </div>
            <div>
                <p className='text-center text-3xl font-bold text-blue-700 my-8'>EDUCATION</p>


                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>SI No</th>
                                <th>Institute Name</th>
                                <th>Subject</th>
                                <th>Passing Year</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Nabarun Secondary School</td>
                                <td>SSC</td>
                                <td>2015</td>
                                <td>4.68 out of 5.00</td>
                            </tr>

                            <tr class="hover">
                                <th>2</th>
                                <td>Agriculture College Barishal</td>
                                <td>Agriculture Technology</td>
                                <td>2019</td>
                                <td>3.90 Out of 4.00</td>
                            </tr>

                            <tr>
                                <th>3</th>
                                <td>Savar College</td>
                                <td>Social Science</td>
                                <td>Running</td>
                                <td>Pass</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className='text-center text-3xl font-bold text-blue-700 my-8'>TECHNOLOGY WHAT I KNOW</p>
                <div className='technology mx-auto'>


                    <p className='text-2xl text-center font-bold ll'>HTML-5</p>
                    <p className='text-2xl text-center font-bold'>CSS-3</p>
                    <p className='text-2xl text-center font-bold'>JAVASCRIPT AND ES-6</p>
                    <p className='text-2xl text-center font-bold'>BOOTSTRAP-5</p>
                    <p className='text-2xl text-center font-bold'>TAILWIND CSS</p>
                    <p className='text-2xl text-center font-bold'>REACT JS</p>
                    <p className='text-2xl text-center font-bold'>NODE JS</p>
                    <p className='text-2xl text-center font-bold'>MONGO DB</p>
                </div>
            </div>
        </div>
    );
};

export default PortFolio;