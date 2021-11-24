import React from 'react'
import Grid from './Grid'
import Volume from './Volume'
import Fill from './Fill'
import Line from './Line'
import Hline from './Hline'
import Vline from './Vline'
const Plot = () => {
    return (
        <>
            <div className='graph-container'>
                <Grid/>
                <Volume/>
                <Fill/>
                <Line/>
                <Hline/>
                <Vline/>
                <h3 className='point'>64,850.35</h3>
                <h3 className='atMax'>63,179.71</h3>
                
            </div>
        </>
    )
}

export default Plot
