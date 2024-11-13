import React from "react"
import NoteItem from "../Elements/NoteItem"
import Button from "../Elements/Button"
import { getInitialData } from "../../utils"

class NotesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData()
        }
    }

    render() {
       return (
        <div>
            <NoteItem notes={this.state.notes} />
        </div>
    )
    }
}

export default NotesList