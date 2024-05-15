import React , {useEffect, useState} from 'react'

export const UseIsVisible = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const [isSetOnce, setIsSetOnce] = useState(false)
  
    console.log({isIntersecting})
    console.log({isSetOnce})
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>{
        setIntersecting(entry.isIntersecting)
   
    });
    if(isIntersecting){
      setIsSetOnce(true)
    }
  
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref,isIntersecting]);
  
    return [isIntersecting,isSetOnce];
}
