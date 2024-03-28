import { MdEmail } from 'react-icons/md';

function Footer() {
    return (
        <div id="contact" style={{ paddingBottom: '5px' }}>
            <div className='contact'>
                <p> <MdEmail size={20}/> contact(a)sarakitzing.se </p>
            </div>
            <p className='footer'>
                This portfolio was created with React 
                <br />
                © 2024 Sara Kitzing
            </p>
            <p className='footer'>Mockup templates designed by 
                <a className='link' href='https://www.freepik.com/' target="_blank"> Freepik</a>
            </p>
      </div>
    );
}

export default Footer;