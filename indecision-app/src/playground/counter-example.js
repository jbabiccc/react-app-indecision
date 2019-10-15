class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinuseOne=this.handleMinuseOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={
            count: 0
        };
    }
    
    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount,10);
        if(!isNaN(count)){
            this.setState(()=>({count}));
        }
    }
    //new count values
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!== this.state.count)
        {
            localStorage.setItem('count',this.state.count);
        }
    };
    handleAddOne(){
        this.setState((prevState)=>{
            return{
                count:prevState.count+1
            }
        });
    }
    handleMinuseOne()
    {
        this.setState((prevState)=>{
            return{
                count:prevState.count-1
            }
        });

    }
    handleReset()
    {
       this.setState(()=>{
        return{
        count:0
        }   
       });

    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinuseOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter/>,document.getElementById('app'));



// let count=0;
// const addOne = () =>{
//     count++;
//     renderCounterApp();
// };

// const minuseOne =()=>{
//     count --;
//     renderCounterApp();
// };
// const reset = ()=>{
//     count = 0;
//     renderCounterApp();
// };
// const tamplateTwo = (
//     <div>
//         <h1>Count:{count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minuseOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
// );

// const appRote= document.getElementById('app');

// const renderCounterApp=()=>{
//     const tamplateTwo = (
//         <div>
//             <h1>Count:{count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minuseOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(tamplateTwo,appRote);
// };
// renderCounterApp();