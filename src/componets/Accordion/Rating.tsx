import React from "react";

export function Rating(props: any) {
    if (props.value === 4) {return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star/>
        </div>
    )
}
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star/>
        </div>
    )
}



function Star(props: any) {
    if (props.selected === true) {
        return <span> <b>star</b></span>
    } else {
        return <span> star</span>
    }
}

