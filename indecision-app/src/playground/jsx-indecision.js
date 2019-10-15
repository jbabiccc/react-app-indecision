
console.log('App.js is running');

//JSX - JavaScript XML;

const app={
title:'Indecision App',
subtitle:'Put your life in hands of a computer',
options:[]
};

const onFormSubmit=(e)=>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option)
    {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

const removeAll = () =>{
    app.options=[];
    render();
}


const appRote= document.getElementById('app');

const onMakeDecision = () =>{
    const rendomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[rendomNum];
    alert(option);
};

const render=()=>{
const template = (
<div>
    <h1>{app.title}</h1> 
    <p>{app.subtitle ? app.subtitle : "Unknown"}</p>
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
   
    <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
    <button onClick={removeAll}>Remove All</button>
    <ol>
    {
        app.options.map((option)=> <li key={option}>Option:{option}</li>)
    }
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
</div>
);

ReactDOM.render(template,appRote);
};

render();