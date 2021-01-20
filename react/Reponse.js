class Response extends React.Component
{
    state={a:'',isselected:false};
   y="abc";
    constructor(props)
    {
        super(props)
       
       // this.state={a:1}
        
        
    }
change2=(e)=>{
    this.setState({isselected:!this.state.isselected})
    let xx=this.props.change(e,this.state);
    //console.log("*********")
    //console.log(xx)
}

    render()
    {
       let x;
        return (<div className={this.state.isselected?'selected':'notselected'}>
            <input type="checkbox" onChange={(e)=>{ this.change2(e)}} />{this.props.rep.value}
            <p hidden={!this.state.isselected}>{this.props.rep.istrue?"correct":"incorrect"}</p>
            </div>)
    }
}


class Question extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={c:true, isrep:false,responses: Array(4).fill(false)}

    }
    handler=(e, s)=>{
       let  responses=this.state.responses
       responses[s.id-1]=!responses[s.id-1]

        
         let ee=  !responses.every(x=>x==false);
       sessionStorage.setItem("q",responses)

        this.setState({isrep:ee})
       
       //console.log(this.state)
        console.log(s)
        console.log(s.id-1+"****"+responses[s.id-1])
        console.log(responses)
        return this.state.isrep;



    }
    render(){
        return(
            <div className={this.state.c?'qst':'rev'}>
                <h1>{this.props.qt.titre}</h1>
                <p>{this.state.isrep?"resp":"review"}</p>
                <div hidden={this.props.isr}>
                {this.props.qt.rep.map((v,k)=>{
                    return <Response key={k} rep={v} change={(e)=>this.handler(e,v)}/>
                })}
               </div>
            </div>
        )
    }
}


class Quiz extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={x:0, mode:'quiz', dataq:this.props.data}
    }
    goto=()=>
    {
        this.setState({x:this.state.x+1})
    }
    goto2=()=>
    {
        this.setState({x:this.state.x-1})
    }

    changemode=(m)=>{
        this.setState({mode:m})
    }
    render()
    {
        return(
            <div className='next' >
                <div>
                    <button onClick={(m)=>this.changemode('quiz')}>QuiZ</button> <button onClick={(m)=>this.changemode('review')}> Review</button>
                </div>
                <h1>{this.props.nom}</h1>
                <div hidden={this.state.mode!='quiz'}>
                {this.state.dataq.qts.map((v,k)=>{
                    return<div  hidden={k!=this.state.x}><Question key={k} qt={v}/>
                     <div className='bb'><button disabled ={k==0} className="btn btn-success" onClick={this.goto2} >prev</button>--<button className="btn btn-success" onClick={this.goto} >Next</button></div>
                    </div>
                })}
               </div>
               <div hidden={this.state.mode!='review'}>
                    <h3>Revision</h3>
                    {this.state.dataq.qts.map((v,k)=>{
                    return<div  ><Question isr={true} key={k} qt={v}/>
                     
                    </div>
                })}
               </div>
            </div>
        )
    }

}
const qz={id:1, nom:"Quiz React", qts:[{titre:"Question 1?", isrep:false,rep:[{id:1,value:'Reponse 1', istrue:true,isselected:true},{id: 2,value:'Reponse 2', istrue:false,isselected:true},
{id:3,value:'Reponse 3', istrue:true},{id:4,value:'Reponse 4', istrue:false}]},{titre:"Question 2?", rep:[{id:1,value:'Reponse 1', istrue:true},{id: 2,value:'Reponse 2', istrue:false},
{id:3,value:'Reponse 3', istrue:true},{id:4,value:'Reponse 4', istrue:false}]},{titre:"Question 3?", rep:[{id:1,value:'Reponse 1', istrue:true},{id: 2,value:'Reponse 2', istrue:false},
{id:3,value:'Reponse 3', istrue:true},{id:4,value:'Reponse 4', istrue:false}]}]}

const qst={titre:"Question 1?", rep:[{id:1,value:'Reponse 1', istrue:true},{id: 2,value:'Reponse 2', istrue:false},
{id:3,value:'Reponse 3', istrue:true},{id:4,value:'Reponse 4', istrue:false}]}



ReactDOM.render(
    <Quiz data={qz} />,
    document.getElementById('root2')
  );