import React, { Component } from "react";
import "./App.css";
import TopBorder from "./components/UI/top-border/top-border.component"
import BottomBorder from "./components/UI/bottom-border/bottom-border.component"
import Header from "./components/header/header.component"
import Controls from "./components/controls/controls.component"
class App extends Component {

  state={
    items:0,
    counters:[{value:0, id:0,flag:0},
              {value:0, id:1,flag:0},
              {value:0, id:2,flag:0},
              {value:0, id:3,flag:0},]

  }
  increment=(id)=>
  {
    let add_to_item=0;
      this.setState((prevState,prevProps)=>{

       let newCounters= prevState.counters.slice()
       newCounters = newCounters.map(counter=>
        {
          if(counter.id===id)
          {
            if(counter.flag!==1)
            {
              counter.flag=1;
              add_to_item=1;
            }
            
            return { ...counter,value: counter.value + 1 }
           
          }
          return {...counter};
        })
        return {counters: newCounters, items:prevState.items+add_to_item }},()=>console.log(this.state))
  }
  decrement=(id)=>
  {
    let dec_val=0;
      this.setState((prevState,prevProps)=>{
        
       let newCounters= prevState.counters.slice()
       newCounters = newCounters.map(counter=>
        {
          if(counter.id===id)
          {
            let decremented_counter = {...counter}
            decremented_counter.value = decremented_counter.value-1;
            if(decremented_counter.flag===1 && decremented_counter.value===0)
            {
              dec_val=1;
              decremented_counter.flag=0;
            }
                
                
                return decremented_counter
          }
          return {...counter};
        })
        return {counters: newCounters, items:prevState.items-dec_val }},()=>console.log(this.state))
  }
  reset = ()=>
  {

    this.setState(({counters})=>
    {
      let newCounters = counters.map((counter,id)=>{
              counter.value=0;
              counter.flag=0;
        return counter;
      })
      return {counters:newCounters, items:0}

    }, ()=>console.log(this.state))
  }

  render() {
    return <div className="App">
      <TopBorder/>
      <Header items={this.state.items}/>
      <Controls reset={this.reset} counters={this.state.counters} inc={this.increment} dec={this.decrement}/>
      <BottomBorder/>
      
    </div>;
  }
}

export default App;
