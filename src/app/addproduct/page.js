"use client"
import { useState } from "react"

export default function page() {
    const [formData,setFormData] = useState({
        name : "",
        category: "",
        storage : "",
        color : ""
    });
    const {name, category, storage, color} = formData;
    const onChange = (e)=>{
        setFormData(prevValue=>({
            ...prevValue,
            [e.target.id] : e.target.value
        }))
    }
    
    const onClick = async()=>{
        try {
            let result = await fetch("http://localhost:3000/api/products",{
                method : "POST",
                body : JSON.stringify({name,category,storage,color})
            });
            result = await result.json();
            if(result.success){
                alert("Request Added");
            } 
            
        } catch (error) {
            
        }
            
        

        
    }

  return (
    <div className="">
        <div className="flex h-screen items-center justify-center flex-col gap-4">
            <p className="text-center mx-auto text-2xl font-semibold mb-9">Add Products</p>
            <input type="text" className="text-black" value={name} id="name" onChange={onChange} placeholder="Enter Name " />
            <input type="text" className="text-black" value={category} id="category" onChange={onChange} placeholder="Enter Category " />
            <input type="text" className="text-black" value={storage} id="storage" onChange={onChange} placeholder="Enter Storage " />
            <input type="text" className="text-black" value={color} id="color" onChange={onChange} placeholder="Enter Color " />
            <button onClick={onClick}>Submit</button>
        </div>
    </div>
  )
}
