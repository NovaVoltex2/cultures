import React from 'react'
import "./bakweri.css"
import BakweriAttire from '../../components/images/bakweriAttire.jpg'

const AttireBakweri = () => {
	return (
		<>
			<div className='col-2'>
				<p>The traditional attire of the Bakweri is similar to that of most, if not all, the coastal ethnic groups of Cameroon such as the Duala. It consists of the Sanja for the men and the Kabba for women. While the exact origin of this attire is unknown, we can assume that it appeared with the advent of European traders on the Cameroon coast who exchanged loin clothes for food stuffs
					According to Daniel Matute: "The Bakweri man in the village dresses in a long waist cloth called Sanja tied round the waist with two overlapping edges by the sides called masu'u topped by a long sleeve shirt, preferably white, with a head tie or scarf around the neck. Usually a hat may be worn if the man so desires. The Sanja is stitched according to the size of the individual but usually three fathoms is a good sized Sanja. Some men would prefer a coat to go along with the attire."
					With regards to women, Matute states that: "A typical traditional attire worn by the Bakweri women is a voluminous, clocked dress popularly known as “Kabba”. This attire goes with a head tie to match with the dress. The women are highly respected for their high standard of dress making. Exposure of the feminine legs by wearing bikinis or a pair of shorts is highly discouraged."
					According to Bender: "The original native dress is a very simple affair… It consists of a small apron made of fibre or grass and is girded about the loins. A still more simple dress is worn by women and girls only - a braided fibre belt about three inches wide."
				</p>
				<div className='image-container'>
					<img src={BakweriAttire} alt="" className='BakweriAttire' />
				</div>
			</div>
		</>
	)
}

export default AttireBakweri