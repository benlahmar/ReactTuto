

class Mycontour extends React.Component
            {

                constructor(props)
                {
                    super(props);
                    this.state={"a":'', b:true, ct:1};
                    this.incr=this.incr.bind(this);

                }
                incr()
                {
                    this.setState({ct:this.state.ct+1,b:!this.state.b});
                    console.log(this.state);
                }
                incr2= ()=>{
                    this.setState({ct:this.state.ct+1,b:!this.state.b});
                    console.log(this.state);
                }
                
                render()
                {
                    return(<button className="btn btn-info"  onClick={this.incr} >{this.state.b?'X':'O'}</button>);
                }
            }
