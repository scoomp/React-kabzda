import React from 'react';
import './App.css';
import Accordion from "./componets/Accordion/Accordion";
import {Rating} from "./componets/Accordion/Rating";

function hello() {
    alert('HELLO IT_KAMASUTRA')
}
 hello();



function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is APP component"} />
            <PageTitle title={"My friends"} />
            Article 1
            <Rating value={3} />
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PagePropsType = {
    title: string
}

function PageTitle(props:PagePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
