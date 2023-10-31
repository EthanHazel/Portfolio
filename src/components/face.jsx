import './face.css'

export default function Face(props) {
    return (
        <div className='faceContainer'>
            <img className='faceOverlay' src='../assets/photo_gradient_overlay.png' />
            <img className='faceImage' src={props.source} />
            <img className='faceBackground' src='../assets/photo_gradient.png' />
            <img className='faceBackgroundBlur' src='../assets/photo_gradient.png' />
        </div>
    )
}