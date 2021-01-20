class Response extends   React.Component {
    rep={}
    constructor(props) {
      super(props);
      
      this.state = {
        value: null,
        
        isselected:false,
        text:"reponse 1",
        istrue:true
      };
    }
   
    handleSelect=()=>{

        this.setState({isselected:!this.state.isselected})
    }
    render()
    {
        return (<div key={this.props.rep.id} className={this.state.isselected?'selected':'notselected'} >
            <input onClick={this.props.onClick} type='checkbox' onChange={this.handleSelect}  checked={this.state.isselected} />
            {this.props.rep.text}
            <p hidden={this.props.mode=='quiz'}>is {this.props.rep.istrue?'correct':'incorrect'}</p>
            </div>);
    }
}


class Question extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            mode:'quiz'
        }
        
    }

    handleCheck=(e)=>
    {
       
        console.log(this.props.qst)

    }
    
    render()
    {
        return (
        <div>
            <h1>{this.props.qst.txt}</h1>
            {this.props.qst.reponse.map((value, index) => {
        return <Response rep={value} key={index} mode={this.state.mode} onClick={() => this.handleCheck()} />
      })}
            
        </div>)
    }
}




const reponse={text:'reponse1', istrue:false}
const qsts={id:1,txt:'question 1', reponse:[{id:1,text:'reponse1', istrue:false},{id:2,text:'reponse2', istrue:true}]}

/*ReactDOM.render(
    <Question qst={qsts} />,
    document.getElementById('root1')
  );*/
  