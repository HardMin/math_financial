import { Fragment, StrictMode } from "react";

export const SelectOption = ({opt}) =>{
    const {key, value, ref} = opt;
    return(
            <StrictMode>
                {opt.map((opt)=>{
                    <option ref={ref} key={key}>{value}</option>
                })}
            </StrictMode>
        
    )
} 

