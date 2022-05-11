import {ReactComponent as GithubIcon} from 'assets/img/githubsvg.svg'
import './style.css'

function Navbar(){
 return(
    <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/FelipeAxel</p>
                </div>
            </a>
        </div>
    </nav>
</header>
 )
}
export default Navbar