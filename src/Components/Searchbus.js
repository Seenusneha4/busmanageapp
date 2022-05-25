import React, { useState } from 'react'
import Header from './Header'

const Searchbus = () => {
    var[route,setroute]=useState("")
    const subdata=()=>{
        const data={"route":route}
        console.log(data)
    }
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label for="" className="form-label">Route</label>
              <input onChange={(a)=>{setroute(a.target.value)}} type="text" className="form-control"/>
            </div>
           
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subdata} className="btn btn-success">SEARCH</button>

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchbus