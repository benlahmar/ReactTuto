class User extends React.Component
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
        return (
            <div>
                <h1>User</h1>
                <div>
                    <select>
                    {this.state.users.map((v,k)=>{
                        return <option >{v.name}</option>
                    })}
                    </select>
                </div>
            </div>
            )
    }
}

ReactDOM.render(
    <User  />,
    document.getElementById('root3')
  );