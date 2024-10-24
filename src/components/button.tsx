'use client'
import React from "react"

 type ButtonProps = {
    text : string;
   onClick? :()=> void;
   style?: React.CSSProperties;

}

export default function Button(props : ButtonProps) {
   
  return (
    <div>
      <button onClick={props.onClick} style={props.style}>{props.text}</button>      
    </div>
  )
}
