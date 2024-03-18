import logo from '../assets/img/quickremitlogo.png'
import logoWhite from '../assets/img/quickremitlogo_white.png'

const Logo = ({ iswhite = false }) => {
    return (
        <div className="flex items-center space-x-1.5">
            <img src={iswhite ? logoWhite : logo} alt="QuickRemit Logo" className="w-28" />
        </div>
    )
}

export default Logo