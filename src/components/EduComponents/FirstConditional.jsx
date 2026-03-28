

function FirstConditional({isVisible,setIsVisible}){



    
  
    return(
       <div>
        {isVisible == true
        ?(<button onClick={()=>setIsVisible(false)}>Компонент отображается</button>)
        :(<button onClick={()=>setIsVisible(true)}>Компонент не отображается</button>)
        }
       </div>
    )
}

export default FirstConditional