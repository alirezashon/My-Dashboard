import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import Accordion from '../formcomponents/Accordion'
import Editor from '../formcomponents/Editor'
import Chips from '../formcomponents/Chips'
import Input from '../formcomponents/Input'

export default function index(){
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);
    
    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-arrow-right" />
            </button>
        </React.Fragment>
    );

    return (
        <div>
            <div className="card">
                <Sidebar  visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                    <h3>لیست ایمیل ها</h3>
                    <Button icon="pi pi-th-large" onClick={() => setVisibleFullScreen(true)} className="mr-2 bg-success border border-white" />

                    <Accordion props={{label:"Alireza Akbari" ,content:"please create access to programing world for me :)"}}/>
                    <Accordion props={{label:"Pesar Khale" ,content:"every one will know soon"}}/>
                    <Accordion props={{label:"Mohamad Ali Sharafian" ,content:"God is Great!!!"}}/>

                </Sidebar>

              
                <Sidebar style={{height:"333px"}} visible={visibleFullScreen} fullScreen onHide={() => setVisibleFullScreen(false)}>
                   <div className='send-mail-btns'>
                     <Input props={{width:444,name:"sub"}}/>
                     <Chips props={{width:777, name:"TO"}}/>
                   </div>
                <Editor/>
                </Sidebar>

              

                <Button  onClick={() => setVisibleLeft(true)} className="mr-2 bg-success border border-white" >
                <i className="pi pi-envelope mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '1.7rem', color:"white" }}><Badge value="7" className='bg-danger text-white'></Badge></i>

                </Button>
            </div>
        </div>
    )
}
                 