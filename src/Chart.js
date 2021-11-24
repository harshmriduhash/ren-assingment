import React from 'react'
import CompareIcon from './CompareIcon'
import FullscreenIcon from './FullscreenIcon'
import Graph from './Graph'

const Chart = () => {
    return (
        <>
            <div className='actions-time'>
                <nav className='clearfix menu-nav'>
                    <div className='actions clearfix'>
                        <a  href="#">
                            <FullscreenIcon/>
                            <p>Full Screen</p>
                        </a>
                        <a href="#">
                            <CompareIcon/>
                            <p>Compare</p>
                        </a>
                    </div>
                    <ul className='time clearfix'>
                        <li><button>1d</button></li>
                        <li><button>3d</button></li>
                        <li><button className='activeTime'>1w</button></li>
                        <li><button>1m</button></li>
                        <li><button>6m</button></li>
                        <li><button>1y</button></li>
                        <li><button>max</button></li>
                        
                    </ul>
                </nav>
            </div>
            <Graph/>
        </>
    )
}

export default Chart
