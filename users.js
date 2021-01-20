

class Adresse extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={data:{}}
    }
    render()
        {
            return (<li className="nav-item"><a href="#" className="nav-link">{this.props.adr.street} <span className="float-right badge bg-primary">{this.props.adr.suite}</span></a></li>)

        }
    
}

class User extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={users:{}}
    }

    
    render()
    {
        return (
            
                <div className="col-md-4">            
            <div className="card card-widget widget-user-2">
              <div className="widget-user-header bg-warning">
                <div className="widget-user-image">
                  <img className="img-circle elevation-2" src="../../dist/img/user7-128x128.jpg" alt="User Avatar"/>
                </div>
                <h3 className="widget-user-username">{this.props.user.name}</h3>
                <h5 className="widget-user-desc">Lead Developer</h5>
              </div>
              <div className="card-footer p-0">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Projects <span className="float-right badge bg-primary">31</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Tasks <span className="float-right badge bg-info">5</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Completed Projects <span className="float-right badge bg-success">12</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Followers <span className="float-right badge bg-danger">842</span>
                    </a>
                  </li>
                  <Adresse adr={this.props.user.address} />
                </ul>
              </div>
            </div>
          </div>
            
            
            )
    }
}


class Employers extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state={users:[]}
    }

    componentDidMount()
    {
        let pr=fetch('https://jsonplaceholder.typicode.com/users')
        .then(a=>a.json())
        .then((resultat)=>{
            
            this.setState({users:resultat})

        }, (error)=>{
            console.log(error)
        })
        console.log(pr)
    }
    render()
    {
        return (<div className="row">{this.state.users.map((v,k)=>{
            return <User key={k} user={v}/>
            })
            }</div>);
    }
}
ReactDOM.render(
    <Employers  />,
    document.getElementById('user')
  );