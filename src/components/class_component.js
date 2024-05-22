import react, {Component} from 'react';

class Class_component extends Component{
constructor()
{
    super()
    this.state={
        message:'welcome',
        name:'surax'
    }
}
onChangeMessage(){
    this.setState({message:'thanks for subscribe'})
}

render()
{
    return(
        <div>
        <h1>hello guys {this.state.message} in our website {this.state.name}</h1>
        <button onClick={()=>this.onChangeMessage()}>subscribe</button>
        </div>
    )
}
}
export default Class_component