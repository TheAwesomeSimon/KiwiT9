import React from 'react';
import ShowMore from './ShowMore';
import TextField from '@material-ui/core/TextField';
import { getWords, getValidWords } from './../Utils/API';
import { HomeDiv, InlineDiv, Test } from './Styled';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            words: [],
            validWords: []
        }
    }
    handleTextField(e) {
        this.setState({
            number: e.target.value
        })
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            const number = this.state.number;
            if (number.length !== 0) {
                if (number.length > 10) {
                    alert('You have chosen a long number, the back-end will take a while... hang on')
                }
                getWords(number).then(data => {
                    if (data) {
                        this.setState({
                            words: data
                        });
                    }
                });
                getValidWords(number).then(data => {
                    if (data) {
                        this.setState({
                            validWords: data
                        });
                    }
                });
            } else {
                alert('Enter a valid search term and try again');
            }
        }
    }
    render() {
        return (
            <HomeDiv onKeyPress={this.handleKeyPress.bind(this)}>
                <h2>Enter a number to be translated</h2>
                <Test>
                    <TextField
                        id='numberTextField'
                        label='Number'
                        className='numberTextField'
                        type='number'
                        value={this.state.number}
                        onChange={this.handleTextField.bind(this)}
                    />
                </Test>
                <InlineDiv>
                    <div>
                        {this.state.words.length ? <div id='1'><h2>These are the possible combinations:</h2><ShowMore id='1' rendertarget={<div>{this.state.words.map((word, index) => {
                            return <p key={`a${index}`}>{word}</p>
                        })}</div>} /></div> : ''}
                    </div>
                    <div>
                        {this.state.validWords.length ? <div id='2'><h2>...and these were also found in a dictionary:</h2><ShowMore id='2' rendertarget={<div>{this.state.validWords.map((word, index) => {
                            return <p key={`b${index}`}>{word}</p>
                        })}</div>} /></div> : ''}
                    </div>
                </InlineDiv>
            </HomeDiv>
        )
    }
}