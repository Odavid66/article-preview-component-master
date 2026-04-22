import { useState } from 'react'
import avatar from '/images/avatar-michelle.jpg'
import sharebtn from '/images/icon-share.svg'


function CardFooter() {
    const vp_width = window.innerWidth;
    const [active, setActive] = useState(false);

    const toggleActive = () => 
    {
        setActive(!active);
    }
    
    if(!active){
        return(
            <div className="flex items-center justify-between px-5 py-3">
                <img src={avatar} alt="michelle" className = "size-8 rounded-full" />
                <div className="text-xs pe-10">
                <p className='font-semibold'>Michelle Appleton</p>
                <p className='font-light text-grayish-blue'>28 Jun 2020</p>
                </div>
                    <button className='me-3 size-7 rounded-full' id="btn" onClick={toggleActive}><img src={sharebtn} alt="share"  /></button>
            </div>    
    )}

    if(active){
        if(vp_width < 768){
            return(
                <div className="flex items-center justify-between px-5 py-3 bg-gray-500 rounded-b-xl">
                    <div className="bg-desaturated-dark-blue text-white flex items-center gap-3">
                        <p className="uppercase tracking-widest text-xs text-grayish-blue">Share</p>

                        <img src="/images/icon-facebook.svg" alt="fb" />
                        <img src="/images/icon-twitter.svg" alt="tw" />
                        <img src="/images/icon-pinterest.svg" alt="pt" />
                    </div>
                        <button className='me-3 bg-white size-7 rounded-full' id="btn" onClick={toggleActive}><img src={sharebtn} alt="share" /></button>
                </div>
        )}
        else{
            return(
                <div className="flex items-center justify-between px-5 py-3">
                    <img src={avatar} alt="michelle" className = "size-8 rounded-full" />
                    <div className="text-xs pe-10">
                        <p className='font-semibold'>Michelle Appleton</p>
                        <p className='font-light text-grayish-blue'>28 Jun 2020</p>
                    </div>
                    <div className="relative me-3">
                        <button className='bg-gray-500 size-7 rounded-full flex items-center justify-center' id="btn" onClick={toggleActive}>
                            <img src={sharebtn} alt="share" className='brightness-0 invert' />
                        </button>
                        <div className="bg-gray-500 text-white py-3 rounded-md px-5 w-max flex items-center gap-3 absolute left-1/2 -translate-x-1/2 bottom-12 z-10">
                            <p className="uppercase tracking-widest text-xs text-grayish-blue">Share</p>

                            <img src="/images/icon-facebook.svg" alt="fb" className='h-3'/>
                            <img src="/images/icon-twitter.svg" alt="tw" className='h-3'/>
                            <img src="/images/icon-pinterest.svg" alt="pt" className='h-3'/>

                            <div className="w-3 h-3 bg-gray-500 rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
}

export default CardFooter
