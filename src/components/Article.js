import React from 'react';

class Article extends React.Component {
    state = {
        visible: false
    }
    hendleReadMoreClick = (e) => {
        e.preventDefault();
        this.setState({visible: true});
    }
    render() {
        const {author, text, bigText} = this.props.data;
        const {visible} = this.state;
        return (
            <div className="article">
                <p className="news-author">{author}:</p>
                <p className="news-text">{text}</p>
                {!visible && <a onClick={this.hendleReadMoreClick} href="#readmore" className="news-readmore">Подробнее</a>}
                {visible && <p className="news-big-text">{bigText}</p>}
            </div>
        );
    }
}

export default Article;