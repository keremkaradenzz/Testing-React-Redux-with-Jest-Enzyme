import {Component} from "react";
import Header from "./component/header";
import Headline from "./component/headline";
import SharedButton from "./component/button";
import ListItem from "./component/listItem";
import {connect} from 'react-redux'
import './app.scss'
import {fetchPosts} from "./actions";


const tempArr = [{
    fName: 'kerem',
    lName: 'karadeniz',
    age: 25,
    status: true
}]

class App extends Component {
    constructor(props) {
        super(props);
        this.fetch = this.fetch.bind(this);
    }

    fetch() {
        this.props.fetchPosts()
    }

    render() {
        const {posts} = this.props
        const configButton = {
            buttonText: 'Get posts',
            emitEvent: this.fetch
        }
        return (
            <div className="App" data-test="appComponent">
                <Header/>
                <section className="main">
                    <Headline header="Title" desc="Click the button to render posts!" tempArr={tempArr}/>
                    <SharedButton {...configButton} />
                    {posts.length && <div>
                        {
                            posts.map((post, index) => {
                                const {title, body} = post
                                const configListItem = {
                                    title,
                                    desc: body
                                }
                                return (
                                    <ListItem key={index} {...configListItem}/>
                                )
                            })
                        }
                    </div>}
                </section>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps, {fetchPosts})(App);
