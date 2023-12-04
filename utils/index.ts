const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd5fc3a44cmshaf8d9cf38a8d9a4p1ab37fjsn0557b74c1650',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	//const response = await fetch(url, options);
	//const result = await response.text();
	//console.log(result);
} catch (error) {
	console.error(error);
}


export async function fetchCars(){
    //
    const headers = {
        'X-RapidAPI-Key': 'fd5fc3a44cmshaf8d9cf38a8d9a4p1ab37fjsn0557b74c1650',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=toyota', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number)=>{
	const basePricePerDay= 50;
	const mileageFactor = 0.1;
	const ageFactor = 0.05 
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() -year) * ageFactor;

	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0)

}