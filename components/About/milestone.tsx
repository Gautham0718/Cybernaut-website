import { off } from "process";
import React, {useEffect, useState} from "react";



const Milestone = (props: { size: number; progress: any; stroke: any; strokebg: any, stroke2: any }) =>{
    const [offset, setOffset] = useState(0);
    const { size, progress, stroke, strokebg, stroke2  } = props;
    const mid = size / 2;
    const radius = size / 2 - stroke / 2;
    const circumference = 2 * Math.PI * radius;
    useEffect(() =>{
        const progressOff = ((100 - progress) / 100) * circumference;
        setOffset(progressOff);
    }, [setOffset, progress, circumference, offset])

    return(
        <div>
            <svg width = {size} height = {size} >
                <circle stroke={strokebg} strokeWidth={stroke} cx = {mid} cy = {mid} r ={radius}  >
                </circle>
                <circle 
                stroke={stroke2} 
                strokeWidth={stroke} 
                cx = {mid} 
                cy = {mid} 
                r ={radius} 
                strokeDasharray= {circumference} 
                strokeDashoffset={offset}>
                </circle>
                <text x={mid} y={mid}>{progress}+</text>
            </svg>
        </div>
    )
};

export default Milestone;