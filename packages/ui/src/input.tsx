interface Inputprops{
    placeholder:string;
    onChange?:(e:any)=>void
}
export const Input_ui=({placeholder,onChange}:Inputprops)=>{
    return(
        <div>
            <input type="text" placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}