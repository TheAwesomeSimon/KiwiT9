import { getWords, getValidWords } from './../Utils/API';
import React from 'react';
import ShowMore from './ShowMore';
import TextField from '@material-ui/core/TextField';


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
                alert('Enter a search term and try again');
            }
        }
    }
    render() {
        return (
            <div onKeyPress={this.handleKeyPress.bind(this)}>
                <TextField
                    id='numberTextField'
                    label='Number'
                    className='numberTextField'
                    type='number'
                    value={this.state.number}
                    onChange={this.handleTextField.bind(this)}
                />
                {this.state.words.length ? <ShowMore rendertarget={<div>{this.state.words.map((word, index) => {
                    return <p key={`a${index}`}>{word}</p>
                })}</div>} /> : '' }
                {this.state.validWords.length ? <ShowMore rendertarget={<div>{this.state.validWords.map((word, index) => {
                    return <p key={`b${index}`}>{word}</p>
                })}</div>} /> : '' }
            </div>
        )
    }
}