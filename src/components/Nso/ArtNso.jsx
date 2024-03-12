import React from 'react'
import "../css/structuring.css"
import { n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11 } from "./ArtsImages"

const ArtNso = () => {
	const Art_contents = [
		{
			"info": "Mus’Art has been active in propagating the Nso’ cultural heritage. The museum named in memory of Nso’ carvers Daniel Kanjo Musa and his elder son John Yuniwo Musa has been at the forefront of promoting Nso’ traditional artistry and craftsmanship. This art and cultural institution by the Musa family opened her doors to the public on the 18th December, 1996. Mus’Art Gallery has a collection of over 400 objects most of which were created between 1970 and 2000. These varied and diverse objects range from bamboo work to wood carvings, basketry to pottery.",
			"image": n1
		},
		{
			"info": "The museum continues to acquire contemporary Cameroonian arts and crafts while maintaining a major focus on the Western Grass-fields region. This region is internationally renowned for having produced masterpieces of African art. Unfortunately these objects were appropriated by colonial missionaries and officers and removed from their place of origin to museums in Europe or the United States of America. Masterpieces of Grass-fields art are today in foreign museums and it is most likely they will never be returned. The statue of Ngonnso’ founder the Nso’ kingdom is presently kept in a museum in Germany. In Nso’ there is an outcry for this statue to be returned to its people.",
			"image": n2
		},
		{
			"info": "Mus’Art Gallery was created in part as to preserve in response to the loss of these precious objects so the art of the past is not lost to the region. Its mission is to support the arts and crafts of the Western Grass-fields and to highlight the excellence and diversity of regional artists, past and present, so these may become known nationally and internationally. We propose to do this by providing a source of information leading to a greater understanding and appreciation of the varied and diverse material culture of the peoples of the Cameroon Grass-fields as expressed through their art form.",
			"image": n3
		},
		{
			"info": "Nso’ being an integral part of the Grass-fields region, and the base of Mus’Art Gallery it is in fact logical that our museum should be a key player in the area of heritage preservation in Nso’. A research around Kumbo in 2008 raised a lot of concern. The artistic and cultural relics to be found in the lineage compounds seem to be quite recent. Where have all the old objects used by lineage heads gone to? Unless our family lineage (Shufaays and Faays) are properly schooled on ensuring that these objects are well catered for and preserved for posterity, nothing will be left in Nso’ in the next decade that links us to our past. Is this not a cause for concern?",
			"image": n4
		},
		{
			"info": "These are the type of things that Mus’Art Gallery wants to tackle. Education of the masses on the need to preserve artistic and cultural heritage remains top on our list of priorities. For several years, Mus’Art Gallery has been working closely with the philosophy department of the Government Bilingual High School (GBHS) Kumbo. If our students understand the need to protect and preserve artistic and cultural heritage, they will be in a better position to carry on the message home to their families and community.",
			"image": ""
		},
		{
			"info": "It is a gradual process, which takes time, commitment and resources to do so. In the past we also engaged school groups in our activities. Even nursery school kids have visited our museum. These kids grow up with that memory of the museum visit where they saw strange things; they learned were made or used by their parents, grandparents or forebears. Such a kid will definitely want to preserve such things if given the opportunity. It is a learning process which succeeds after a period of time.",
			"image": n5
		},
		{
			"info": "It is a gradual process, which takes time, commitment and resources to do so. In the past we also engaged school groups in our activities. Even nursery school kids have visited our museum. These kids grow up with that memory of the museum visit where they saw strange things; they learned were made or used by their parents, grandparents or forebears. Such a kid will definitely want to preserve such things if given the opportunity. It is a learning process which succeeds after a period of time.",
			"image": n6
		},
		{
			"info": "The art of Nso’ traditional wood sculpturing is fast disappearing. Most Nso’ renown carvers have died. Youngsters are unwilling to learn the art. Mus’Art Gallery is interested in a rebirth of Nso’ traditional wood sculpturing as well as other traditional art forms such as weaving, basketry, bamboo work, knitting of traditional caps and other gadgets with raffia leaves or straw. In fact the arts and crafts industry in Nso’ if revamped can create a lot of jobs for young boys and girls, contribute to economic growth and fight unemployment. Look at what the arts and crafts industry is doing for our brothers and sisters in neighbouring Foumban our sister kingdom. In Mezam, Boyo and Ngoketunjia Divisions the arts and crafts industry is quite alive. The Yambas of Donga Mantung sell their baskets and bags nationwide. The bamboo industry is well developed in the West Province. Traditional arts and crafts need to be embraced and developed in Nso’.",
			"image": n7
		},
		{
			"info": "The arts and crafts are some of the things that make one to identity with a people. What has become of the Shwa Nso’ (Nso’ knife), or the Kisov Nso’ (Nso’ hoe). Someone of Nso’ descent recently lamented, that “Nso’ needs an identity such as the Kom who have a garment which has not only propagated Kom culture, but has been embraced throughout the Grass-fields and Cameroon as a whole giving the identity of a national garment.” In Kenya there is what is known as a national dress. The Kom garment has taken that position, once put on out of this country. People identify you first as an African and those who are seeing it for the first time come close to inquire from where you come from. That is an identity we Cameroonians should be proud of.",
			"image": n8
		},
		{
			"info": "In 2009 Mus’Art Gallery published Nso’ Traditional Sculpture by Daniel Kanjo Musa (ISBN 978-3-639-19349-7). This book explains so much on the art of traditional wood sculpturing in Nso’. quoting from my blurb about the book on the back cover page “This is a dynamic and lively analysis of an unusual work from an African artist. It explains how he became a carver, how Nso’ carvers are initiated, why the art was practised in secrecy, users of the objects, what human figures stood for and the motifs used.”",
			"image": n9
		},
		{
			"info": "Sometime not long ago a European researcher interested in Nso’ utensils was guest at Mus’Art Gallery. After unsuccessful attempts to find a lot of traditional utensils which were made or used in Nso’, he was able to find quite a good number of interesting pieces at Mus’Art Gallery. They may not look fascinating but they remain very important cultural relics that our forebears used. That alone is a great contribution of our museum in the promotion of Nso’ culture for posterity.",
			"image": n10
		},
		{
			"info": "The new model for museums in Africa is meant to be vibrant spaces that connect with the community. Mus’Art Gallery was created for the public, Nso’ people and Cameroonians. It is your cultural heritage we are preserving. It is important to visit the museum to know what we are doing. When you come closer to the museum you learn a lot. Museums open doors for research, serve the community, offer opportunities to learn as well as a place for recreation. We invite the people of Kumbo to get closer to our museum. It is for you that we opened forteen years ago.",
			"image": n11
		},
	]
	return (
		<>
			{Art_contents.map((cont, i) => {
				return (
					<div className="card_wrapper">
						<div className="card_info">
							<h5>{i + 1}</h5>
							{cont.info}
						</div>
						{cont.image === "" ? "" : <div className="card_image">
							<img src={cont.image} alt="" />
						</div>}
					</div>
				)
			})}
		</>
	)

}
export default ArtNso