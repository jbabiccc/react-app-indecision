import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption:undefined
    };
    
    handleDeleteOptions=()=>{
        this.setState(()=>({options: []}));
    };
    handleDeleteOption=(deleteOption) =>{
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return deleteOption != option
            })
        }))
    };
    handelPick=()=>{
    const rendomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rendomNum];
    this.setState(()=>({
        selectedOption:option
    }));
    
    };
    handleAddOption=(option)=>{
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1) {
            return 'This option already alredy exists';
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}));
    };
    handelCloseOption =()=>{
       this.setState(() =>{
           return{selectedOption: undefined }
       } );
        
    };
    componentDidMount(){
        try{
       const json=localStorage.getItem('options');
       const options = JSON.parse(json);
       if(options){
       this.setState(()=>({options}));
        }
    }catch(e){

    }
};
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
           
        }
    };
    // componentWillUnmount(){
    //     console.log('componenetWillUnmount!');
    // }
    render(){
        
        const subtitle='Put your life in hands of the computer';
        

        return(
            <div>
            <Header subtitle={subtitle}/>
            <div className="container">
            <Action hasOptions={this.state.options.length > 0}
            handelPick={this.handelPick}/>
            <div className="widget">
            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
            handleAddOption={this.handleAddOption}
            />
            </div>
            </div>
            <OptionModal
            selectedOption={this.state.selectedOption}
            handelCloseOption={this.handelCloseOption}/>
            </div>
        );
    }
}