import React from "react";

export default function ListItem(props) {
    return(
        <div className={props.obj.completed && "completed"}>
            <p>{props.obj.name}
            <button class="done" onClick={() => props.onDone(props.obj)}>Mark as Done</button>
            <button class="delete" onClick={() => props.onDelete(props.obj)}>Delete</button>
            </p>
        </div>
    )
}