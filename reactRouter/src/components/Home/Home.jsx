// import React from 'react'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
export default function Home() {
  return (
    <>
    <div className=" flex justify-center items-center gap-20 my-12">
      <div>
        <img src={img1} alt="img1.jpg" style={{width: '280px'}} />
      </div>
      <div>
        <h1 className=' font-bold text-2xl'>Downloaded Now</h1>
        <h2 className=' font-bold ml-20 text-xl'>Lorem Ipsum</h2>
        <button className=' flex text-white bg-orange-700 hover:bg-orange-900 font-medium rounded-lg text-sm px-4 lg:px-3 lg:py-2.5 focus:outline-none mt-5 float-end gap-2'>
        <svg className=' my-0.4' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M12 10v6"/><path d="m15 13-3 3-3-3"/></svg>Download now
        </button>
      </div>
    </div>
    <div className=' mb-3 flex justify-center'>
        <img src={img2} alt="img.jpg" style={{width: '280px'}}/>
    </div>
    <div className='mb-12 flex justify-center font-bold text-2xl'>
          <p>Lorem Ipsum Yojo</p>
        </div>
    </>
  );
}
