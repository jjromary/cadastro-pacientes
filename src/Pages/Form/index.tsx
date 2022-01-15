import React from "react";
import { useParams } from "react-router-dom"; 

export function PagesForm(){
    const { id } = useParams();
    
    return(
        <div>
            { id && <div>id: {id} </div> }
        </div>
    )
}