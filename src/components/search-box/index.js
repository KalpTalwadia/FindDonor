import React,{useState} from 'react'
import { Search } from '@material-ui/icons'
import './search.css'
export default function SearchBox({setFunction}) {

    const [input, setInput] = useState('')
    const submitSet=()=>{
        setFunction(input)
        }
    return (
       <div class="Header_Search">
               <Search onClick={submitSet}/>
                <input type="text" placeholder="Search City" value={input} onChange={e=>setInput(e.target.value)}/> 
       </div>
    )
}
