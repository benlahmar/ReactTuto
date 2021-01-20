class Comp1 extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={id:1,txt:'Beta'}
       this.method1= this.method1.bind(this)
      // this.props.azerty();
    }

    azerty=()=>
    {
        console.log(this.props)
    }
    method1()
    {
        console.log(this.props)
        this.setState({txt:this.props.att1})
        console.log(this.props)

    }

    method2= ()=>
    {
        console.log(this.props)
        this.setState({txt:this.props.att1})
        console.log(this.props)
    }
    render(){
        //nkkl

        return<div> <button className="abc" onClick={this.azerty} >{this.props.att1}</button></div>
    }
}

class Comp2 extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={id:1,txt2:1}
      
    }
     
    change=()=>{
       
        this.setState({txt2:this.state.txt2+1})
        console.log(this.state)
    }

    kk(){
        console.log("azert");
    }
    render()
    {

        return (
            <div className={this.state.txt2}>
                <h1>{this.props.titre}</h1>
                <button onClick={this.change} >{this.state.txt2}</button>
            <div>
            <Comp1 onClick={this.kk} att1={this.state.txt2}/>  
            </div>
            <div>
            <Comp1 att1='hhhh'/>  
            </div>
            </div>
            )
    }

}

class Menu extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={}
    }

    render()
    {
        return(

           <nav className="nav" >
               <ul>
                   <li><a href=''>Acceuil</a></li>
                   <li><a href=''>Contact</a></li>
                   <li><a href=''>About</a></li>
               </ul>
           </nav>
        )
    }
}


ReactDOM.render(
    <Comp2  titre='example'/>,
    document.getElementById('id123')
  );

  ReactDOM.render(
    <Menu  />,
    document.getElementById('id1234')
  );