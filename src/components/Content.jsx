import React, { useState } from 'react';
import { OverviewNso, AttireNso, CuisineNso, FestivalsNso, LanguageNso, ArtNso } from "./tribes/nso"
import { OverviewBakweri, AttireBakweri, CuisineBakweri, FestivalsBakweri, LanguageBakweri } from "./tribes/bakweri"
//import { OverviewNso, OverviewBakweri, AttireBakweri, CuisineBakweri, FestivalsBakweri, LanguageBakweri } from "./tribes/bakweri"
//import { OverviewNso, OverviewBakweri, AttireBakweri, CuisineBakweri, FestivalsBakweri, LanguageBakweri } from "./tribes/bakweri"
//import { OverviewNso, OverviewBakweri, AttireBakweri, CuisineBakweri, FestivalsBakweri, LanguageBakweri } from "./tribes/bakweri"
//import { OverviewNso, OverviewBakweri, AttireBakweri, CuisineBakweri, FestivalsBakweri, LanguageBakweri } from "./tribes/bakweri"


const Content = ({ selectedTribe }) => {
	// Create a mapping of content based on the selected tribe and topic
	const contentMap = {
		'Nso': {
			Overview: <OverviewNso />,
			'Traditional Attire': <AttireNso />,
			'Traditional Cuisine': <CuisineNso />,
			'Festivals And Celeberations': <FestivalsNso />,
			'Language and Communication': <LanguageNso />,
			'Arts and Crafts': <ArtNso />,
		},
		'Bakweri': {
			Overview: <OverviewBakweri />,
			'Traditional Attire': <AttireBakweri />,
			'Traditional Cuisine': <CuisineBakweri />,
			'Festivals And Celeberations': <FestivalsBakweri />,
			'Language and Communication': <LanguageBakweri />,
			'Arts and Crafts': 'Arts and Craft content for Bakweri',
		},
		'Bakossi': {
			//Overview: <OverviewBakossi />,
			//'Traditional Attire': <AttireBakossi />,
			//'Traditional Cuisine': <CuisineBakossi />,
			//'Festivals And Celeberations': <FestivalsBakossi />,
			//'Language and Communication': <LanguageBakossi />,
			'Arts and Crafts': 'Arts and Craft content for Bakossi',
		},
		'Bamilike': {
			//Overview: <OverviewBamilike />,
			//'Traditional Attire': <AttireBamilike />,
			//'Traditional Cuisine': <CuisineBamilike />,
			//'Festivals And Celeberations': <FestivalsBamilike />,
			//'Language and Communication': <LanguageBamilike />,
			'Arts and Craft': 'Arts and Craft content for Bamilike',
		},
		'Ebolowa': {
			//Overview: <OverviewEbolowa />,
			//'Traditional Attire': <AttireEbolowa />,
			//'Traditional Cuisine': <CuisineEbolowa />,
			//'Festivals And Celeberations': <FestivalsEbolowa />,
			//'Language and Communication': <LanguageEbolowa />,
			'Arts and Craft': 'Arts and Craft content for Ebolowa',
		},
		'Ewondo': {
			//Overview: <OverviewEwondo />,
			//'Traditional Attire': <AttireEwondo />,
			//'Traditional Cuisine': <CuisineEwondo />,
			//'Festivals And Celeberations': <FestivalsEwondo />,
			//'Language and Communication': <LanguageEwondo />,
			'Arts and Craft': 'Arts and Craft content for Ewondo',
		},
		'Douala': {
			//Overview: <OverviewDouala />,
			//'Traditional Attire': <AttireDouala />,
			//'Traditional Cuisine': <CuisineDouala />,
			//'Festivals And Celeberations': <FestivalsDouala />,
			//'Language and Communication': <LanguageDouala />,
			'Arts and Craft': 'Arts and Craft content for Douala',
		},
		'Mankon': {
			//Overview: <OverviewMankon />,
			//'Traditional Attire': <AttireMankon />,
			//'Traditional Cuisine': <CuisineMankon />,
			//'Festivals And Celeberations': <FestivalsMankon />,
			//'Language and Communication': <LanguageMankon />,
			'Arts and Craft': 'Arts and Craft content for Mankon',
		},
		'MANYU': {
			//Overview: <OverviewMANYU />,
			//'Traditional Attire': <AttireMANYU />,
			//'Traditional Cuisine': <CuisineMANYU />,
			//'Festivals And Celeberations': <FestivalsMANYU />,
			//'Language and Communication': <LanguageMANYU />,
			'Arts and Craft': 'Arts and Craft content for MANYU',
		},
		'Bertoua': {
			//Overview: <OverviewBertoua />,
			//'Traditional Attire': <AttireBertoua />,
			//'Traditional Cuisine': <CuisineBertoua />,
			//'Festivals And Celeberations': <FestivalsBertoua />,
			//'Language and Communication': <LanguageBertoua />,
			'Arts and Craft': 'Arts and Craft content for Bertoua',
		},
		'Bantu': {
			//Overview: <OverviewBantu />,
			//'Traditional Attire': <AttireBantu />,
			//'Traditional Cuisine': <CuisineBantu />,
			//'Festivals And Celeberations': <FestivalsBantu />,
			//'Language and Communication': <LanguageBantu />,
			'Arts and Craft': 'Arts and Craft content for Bantu',
		},
		'Bum': {
			//Overview: <OverviewBum />,
			//'Traditional Attire': <AttireBum />,
			//'Traditional Cuisine': <CuisineBum />,
			//'Festivals And Celeberations': <FestivalsBum />,
			//'Language and Communication': <LanguageBum />,
			'Arts and Craft': 'Arts and Craft content for Bum',
		},
		// Add more tribes and their respective content here
	};

	const [selectedTopic, setSelectedTopic] = useState('Overview'); // Default to 'A' topic

	const handleSelectTopic = (topic) => {
		setSelectedTopic(topic);
	};

	return (
		<div className="content">

			<div className="sidebar">
				<h2>{selectedTribe}</h2>
				<ul>
					<li onClick={() => handleSelectTopic('Overview')} className={selectedTopic === 'Overview' ? 'active' : ''}>
						Overview
					</li>
					<li onClick={() => handleSelectTopic('Traditional Attire')} className={selectedTopic === 'Traditional Attire' ? 'active' : ''}>
						Traditional Attire
					</li>
					<li onClick={() => handleSelectTopic('Traditional Cuisine')} className={selectedTopic === 'Traditional Cuisine' ? 'active' : ''}>
						Traditional Cuisine
					</li>
					<li onClick={() => handleSelectTopic('Festivals And Celeberations')} className={selectedTopic === 'Festivals And Celeberations' ? 'active' : ''}>
						Festivals and Celeberations
					</li>
					<li onClick={() => handleSelectTopic('Language and Communication')} className={selectedTopic === 'Language and Communication' ? 'active' : ''}>
						Language and Communication
					</li>
					<li onClick={() => handleSelectTopic('Arts and Crafts')} className={selectedTopic === 'Arts and Crafts' ? 'active' : ''}>
						Arts and Crafts
					</li>
					{/* Add more topics to the sidebar as needed */}
				</ul>
			</div>
			<div className="topic-content">
				<h3>{selectedTopic}</h3>
				<div className='topic-content-firt-p'>{typeof contentMap[selectedTribe]?.[selectedTopic] === 'string' ? (
					<p>{contentMap[selectedTribe]?.[selectedTopic]}</p>
				) : (
					contentMap[selectedTribe]?.[selectedTopic]
				)}</div>

			</div>
		</div>
	);
};

export default Content;
