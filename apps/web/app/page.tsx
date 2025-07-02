"use client";

import { Input_ui } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function Home() {
  const router=useRouter()
  const [inputValue,setInputValue]=useState("")
  return (
    <div>
      <div>
      <Input_ui onChange={(e)=>{setInputValue(e.target.value)}}placeholder="Write your message here"/>
      <Button children="Send" onClick={()=>router.push(`/chat/${inputValue}`)}/> 
    </div>
    </div>
  );
}
