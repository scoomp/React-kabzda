import React from "react";

 function Accordion(props: any) {
    return <div>
      -----f  {props.title}-----
        <AccordionTitle />
        <AccordionBody/>


    </div>
}

function AccordionTitle() {
    return (
        <h3>Меню</h3>

    )
}

function AccordionBody(props: any) {
    return <ul>
        <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
    </ul>
}
export default Accordion;

