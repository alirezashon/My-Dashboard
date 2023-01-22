import { Accordion, AccordionTab } from 'primereact/accordion'
import React, { useState } from 'react'
import { GoMailRead } from 'react-icons/go'

 

export default function index({props}){
    // const data = {label:props.label,content:props.content}
    // Object.keys(data).forEach((h)=>{header.push(h)})
    // Object.values(data).forEach((c)=>{content.push(c)})
    
    const header = [props.label]
    const content = [props.content]
    
    return(
        <>
                {header.map((head)=>(
        <div>
                <Accordion  className="accordion-custom "  activeIndex={0}>
                    <AccordionTab className="p-accordion-content"  header={<React.Fragment><GoMailRead/>{head}</React.Fragment>}>
                 
                 {content.map((body)=>(
                    <p>{body}</p>
                 ))
                 }
                    </AccordionTab>
                </Accordion>     
        </div>
               )) }
        </>
    )
}