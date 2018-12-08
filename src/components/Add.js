import React from 'react';

class Add extends React.Component {
    state = {
        name: "",
        text: "",
        bigText: "",
        agree: false
    };
    onBtnClickHandler = (e) => {
        e.preventDefault();
        const {name, text, bigText} = this.state;
        this.props.onAddNews({id: +new Date(), author: name, text, bigText});
    }
    handleChange = (e) => {
        const {id, value} = e.currentTarget;
        this.setState({[id]: value});
    }
    handleCheckboxChange = (e) => {
        this.setState({agree: e.currentTarget.checked});
    }
    validate = () => {
        const {name, text, agree} = this.state;
        if (name.trim() && text.trim() && agree) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        const {name, text, bigText} = this.state;
        return (
            <form className="add">
                <input type="text" onChange={this.handleChange} className="add-author" placeholder="Ваше имя" value={name} />
                <textarea onChange={this.handleChange} className="add-text" placeholder="Текст новости" value={text}></textarea>
                <textarea id="bigText" onChange={this.handleChange} className="add-text" placeholder="Текст новости подробно" value={bigText}></textarea>
                <label className="add-checkrule">
                <input type="checkbox" onChange={this.handleCheckboxChange} />Я согласен с правилами
                </label>
                <button className="add-btn" onClick={this.onBtnClickHandler} disabled={!this.validate}>Показать alert</button>
            </form>
        )
    }
}

export default Add;