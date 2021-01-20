
class Post extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={error: null,
            isLoaded: false,
            data: []}
    }
    
    
    componentDidMount()
    {

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((result)=>{
            this.setState({data:result,isLoaded:true})
            console.log(result)
        },(error)=>{console.log('error')})
    }

    render()
    {

        const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              {item.title} {item.body}
            </li>
          ))}
        </ul>
      );
    }
  }
    
}
/*ReactDOM.render(
    <Post />,
    document.getElementById('root333')
  );*/