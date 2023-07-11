import {IProduct} from 'boundless-api-client';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import ProductsList from '../components/ProductsList';
import MainLayout from '../layouts/Main';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
// import VerticalMenu from '../components/VerticalMenu';
import {IMenuItem} from '../@types/components';
import SwiperSlider from '../components/SwiperSlider';
import mobileSlider1Img from '../assets/mobile-slider-1.png';
import mobileSlider2Img from '../assets/mobile-slider-2.png';
// import CoverTextInCenter from '../components/CoverTextInCenter';
// import bgImg from '../assets/cover-bg.jpeg';
// import bgPortraitImg from '../assets/cover-bg-portrait.jpg';
import ProductsSliderByQuery from '../components/ProductsSliderByQuery';
import TextWithIcons from '../components/TextWithIcons';
import {faBug} from '@fortawesome/free-solid-svg-icons/faBug';
import {faShieldAlt} from '@fortawesome/free-solid-svg-icons/faShieldAlt';
import {faSmile} from '@fortawesome/free-solid-svg-icons/faSmile';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Reviews from '../components/Reviews';
import {IBasicSettings} from '../@types/settings';

import reviewWoman1 from '../assets/review-woman-1.jpg';
import reviewMan1 from '../assets/review-man-1.jpg';
import reviewMan2 from '../assets/review-man-2.jpg';

export default function IndexPage({products, mainMenu, footerMenu, basicSettings}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu} basicSettings={basicSettings}>
			<div className='container-xxl'>
				<MainPageSlider />
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>MSH Mobile Shop</h1>
				<ProductsList
					products={products}
					className={'page-block'}
					itemClassName={'products__item_4-in-row'}
				/>
			</div>
			<TextWithIcons
				columns={[
					{
						icon:  <FontAwesomeIcon icon={faBug} className={'text-with-icons__icon'} />,
						title: 'ပြန်လည်ရောင်းချလိုပါက၁၅% Offပြီးပြန်လည်ဝယ်ယူပေးပါသည်။',
						comment: '(အသစ်ဖုန်းများမပါဝင်ပါ)..'
					},
					{
						icon:  <FontAwesomeIcon icon={faShieldAlt} className={'text-with-icons__icon'} />,
						title: 'အာမခံကာလ ကတော့(၁၀)ရက် ရရှိမှာဖြစ်ပီး',
						comment: 'ဆိုင်မှဝယ်ယူသွားသော Second ဖုန်းများအား(၁)ပါတ်အတွင်း ပြန်လည်လဲလှယ်လိုပါက ၁၀%Offနှင့်လဲလှယ်ပေးပီး.'
					},
					{
						icon:  <FontAwesomeIcon icon={faSmile} className={'text-with-icons__icon'} />,
						title: '*ရောင်းဝယ်/အလဲ/အထပ် အဆင်ပြေအောင်လုပ်ပေးနေပါသည်။*',
						comment: '(မည်သည့် Secondဖုန်းဝယ်သူမဆို မှန်မကွဲလက်ဆောင် /တဘက်လက်ဆောင် ရရှိမှာဖြစ်ပါတယ်..)'
					},
				]}
				fullWidth={true}
				className={'page-block'}
			/>
			<div className='container-xxl'>
				<ProductsSliderByQuery
					query={{collection: ['main-page'], sort: 'in_collection'}}
					title={'Special offers:'}
					wrapperClassName='page-block'
				/>
				<div className={'page-block'}>
					<h2 className={'text-center mb-4'}>Our customers love us:</h2>
					<Reviews
						reviews={[
							{
								image: <img src={reviewWoman1.src} className={'reviews__img'} />,
								title: 'Amanda',
								jobTitle: 'CEO reseller corp',
								comment: 'I like working with the wholesales team. We are thankful for your great service!'
							},
							{
								image: <img src={reviewMan1.src} className={'reviews__img'} />,
								title: 'Jack',
								jobTitle: 'Frequent buyer',
								comment: 'I like the quality and the quick shipping.'
							},
							{
								image: <img src={reviewMan2.src} className={'reviews__img'} />,
								title: 'Dave',
								jobTitle: 'Founder at Startup',
								comment: 'I love how the things are going!'
							},
						]}
					/>
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IIndexPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});
	const {products} = await apiClient.catalog.getProducts({collection: ['main-page'], sort: 'in_collection'});
	const basicSettings = await apiClient.system.fetchSettings(['system.locale', 'system.currency']) as IBasicSettings;

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			products,
			basicSettings,
			...menus
		}
	};
};

interface IIndexPageProps {
	products: IProduct[];
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
	basicSettings: IBasicSettings;
}

function 	MainPageSlider() {
	const slides = [
		{
			'img': mobileSlider1Img.src,
			'link': '',
			'caption': '"The perfect companion for your digital lifestyle" as calls it "the mobile phone"',
			'captionPosition': 'bottom',
			'useFilling': true,
			'fillingColor': '#000000',
			'fillingOpacity': 0.40
		},
		{
			'img': mobileSlider2Img.src,
			'link': '',
			'caption': 'အခါကြီးရက်ကြီးများမှ အပ ပိတ်ရက်မရှိ နေ့စဉ် ဆိုင်ဖွင့်ထားပါသည်။',
			'captionPosition': 'bottom',
			'useFilling': true,
			'fillingColor': '#000000',
			'fillingOpacity': 0.4
		}
	];

	return (
		<SwiperSlider
			showPrevNext
			// pagination='progressbar'
			size={'large'}
			slides={slides}
			className={'mb-4'}
		/>
	);
}
