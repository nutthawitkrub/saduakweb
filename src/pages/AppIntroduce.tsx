"use client";

import React, { useContext, useRef } from 'react';
import s from '../app/appintroduce.module.css'
import { ScrollContext } from '../../utils/scroll-observer';

const Opacityblock  = (
    sectionProgress: number,
    blockNo: number
) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 &&  progress < 1) return 1
    return 0.2
}

const AppIntroduce: React.FC = () => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const numOfpages = 3
    let progress = 0

    const { current: elContainer} = refContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const HalfH = screenH / 2
        const percentY = Math.min(clientHeight + HalfH, Math.max(-screenH, scrollY - offsetTop) + HalfH) / clientHeight
        progress = Math.min(numOfpages - 0.5, Math.max(0.5, percentY * numOfpages))
    }

    return(
        <div ref={refContainer} className=" bg-white text-[#344F71]">
                <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-center text-2xl md:text-4xl tracking-tight font-semibold">
                        <div className='leading-[1.15]'>
                            <div className={s.appintroductionText} style={{ opacity: Opacityblock(progress, 0)}}><strong>Saduak</strong> is made with <strong>Flutter</strong> for Frontend.</div>
                            <span className={`${s.appintroductionText} inline-block after:content-['_']`} style={{ opacity: Opacityblock(progress, 1)}}>With <strong>Actix web</strong> for the Backend. and With <strong>Firebase</strong> and <strong>PostgreSQL</strong> for the Database.</span>
                            <span className={`${s.appintroductionText} inline-block `} style={{ opacity: Opacityblock(progress, 2)}}>With all requirement from above, We made Saduak Application to apply with  SDG to suitable for future of application and also We connect each other, Student, Teacher, Employee or Owner
                                to make a great community.
                            </span>
                        </div>
                </div>
        </div>
    )
}

export default AppIntroduce