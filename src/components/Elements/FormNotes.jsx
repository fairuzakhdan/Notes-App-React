import React from "react";
import InputNotes from "./input";
import TextArea from "./TextArea";
import Button from "./Button";

class FormNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleHandler = this.onTitleHandler.bind(this);
    this.onBodyHandler = this.onBodyHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    if(this.state.title.length > 50) {
      alert('Judul tidak boleh lebih dari 50 karakter')
    } else {
      this.props.addNotes(this.state)
      this.setState({
        title: '',
        body: '', 
      });
    }
  }

  render() {
    return (
      <form className="form-notes" onSubmit={this.onSubmitHandler}>
        
        <InputNotes
          type="text"
          name="title"
          placeholder="Ini adalah judul ...."
          value={this.state.title}
          onChange={this.onTitleHandler}
        />
        <TextArea
          name="body"
          placeholder="Tuliskan Catatanmu di sini ..."
          rows="10"
          value={this.state.body}
          onChange={this.onBodyHandler}
        />
        <Button fill="Buat" clasName="btn-submit"/>
       
      </form>
    );
  }
}

export default FormNotes;
