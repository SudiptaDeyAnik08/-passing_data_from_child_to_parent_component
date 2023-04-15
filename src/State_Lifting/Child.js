import React from "react";

const Child = (props)=>{
    const childData = "Hi this massage is from child";

    props.onChangeData(childData);

    return(
        <div>
            {props.data}
            <p>Hi from Child</p>
           
        </div>
    )
}


export default Child;