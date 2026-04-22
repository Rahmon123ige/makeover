                import { useState } from "react";
                import { motion, AnimatePresence } from "framer-motion";
                import { ArrowLeft, ArrowRight } from "lucide-react";
               

                import "./TestimonialsSection.css";

                import a1 from "../../../public/small1.png";
                import a2 from "../../../public/small2.png";
                import a3 from "../../../public/small3.png";
                import a4 from "../../../public/r4.jpg";
                import a5 from "../../../public/r3.jpg";

                const testimonials = [
                {
                name:"Olivia Chen",
                role:"Creative Director",
                image:a1,
                review:
                "The personalized approach made all the difference. They didn’t rush anything and created a plan that."
                },

                {
                name:"Daniel Brooks",
                role:"Entrepreneur",
                image:a2,
                review:
                "From consultation to follow-up, the care was exceptional. My skin texture and tone have improved noticeably."
                },

                {
                name:"Sophia James",
                role:"Brand Strategist",
                image:a3,
                review:
                "The professionalism and results exceeded expectations. I finally found treatments that actually work."
                },

                {
                name:"Emma Stone",
                role:"Marketing Lead",
                image:a4,
                review:
                "I felt cared for from day one. The treatment plan was thoughtful and delivered visible improvements."
                },

                {
                name:"Mia Clarke",
                role:"Product Designer",
                image:a5,
                review:
                "Absolutely worth it. The team made me comfortable and the results look natural and refined."
                }
                ];

                export default function TestimonialsSection(){

                const [startIndex,setStartIndex]=useState(0);

                const nextSlide=()=>{

                setStartIndex(
                (prev)=>(prev+1)%testimonials.length
                );

                };

                const prevSlide=()=>{

                setStartIndex(
                (prev)=>
                (prev-1+testimonials.length)%testimonials.length
                );

                };

                const visibleCards=[
                testimonials[startIndex],
                testimonials[(startIndex+1)%testimonials.length],
                testimonials[(startIndex+2)%testimonials.length]
                ];

                return(

                <section className="testimonials-section">

                <div className="testimonials-heading">

                <div className="services-pill">
                <span className="dot"></span>
                Services
                </div>

                <h2>Testimonials</h2>

                <p>
                From hair to skincare, explore treatments designed for
                lasting results and a confident finish.
                </p>

                </div>


                <div className="testimonial-topbar">

                <h3>What our clients say</h3>

                <div className="testimonial-arrows">

                <button onClick={prevSlide}>
                <ArrowLeft size={18}/>
                </button>

                <button onClick={nextSlide}>
                <ArrowRight size={18}/>
                </button>

                </div>

                </div>



                <div className="testimonial-cards">

                <AnimatePresence mode="wait">

                {visibleCards.map((item,index)=>(

                <motion.div
                key={item.name}

                className="testimonial-card"

                initial={{
                opacity:0,
                x:100
                }}

                animate={{
                opacity:1,
                x:0
                }}

                exit={{
                opacity:0,
                x:-100
                }}

                transition={{
                duration:.45
                }}
                >

                <div className="card-top">

                <div className="stars">
                ★★★★★
                </div>

                <p>
                {item.review}
                </p>

                </div>


                <div className="card-user">

                <img
                src={item.image}
                alt=""
                />

                <div>

                <h4>{item.name}</h4>

                <span>{item.role}</span>

                </div>

                </div>

                </motion.div>

                ))}

                </AnimatePresence>

                </div>


                </section>

                )

                }