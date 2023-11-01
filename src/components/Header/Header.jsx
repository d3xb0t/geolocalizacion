import './Header.css'
import { ClarityAvatarSolid, LogosReact, MaterialSymbolsForum } from '../../assets/Icons.jsx'

export const Header = () => {
    return (
        <div className='header'>
            <ClarityAvatarSolid />
            <LogosReact />
            <MaterialSymbolsForum />
        </div>
    )
}