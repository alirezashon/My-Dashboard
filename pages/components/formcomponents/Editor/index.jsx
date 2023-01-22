import React, { useState } from 'react';
import { Editor } from 'primereact/editor';

export default function index(){
    const [text1, setText1] = useState('');

  

    return (
        <div>
            <div className="card">
                <Editor formats={{TextDirection:"rtl"}} style={{direction:'rtl',  height: '320px' , border:'solid 1px #499b01'}} value={text1} onTextChange={(e) => setText1(e.htmlValue)} />
            </div>
        </div>
    );
}
                 