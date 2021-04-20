import { useEffect, useState } from 'react';
import {db} from '../firebase';

export default function useContent(target,city) {
  const [content, setContent] = useState([]);

  useEffect(() => {
      if(city==='')
      {
        return
      }
      const query= db
      .collection("donor").where('city','==',city.toUpperCase())
    query.onSnapshot(querySnapshot=>{
      const allContent = querySnapshot.docs.map((contentObj)=>({
        ...contentObj.data(),
        docId:contentObj.id
      }))

      setContent(allContent)
    },err=>{
      console.log(`Encountered error: ${err}`)
    })

    
  }, [city]);

  return {  [target]:content };
}

