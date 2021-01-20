class Card extends React.Component
{


    constructor(props)
    {
        super(props)
        this.state={val:50}
    }

    mth=()=>
    {
        this.setState({val:this.state.val+10})
    }

    render()
    {
        return(

            <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box bg-gradient-success">
              <span className="info-box-icon">
                  <i className="far fa-thumbs-up"></i>
                  </span>
              <div className="info-box-content">
                <span className="info-box-text">Likes</span>
                <span className="info-box-number">{this.state.val}</span>
                <div className="progress">
                  <div className="progress-bar" ></div>
                </div>
                <span className="progress-description">
                  {this.props.val} Increase in 30 Days
                  <button onClick={this.mth} className='btn btn-info' >{this.state.val}</button>
                </span>
              </div>  
            </div>
          </div>

        )
    }
}


