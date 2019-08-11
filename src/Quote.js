import React from 'react';
import './quote.css';

class Quote extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render () {
        return(
            <div className='quote-container'>
                <h3 className='quote'>inspirtaional quote</h3>
                <button class='btn'>Next Quote</button>
            </div>
        )
    }
}

export default Quote;