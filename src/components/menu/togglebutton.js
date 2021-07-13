import React, {useState} from 'react'

const ToggleButton = ({name,children}) => {

  const [isOn, setOn] = useState(false);

   var  element=(<button type="button" onClick={()=>setOn(!isOn)}>
             <div>{name}</div> <div>{isOn?"Mostra":"Nascondi"}</div>
                </button>);
  if(isOn){
   return(
          <div>
          {element}
          {children}
          </div>
      );
    }
    else{
      return(
        <div>
        {element}
        </div>
      );
    }
  
}

export default ToggleButton;
