import decoration from '../media/decoration.svg'
import './decoration.css'

export default function Decoration(){

    return <div className="decoration">
        <p>This is a decorative route.</p>
        <p>Many links will take you here.</p>
        <img src={decoration} alt='decoration'/>
    </div>
}