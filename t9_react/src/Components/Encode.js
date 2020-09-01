import React from 'react';
import TextField from '@material-ui/core/TextField';
import { CenterDiv } from './Styled';
import { encode } from './../Utils/API';
import { Link, withRouter } from 'react-router-dom';
import { validateWord } from './../Utils';

class Encode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        };
    }
    handleTextField(e) {
        this.setState({
            word: e.target.value
        });
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            const word = this.state.word.toLowerCase();
            if (validateWord(word)) {
                encode(word).then(data => {
                    if (data) {
                        this.setState({
                            number: data
                        });
                    }
                });
            } else {
                alert('Check your input');
            }
        }
    }
    render() {
        return <CenterDiv onKeyPress={this.handleKeyPress.bind(this)}>
            <h2>Enter a word to be translated</h2>
            <TextField
                id='wordTextField'
                label='Word'
                className='wordTextField'
                value={this.state.word}
                onChange={this.handleTextField.bind(this)}
            />
            <div>
                {this.state.number ? <div><h2>Corresponding number to your word is: {this.state.number}</h2>
                    <button onClick={() => navigator.clipboard.writeText(this.state.number)}>Copy to clipboard</button>
                    <p>You can check the output and <Link to='/decode'>decode</Link> it back!</p>
                </div> : ''}
            </div>
        </CenterDiv>;
    }
}

export default withRouter(Encode);