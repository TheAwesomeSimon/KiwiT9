import React from 'react';
import styled from 'styled-components'

const BigDiv = styled.div`
    display: block;
`;

const SmallDiv = styled.div`
    height: 20vh;
    display: block;
    overflow:hidden;
`;

export default class ShowMore extends React.Component {
    constructor(props) {
        super(props);
        
        this.state ={
            expand: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        const containerHeight = document.getElementById('container').clientHeight;
        const documentHeight = window.innerHeight;
        const height = containerHeight / documentHeight * 100;
        if(height > 30) {
            this.setState({
                expand: false
            });
        } else {
            this.setState({
                display: {
                    display: 'block'
                }
            })
        };
    }
    handleClick() {
        this.setState({
            expand: !this.state.expand,
        });
    }
    render() {
        return this.state.expand ? <div>
            <BigDiv id='container'>
                {this.props.rendertarget}
            </BigDiv>
            <h6 style={this.state.display} className='smallLink' onClick={this.handleClick}>Show Less</h6>
        </div> : <div>
            <SmallDiv id='container'>
                {this.props.rendertarget}
            </SmallDiv>
            <h6 className='smallLink' onClick={this.handleClick}>Show More</h6>
        </div>
    }
}