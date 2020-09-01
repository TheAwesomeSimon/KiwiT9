import React from 'react';
import { BigDiv, SmallDiv, Wrapper } from './Styled';

export default class ShowMore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expand: true,
            display: {
                display: 'none',
            }
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        const containerHeight = document.getElementById(`container${this.props.id}`).scrollHeight;
        const documentHeight = window.innerHeight;
        const height = containerHeight / documentHeight * 100
        if (height > 55) {
            this.setState({
                expand: false,
                height: height
            });
        } else {
            this.setState({
                display: {
                    display: 'none',
                },
                height: height
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.rendertarget !== prevProps.rendertarget && prevState.expand !== this.state.expand) {
            this.setState({
                expand: true,
            });
        } 
        const containerHeight = document.getElementById(`container${this.props.id}`).scrollHeight;
        const documentHeight = window.innerHeight;
        const height = containerHeight / documentHeight * 100;
        if ((prevState.height !== height )) {
            if (height > 55) {
                this.setState({
                    expand: true,
                    height: height,
                    display: {
                        display: 'initial',
                    }
                });
            } else {
                this.setState({
                    display: {
                        display: 'none',
                    },
                    height: height,
                    expand: true
                })
            }
        } 
    }
    handleClick() {
        this.setState({
            expand: !this.state.expand,
        });
    }
    render() {
        console.log(this.props.id, this.state.display);
        return <Wrapper>
            {this.state.expand ? <div>
                <h6 style={this.state.display} className='smallLink' onClick={this.handleClick}>Show Less</h6>
                <BigDiv id={`container${this.props.id}`}>
                    {this.props.rendertarget}
                </BigDiv>
            </div> : <div>
                    <h6 className='smallLink' onClick={this.handleClick}>Show More</h6>
                    <SmallDiv id={`container${this.props.id}`}>
                        {this.props.rendertarget}
                    </SmallDiv>
                </div>}
        </Wrapper>
    }
}