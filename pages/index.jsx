import { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Chart from './components/charts/chart'
import PolarChart from './components/charts/Polar'
import SplitLayout from './components/SplitLayout'
import Profile from './components/Profile'
import Drawer from './components/Drawer'
import Notification from './components/Notification'
import Horizontal from './components/charts/Bar/Horizontal'
import Vertical from './components/charts/Bar/Vertical'
import MultiAxis from './components/charts/Bar/MultiAxis'
import Stacked from './components/charts/Bar/Stacked'
import Combo from './components/charts/Combo'
import Doughnut from './components/charts/Doughnut'
import LineBasic from './components/charts/Line/Basic'
import LineStyle from './components/charts/Line/LineStyle'
import LineMultiAxis from './components/charts/Line/MultiAxis'
import Pie from './components/charts/Pie'
import Radar from './components/charts/Radar'
export default function index(){
useEffect(()=>{
  import("bootstrap/dist/js/bootstrap");
},[])

 
const Nav = dynamic(() => import('./components/Nav'), {
  suspense: true,
})

  return(
    <>
 <Suspense fallback={`Loading...`}>
    <Nav/>
    </Suspense>

    <div className='first-row'>
    <div className='mail-date-box'>
    <Drawer/>
    <Notification/>
    </div>
    <Profile/>
    </div>
    
      {/* <div className='chart-boxes'>
      <div className='chart-box'>
     <PolarChart/>
      </div>
      <div className='chart-box'>
     <PolarChart/>
      </div>
    <div className='chart-box'>
    <Chart/>
      </div>
      </div> */}
      
      <div className='first-row'>
    <div className='chart-box'>
    <Horizontal/>
      </div>
  
      <div className='chart-box'>
    <MultiAxis/>
      </div>

      <div className='chart-box'>
    <Stacked/>
      </div>
</div>
<SplitLayout/>


<div className='first-row'>
    <div className='chart-box'>
    <Vertical/>
      </div>
  
      <div className='chart-box'>
    <Combo/>
      </div>

      <div className='chart-box'>
    <Doughnut/>
      </div>
</div>

<SplitLayout/>

<div className='first-row'>
    <div className='chart-box'>
    <LineBasic/>
      </div>
  
      <div className='chart-box'>
    <LineMultiAxis/>
      </div>

      <div className='chart-box'>
    <Pie/>
      </div>
</div>
<SplitLayout/>


<div className='first-row'>
    <div className='chart-box'>
    <Radar/>
      </div>
  
      <div className='chart-box'>
    <PolarChart/>
      </div>

      <div className='chart-box'>
    <Doughnut/>
      </div>
</div>
    <SplitLayout/>
    </>
  )
}