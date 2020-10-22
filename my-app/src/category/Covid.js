import React, { useEffect, useState } from 'react';
import '../Covid.css';
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import InfoBox from '../Covid/InfoBox';
import Table from '../Covid/Table';
import Map from '../Covid/Map';
import 'leaflet/dist/leaflet.css';
import { sortData, prettyPrintStat } from '../Covid/util';


function Covid() {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState('worldwide');
	const [countryInfo, setCountryInfo] = useState({});
	const [tableData, setTableData] = useState([]);
	const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
	const [mapZoom, setMapZoom] = useState(3);
	const [mapCountries, setMapCountries] = useState([]);
	const [casesType, setCasesType] = useState('cases');

	useEffect(() => {
		fetch('https://disease.sh/v3/covid-19/all')
			.then((response) => response.json())
			.then((data) => {
				setCountryInfo(data);
			});
	}, []);
	useEffect(() => {
		const getCountriesData = async () => {
			await fetch('https://disease.sh/v3/covid-19/countries')
				.then((response) => response.json())
				.then((data) => {
					const countries = data.map((country) => ({
						name: country.country,
						value: country.countryInfo.iso2,
					}));
					const sortedData = sortData(data);
					setTableData(sortedData);
					setMapCountries(data);
					setCountries(countries);
				});
		};
		getCountriesData();
	}, []);

	const onCountryChange = async (event) => {
		const countryCode = event.target.value;

		setCountry(countryCode);

		const url =
			countryCode === 'Worldwide'
				? 'https://disease.sh/v3/covid-19/all'
				: `https://disease.sh/v3/covid-19/countries/${countryCode}?strict=true`;

		await fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setCountry(countryCode);
				setCountryInfo(data);
				setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
				setMapZoom(4);
			});
	};

	return (
		<div className="covid">
			<div className="covid_left">
				<div className="covid_header">
					<h1>COVID-19 TRACKER</h1>
					<FormControl className="covid_dropdown">
						<Select variant="outlined" onChange={onCountryChange} value={country}>
							<MenuItem value="worldwide">Worldwide</MenuItem>
							{countries.map((country) => (
								<MenuItem value={country.value}>{country.name}</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>

				<div className="covid_stats">
					<InfoBox
						isRed
						active={casesType === 'cases'}
						onClick={(e) => setCasesType('cases')}
						title="Coronavirus Cases"
						cases={prettyPrintStat(countryInfo.todayCases)}
						total={prettyPrintStat(countryInfo.cases)}
					/>
					<InfoBox
						active={casesType === 'recovered'}
						onClick={(e) => setCasesType('recovered')}
						title="Recovered"
						cases={prettyPrintStat(countryInfo.todayRecovered)}
						total={prettyPrintStat(countryInfo.recovered)}
					/>
					<InfoBox
						isRed
						active={casesType === 'deaths'}
						onClick={(e) => setCasesType('deaths')}
						title="Deaths"
						cases={prettyPrintStat(countryInfo.todayDeaths)}
						total={prettyPrintStat(countryInfo.deaths)}
					/>
				</div>

				{/* map */}
				<Map casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom} />
			</div>

			<Card className="covid_right">
				<CardContent>
					<div className="covid_information">
						<h3>Live Cases by Country</h3>
						<Table countries={tableData} />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export default Covid;
