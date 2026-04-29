import { useState } from "react";
import { CalendarDays } from "lucide-react";
import "./Transformation.css";

import beforeImg from "../../../public/after.png";
import afterImg from "../../../public/before.png";

export default function TransformationSection(){

const [slider,setSlider]=useState(50);

const handleMove=(e)=>{

const rect =
e.currentTarget.getBoundingClientRect();

const x=
e.clientX-rect.left;

let percent=(x/rect.width)*100;

if(percent<0) percent=0;
if(percent>100) percent=100;

setSlider(percent);

};

const handleTouchMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const touch = e.touches[0];

  const x = touch.clientX - rect.left;

  let percent = (x / rect.width) * 100;

  if (percent < 0) percent = 0;
  if (percent > 100) percent = 100;

  setSlider(percent);
};

return(

<section className="transform-section">

<div className="transform-heading">

<div className="transform-pill">
<span className="pill-dot"></span>
TRANSFORMATION
</div>

<h2>See the Transformation</h2>

<p>
Real results from our beauty and spa treatments—
designed to bring out your best.
</p>

</div>


<div
  className="comparison-wrapper"
  onMouseMove={(e)=>{
    if(e.buttons===1){
      handleMove(e);
    }
  }}
  onClick={handleMove}
  onTouchMove={handleTouchMove}
>

{/* BEFORE */}
<img
src={beforeImg}
className="before-img"
alt=""
/>

{/* AFTER clipped */}
<div
className="after-layer"
style={{
width:`${slider}%`
}}
>
<img
src={afterImg}
className="after-img"
alt=""
/>
</div>


{/* DIVIDER */}
<div
className="divider-line"
style={{
left:`${slider}%`
}}
>

<div className="drag-handle">
&lt; &gt;
</div>

</div>



{/* GLASS RESULT CARD */}

<div className="result-panel">

<h3>Real results, real patients</h3>

<div className="result-meta">

<div>
<CalendarDays size={16}/>
12 Weeks
</div>

<div>
✦ Acne Treatment
</div>

</div>

</div>


</div>

</section>

)

}