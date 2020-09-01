import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Home extends React.Component {
    componentDidMount() {
        document.title = 'Home';
    }
    render() {
        return (
            <div>
                <p>Welcome to the very basic app, that converts numbers to strings. To learn more about the T9, check out <a href='https://en.wikipedia.org/wiki/T9_(predictive_text)' target='_blank'>wikipedia.</a></p>
                <p>In the upper left corner, you can see the Home button. Wherever you are on this page, it will take you back here.</p>
                <p>From here, you can either <Link to='/decode' >decode numbers</Link> or reverse the process and <Link to='/encode' >encode words.</Link></p>
                <p>Finally, if you are not satisfied with the dictionary - word bank I found somewhere on the internet, you can <Link to='/addWord' >add new words</Link>.</p>
            </div>
        )
    }
}

export default withRouter(Home);