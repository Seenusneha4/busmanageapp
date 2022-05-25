import React, { useState } from 'react'
import Header from './Header'

const Addbus = () => {
    var[route,setroute]=useState("")
    var[busname,setbusname]=useState("")
    var[busregno,setbusregno]=useState("")
    var[ownername,setownername]=useState("")
    var[contactno,setcontactno]=useState("")
    const subdata=()=>{
        const data={"route":route,"busname":busname,"busregno":busregno,"ownername":ownername,"contactno":contactno}
        console.log(data)
    }
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label for="" className="form-label">Route</label>
              <input onChange={(a)=>{setroute(a.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Bus Name</label>
                <input onChange={(a)=>{setbusname(a.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Bus Reg No</label>
                <input onChange={(a)=>{setbusregno(a.target.value)}} type="text" className="form-control"/>
               
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Owner Name</label>
                <input onChange={(a)=>{setownername(a.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Contact No</label>
                <input onChange={(a)=>{setcontactno(a.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subdata} className="btn btn-success">SUBMIT</button>

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addbus