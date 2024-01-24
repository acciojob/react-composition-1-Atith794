import React from 'react';

const Tabs = ({props})=>{

    const [content,setContent] = React.useState("");

    return (
        <div>
            <ul>
                {props.map((item)=>(
                    <li onClick={()=>setContent(item.content)}>{item.title}</li>
                ))}
            </ul>
            <p>{content}</p>
        </div>
    );
};

export default Tabs;