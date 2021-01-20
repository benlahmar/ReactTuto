function MyTab(props){
    return (<table className={props.b}>
        
            <tbody>
                <tr>
                    <td><Mycontour /> </td>
                    <td><Mycontour /></td>
                    <td><Mycontour /></td>
                </tr>
                <tr>
                    <td><Mycontour /> </td>
                    <td><Mycontour /></td>
                    <td><Mycontour /></td>
                </tr>
                <tr>
                    <td><Mycontour /> </td>
                    <td><Mycontour /></td>
                    <td><Mycontour /></td>
                </tr>
            </tbody>
            </table>);
}

/*<tbody>
    for (var i=0; i < objects.length; i++) {
        <ObjectRow obj={objects[i]} key={i}>
    } 
</tbody>

<tbody>
    {objects.map(function(object, i){
        return <ObjectRow obj={object} key={i} />;
    })}
</tbody>*/