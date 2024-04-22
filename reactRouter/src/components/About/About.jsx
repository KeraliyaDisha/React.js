// import React from 'react'
import img3 from "../../assets/img3.jpg";

function About() {
  return (
    <>
      <div className=" flex justify-center py-20 gap-5">
        <img src={img3} alt="img3.jpg" style={{ width: "280px" }} />
        <div className=" my-3">
          {" "}
          <p className="text-xl font-bold text-center ">
            React development is <p>carried out by passionate </p> developer
          </p>
          <p className=" text-xs font-semibold text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <p>Ex maiores voluptatum vitae, animi aperiam </p>{" "}
            <p>repellendus cumque repudiandae eos similique,</p>{" "}
            <p>voluptatibus amet atque, ab nulla. Aut esse corporis nulla.</p>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
