import React from 'react';
import Article from './Article'

class News extends React.Component {
    renderNews = () => {
        const {data} = this.props;
        let newsTemplate = null;
  
        if (data.length) {
            newsTemplate = data.map(function (item) {
                return <Article key={item.id} data={item} />;
            });
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>;
        }
        return newsTemplate;
    }
    render() {
        const {data} = this.props;
        return (
            <div className="news">
                {this.renderNews()}
                {
                    data.length ? (<strong className={"news-count"}>Всего новостей: {data.length}</strong>) : null
                }
            </div>
        );
    }
}

export default News;