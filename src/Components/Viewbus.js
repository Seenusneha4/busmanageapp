import React from 'react'
import Header from './Header'

const Viewbus = () => {
    var buslist=[{"route":"tvm to kollam","busname":"ABC","busregno":"KL01A","ownername":"Akhil","contactno":"1234567890"},
                {"route":"tvm to konni","busname":"XYZ","busregno":"KL01S","ownername":"Divin","contactno":"0987654321"},
                {"route":"kzy to ranni","busname":"QWE","busregno":"KL01D","ownername":"Akhila","contactno":"1234509876"},
                {"route":"pta to thiruvalla","busname":"RTY","busregno":"KL01F","ownername":"Revathy","contactno":"6789012345"},
                {"route":"plkd to pta","busname":"UQW","busregno":"KL01G","ownername":"Reny","contactno":"0192837465"}
]
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ROUTE</th>
      <th scope="col">BUS NAME</th>
      <th scope="col">BUS REG NO</th>
      <th scope="col">OWNER NAME</th>
      <th scope="col">CONTACT NO</th>
    </tr>
  </thead>
  <tbody>
      {buslist.map((value,key)=>{return <tr>
   
      <td>{value.route}</td>
      <td>{value.busname}</td>
      <td>{value.busregno}</td>
      <td>{value.ownername}</td>
      <td>{value.contactno}</td>
    </tr>
  })}
  </tbody>
</table>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewbus