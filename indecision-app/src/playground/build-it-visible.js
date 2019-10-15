class VisabilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleVisability=this.handleVisability.bind(this);

        this.state={
            visible:false
        };

    }
    handleVisability(){
        this.setState((preState) =>{
            return{
                visible:!preState.visible
            }
        });
    }
    render(){
        return(
            <div>
                <h1>Visability toggle:</h1>
                <button onClick={this.handleVisability}>
                    {this.state.visible ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visible &&(
            <div>
                <p>Heyy!Here are some details.</p>
            </div>)}
            </div>
        );
    }
}

ReactDOM.render(<VisabilityToggle/>,document.getElementById('app'));


// let visibility =false;

// const toggleVisability = () =>{
//     visibility = !visibility;   
//     render(); 
// };

  
// const render=()=>{
// const jsx=(
//     <div>
//         <h1>Visability Toggle</h1>
//         <button onClick={toggleVisability}> 
//             {
//                 visibility ? 'Hide details' : 'Show details'
//             }
//         </button>
//         {visibility &&(
//             <div>
//                 <p>Here are some details..........</p>
//             </div>
//         )

//         }
        
//     </div>

// );
// ReactDOM.render(jsx,document.getElementById('app'));
// };

// render();

