import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>

        <div className='info'>
          <h1> job <span>tracking</span> app</h1>
          <p> 
           Lorem Ipsum is simply dummy text of the
           printing and typesetting industry. Lorem Ip
           sum has been the industry's standard dummy text ever since the 1500s, when an unk
            nown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
          
        </div>
        
        <img src={main} alt='job hunt' className='img main-img'/>
      </div>
    </Wrapper>
  )
}

export default Landing;