import React from 'react';
import TextField from '@material-ui/core/TextField';
import { CenterDiv } from './Styled';
import { addNewWord } from './../Utils/API';
import { validateWord } from './../Utils';

export default class NewWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
    }
    handleTextField(e) {
        this.setState({
            word: e.target.value
        });
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            const word = this.state.word;
            if (validateWord(word)) {
                addNewWord(this.state.word).then(data => {
                    if (data) {
                        alert(data);
                    }
                })
            }
        }
    }
    render() {
        return <CenterDiv onKeyPress={this.handleKeyPress.bind(this)}>
            <h2>Add a new word to the 'dictionary'</h2>
        <TextField
            id='wordTextField'
            label='Word'
            className='wordTextField'
            value={this.state.word}
            onChange={this.handleTextField.bind(this)}
        />
        <div>
        </div>
    </CenterDiv>;
    }
}