import {useEffect} from 'react'
import { MdEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';


function CardItem(props) {
    useEffect(() => {
        AOS.init({duration: 800});
    }, []);
    return (
        <li className='cards__item' data-aos="fade-up">
            <a
            href={props.path}
            className='cards__item__link'
            target="_blank"
            rel="noopener noreferrer"
            >
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt="alt" className='cards__item__img'/>
                </figure>
                <div className='cards__item__info'>
                <h5 className='cards__item__text'>
  {props.text}
</h5>
<div style={{ textAlign: 'center', marginTop: '8px', color: 'white'}}>
  <MdEmail size={28} />
</div>
                </div>
            </a>
        </li>
    );
}

export default CardItem;