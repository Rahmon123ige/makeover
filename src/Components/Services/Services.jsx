import { useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";

import skin from "../../../public/treatment.png";
import facial from "../../../public/r2.jpg";
import laser from "../../../public/r3.jpg";
import acne from "../../../public/r4.jpg";
import aging from "../../../public/ff3.png";

const treatments = [
{
title:"Skin & Beauty Treatments",

description:
"Personalized dermatology care for acne, pigmentation, and long-term skin maintenance.",

image:skin,

benefits:[
"Minimizes fine lines and wrinkles",
"Improves skin texture",
"Treats pigmentation",
"Acne management",
"Long-term skin maintenance"
]
},

{
title:"Advanced Facial Therapy",

description:
"Targeted facial treatments designed to renew and restore skin vitality.",

image:facial,

benefits:[
"Deep pore cleansing",
"Hydrates skin",
"Brightens complexion",
"Smooth texture",
"Restores elasticity"
]
},

{
title:"Laser Rejuvenation",

description:
"Advanced laser treatments for resurfacing and repair.",

image:laser,

benefits:[
"Reduces scars",
"Improves tone",
"Stimulates collagen",
"Targets discoloration",
"Refines skin surface"
]
},

{
title:"Acne Solutions",

description:
"Customized acne care and long-term management.",

image:acne,

benefits:[
"Controls breakouts",
"Reduces inflammation",
"Treats scars",
"Balances skin",
"Prevents recurrence"
]
},

{
title:"Anti Aging Care",

description:
"Age-supportive treatments for youthful skin renewal.",

image:aging,

benefits:[
"Softens wrinkles",
"Firms skin",
"Boosts collagen",
"Improves elasticity",
"Restores radiance"
]
}
];

export default function TreatmentSection(){

const [openCard,setOpenCard]=useState(null);

const handleCardClick=(index)=>{

if(openCard===index){
setOpenCard(null);
}else{
setOpenCard(index);
}

};

return(

<section className="treatments-section">

<div className="treatments-heading">

<div className="services-pill">
<span className="dot"></span>
Services
</div>

<h2>Our Treatments</h2>

<p>
From hair to skincare, explore treatments designed for
lasting results and a confident finish.
</p>

</div>


<div className="stacked-deck">

{treatments.map((card,index)=>{

const isOpen=openCard===index;

return(

<motion.div
key={index}
layout
onClick={()=>handleCardClick(index)}
className={`treatment-card ${isOpen ? "open" : ""}`}

initial={false}

animate={{
y:isOpen ? 520 : index*40,

scale:isOpen ? 1 : 1-(index*0.03)
}}

style={{
zIndex:isOpen ? 20 : 10-index
}}

transition={{
type:"spring",
stiffness:120,
damping:18
}}
>

<div className="card-image">
<img src={card.image} alt={card.title}/>
</div>


<div className="card-content">

<div className="card-top">

<h3>{card.title}</h3>

<p>{card.description}</p>

</div>


<ul className="benefits-list">

{card.benefits.map((item,i)=>(
<li key={i}>
<span className="benefit-dot"></span>
{item}
</li>
))}

</ul>

</div>

</motion.div>

)

})}

</div>

</section>

)

}