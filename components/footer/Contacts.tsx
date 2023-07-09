import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function FooterContacts() {
	return (
		<>
			<h3 className='page-footer__header'>Contact Us</h3>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faWhatsapp}/>
				</span>
				<a className='link' href='tel:+9595343769'>09 5343769</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faMapMarkerAlt}/>
				</span>
				<a className='link' href='https://goo.gl/maps/w74xQWv5ieADyDRv8'>အထက (၁)လမ်း၊ ရန်ကင်းဈေးအနီး၊ ရန်အောင်ရပ်၊မကွေးမြို့။</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faClock}/>
				</span>
				9:00am &mdash; 6:00pm
			</p>
		</>
	);
}