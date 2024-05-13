import React, { useState } from 'react';
import IntroImage from '../assets/Intro-Image.svg';
import { TypeAnimation } from 'react-type-animation';

export function Intro() {
    const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);

    const handleFirstAnimationComplete = () => {
        setFirstAnimationComplete(true);
        console.log(firstAnimationComplete)
    };

    return (
        <div className='pt-10 flex flex-col items-center lg:flex-row lg:pt-0 lg:justify-between xl:h-96 xl:pt-64 lg:mb-20 lg:px-10 xl:mb-40'>
            <div className='text-xs flex flex-col gap-3 mt-10 text-center lg:text-left lg:pb-10 lg:pl-10'>
                <div className='font-bold text-3xl lg:text-4xl md:text-4xl'>
                    <TypeAnimation
                        sequence={[
                            'I\'m Diogo Meira, a FullStack Developer', // Types the introduction
                            1000, // Waits for 1 second
                            handleFirstAnimationComplete
                        ]}
                        wrapper="div"
                        repeat={Infinity}
                        speed={60}
                        cursor={false}
                        style={{
                            fontSize: '1em',
                            color: 'white',
                            display: 'inline-block',
                            textShadow: '1px 1px 20px #000',
                        }}
                    />
                </div>
                <div className='text-sm md:text-lg'>
                    {firstAnimationComplete && ( // Renders the second animation only when first animation is completed
                        <TypeAnimation
                            sequence={[
                                'Turning ideas into reality by building beautiful websites', // Types the message
                                1000, // Waits for 1 second
                            ]}
                            wrapper="div"
                            repeat={Infinity}
                            speed={75}
                            cursor={false}
                            style={{
                                fontSize: '1em',
                                color: 'white',
                                display: 'inline-block',
                                textShadow: '1px 1px 20px #000',
                            }}
                        />
                    )}
                </div>
            </div>
            <div className="block lg:flex lg:w-3/4 lg:justify-center md:justify-center md:w-3/4">
                <img className='w-4/4 lg:w-4/4' src={IntroImage} alt="Intro" />
            </div>
        </div>
    );
}
