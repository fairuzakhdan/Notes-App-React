import React from "react";

class InputNotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }

        this.onTitleHandler = this.onTitleHandler.bind(this)
        this.onBodyHandler = this.onBodyHandler.bind(this)
    }

    onTitleHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    }

    onBodyHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input type="text" name="title" id="title" placeholder="Ini adalah judul ...." value={this.state.title} onChange={this.onTitleHandler}/>
            <br />
            <textarea name="body" id="body" placeholder="Tuliskan Catatanmu di sini ..." value={this.state.body} onChange={this.onBodyHandler}></textarea>
            </form>
        )
    }
}

export default InputNotes;