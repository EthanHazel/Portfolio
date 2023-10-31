import './button.css'

export default function Button(props) {
    return (
        <a className={'button ' + props.color} href={props.href} title={props.label}>
            {props.label || props.children}
        </a>
    )
}

// Such a needed component, good job Ethan