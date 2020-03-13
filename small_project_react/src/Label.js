import React from 'react'

function Label (props) {

    const onClickItem = (event) => {
        console.log(event);
        window.location.href = `./menu/${props.urutan}`
    }

    return (
        <div>
            <span
                onClick={onClickItem}
                className={props.urutan % 2 === 1 ? 
                "badge badge-primary" : "badge badge-success"}>ini Label </span>
            <br />
        </div>
    )
}
export default Label;