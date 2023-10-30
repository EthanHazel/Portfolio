import './button.css'

export default function Button(props) {
    return (
        <a className={'button ' + props.color} href={props.href}>
            {props.label || props.children}
        </a>
    )
}