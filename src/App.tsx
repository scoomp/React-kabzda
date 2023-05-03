import React from 'react';
import './App.css';
import Accordion from "./componets/Accordion/Accordion";
import {Rating} from "./componets/Accordion/Rating";

function hello() {
    alert('HELLO IT_KAMASUTRA')
}
 hello();



function App() {

    return (
        <div>
            <input />
            <input checked={true} value={"yo"} type={"password"}/>

            This is App component
            <Star/>
            <Accordion title={"menu"}/>
            <Rating title={"users"}/>
            <Rating/>
        </div>
    );
}




function Star() {
    return <div>

        <div>star</div>
        <div>star</div>
        <div>star</div>
        <div>star</div>

    </div>
}

export default App;
