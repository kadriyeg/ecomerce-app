import React from "react";
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"
import about3 from "../../assets/about3.jpg"
import about5 from "../../assets/about5.jpg"

const AboutUs = () => {
    return (
        <div className="mx-10">
            <div className="font-extrabold text-5xl mt-14">
                About us
            </div>
            <div className='flex justify-start mt-5 text-gray-500'>
                Comfort is the key and how you feel about your chair will
            </div>
            <div className='flex justify-start text-gray-500'>
                affect how you feel and your mood.
            </div>
            <div className="grid grid-cols-3">
                <div className="grid grid-cols-2 mt-5 gap-20 place-content-start">
                    <div>
                        <div className="text-6xl text-orange-600">1</div>
                        <div className="font-bold text-2xl">Mission</div>
                        <div className="text-gray-500">It makes people at ease and feel like they want to open up.</div>
                    </div>
                    <div>
                        <div className="text-6xl text-orange-600">2</div>
                        <div className="font-bold text-2xl">Motivation</div>
                        <div className="text-gray-500">It makes people at ease and feel like they want to open up.</div>
                    </div>
                    <div>
                        <div className="text-6xl text-orange-600">3</div>
                        <div className="font-bold text-2xl">Vision</div>
                        <div className="text-gray-500">It makes people at ease and feel like they want to open up.</div>

                    </div>
                    <div>
                        <div className="text-6xl text-orange-600">4</div>
                        <div className="font-bold text-2xl">Goal</div>
                        <div className="text-gray-500">It makes people at ease and feel like they want to open up.</div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                
                </div>
                <div className="grid grid-cols-2 gap-2 place-content-end -mt-10">
                    <div className="mt-10">
                        <img src={about1}></img>
                    </div>
                    <div><img src={about2}></img></div>
                    <div></div>
                    <div className="pl-5"><img src={about5}></img></div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutUs