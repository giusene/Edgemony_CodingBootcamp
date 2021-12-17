
const RenderData = (props) => {
    return (
        <div>
            <p>{props.num} - {props.text} <a href={props.url} target='_blank' rel='noreferrer'>LINK</a></p>
        </div>
    )
}

export {RenderData} 