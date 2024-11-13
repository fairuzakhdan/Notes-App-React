import React from "react";
import InputNotes from "../Elements/input";
import TextArea from "../Elements/TextArea";
import Button from "../Elements/Button";

class FormNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
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
        <form action="" className="form-notes">
            <InputNotes type="text" name="title" placeholder="Ini adalah judul ...." value={this.state.title} onChange={this.onTitleHandler}/>
           <TextArea name="body" placeholder="Tuliskan Catatanmu di sini ..." rows="10" value={this.state.body} onChange={this.onBodyHandler}/>
           <Button fill="Buat"/>
        </form>
    )
  }
}

export default FormNotes;
