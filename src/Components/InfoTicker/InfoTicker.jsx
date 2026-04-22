// import { Sparkles } from "lucide-react";
import "./InfoTicker.css";
import star from '../../../public/Clip path group.png'

export default function InfoTicker(){

const items = [
"MON-SUN: 8AM - 8PM",
"9 OGUNDANA ST, OFF ALLEN AVENUE, ALLEN, IKEJA 100212, LAGOS",
"MON-SUN: 8AM - 8PM",
"9 OGUNDANA ST, OFF ALLEN AVENUE, ALLEN, IKEJA 100212, LAGOS"
];

return(
<section className="ticker-bar">

<div className="ticker-track">

{items.map((item,index)=>(
<div className="ticker-item" key={index}>
{/* <Sparkles className="ticker-icon"/> */}
<img src={star} alt="" className="ticker-icon"/>
<span>{item}</span>
</div>
))}

{/* duplicate for seamless loop */}
{items.map((item,index)=>(
<div className="ticker-item" key={`copy-${index}`}>
{/* <Sparkles className="ticker-icon"/> */}
<img src={star} alt="" className="ticker-icon"/>
<span>{item}</span>
</div>
))}

</div>

</section>
)

}