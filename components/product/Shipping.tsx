import {faUndo} from '@fortawesome/free-solid-svg-icons/faUndo';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons/faPhoneVolume';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const shippingInfo = [
	{id: 1, icon: faCalendarAlt, text: 'Extended warranty for 10 days.'},
	{id: 2, icon: faUndo, text: 'If you want to exchange second hand phones purchased from the shop within (1) week, you can exchange them with 10% off.If you want to resell, you can buy it again with 15% off.(Not including new phones)'},
	{id: 3, icon: faPhoneVolume, text: 'Customer support line 09 5343769,09 984250942'},
];

export default function ProductShipping() {
	return (
		<div className='product-page__shipping'>
			{shippingInfo.map(row => (
				<div className='product-page__shipping-row' key={row.id}>
					<span className='product-page__shipping-icon'>
						<FontAwesomeIcon icon={row.icon} size='2x' />
					</span>
					{row.text}
				</div>
			))}
		</div>
	);
}
