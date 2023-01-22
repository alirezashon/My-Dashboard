import "bootstrap/dist/css/bootstrap.css"
import { useEffect } from 'react'



export default function index(){
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])

  let tableHead = ["تیکت ها","اختصاص داده شده ها","در انتظار تایید","بسته شده ها"]
  
  let data = {1:["32","29","3","22"],2:["62","49","7","11"],3:["62","49","7","1"],4:['a','b']}
  const TH = []
  const TD =[]
 Object.keys(data).forEach((H) => {TH.push(H) })
 Object.values(data).forEach((D) => {TD.push(D) })
console.log(TD[0])
  
  // for (let i= 0; i < data.length; i++) {
  //   const element = data[i];
  //   Object.keys(element).forEach((r) => {rows.push(r) });
    // Object.values(element).forEach((p) => {praghraphs.push(p) });
//  }

    return(
    <>
   <div className="board-box">
   <table class="table">
    <thead>
      <tr>
        {
        tableHead.map((title)=>(
          <th scope="col">{title}</th>
        ))
        }
      </tr>
    </thead>
    <tbody>
     {
       TH.map((rowHead)=>(
        <tr>
        
        <th scope="row">{rowHead}</th>
       {
         TD.map((row)=>(
           <td>{row}</td>
        ))
       }
      </tr>
          ))
         }   
      {/* <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">7</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr> */}
    </tbody>
    </table>

   </div>
    </>
    )
}