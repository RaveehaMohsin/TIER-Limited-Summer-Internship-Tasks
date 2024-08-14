import React, { useState } from 'react';
import './home.css';
import Addblog from './Add Blog/addblog';
import Allblogs from './View Blog/allblogs';

export default function Home() {
    const [view, setView] = useState('addblog');

    const handleEvent = (text) => {
        return () => setView(text);
    };



    return (
        <div>
            <h3 style={{ textAlign: 'center', marginTop: '2%', color: 'InactiveCaptionText' }}>
                Echoes of Inspiration: Your Blog Awaits
            </h3>
            <div className='btnclass'>
                <button className='btn btn-info' onClick={handleEvent('addblog')}>Add Blog</button>
                <button className='btn btn-primary' onClick={handleEvent('viewblog')}>View all Blogs</button>
            </div>
            {view === 'addblog' ? <Addblog /> :<Allblogs /> }
        </div>
    );
}


