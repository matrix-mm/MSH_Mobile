import Link from 'next/link';
import logoImg from '../../assets/logo.svg';

export default function FooterAbout({companyTitle}: {companyTitle?: string}) {
	const title = companyTitle || '© MSH Mobile';
	return (
		<>
			{ <div className='page-footer__logo'>
				<Link href='/'>
					<a>
					{<img src={"/logo.png"} alt={'MSH Mobile Shop'} width={logoImg.width} height={logoImg.height} />}
					</a>
				</Link>
			</div> }
			<div className='page-footer__company-info'>
				<p className='title'>{title}</p>
			</div>
			<div className='page-footer__disclaimer'>
			အခါကြီးရက်ကြီးများမှအပ ပိတ်ရက်မရှိနေ့စဉ်ဆိုင်ဖွင့်ထားပါသည်။
				မြန်မာပြည်အနှံ့အိမ်အရောက်ပို့စနစ်အပြင်ကားဂိတ်အရောက်ပို့စနစ်လည်းရှိပါတယ်ဗျ။
			ချမ်းသာကိုယ်စိတ်ရှိကြပါစေလုပ်သမျှကိုင်သမျှဆန္ဒပြည့်ကြပါစေ..ဆုတောင်းပေးလိုက်ပါတယ်
			</div>
		</>
	);
}
