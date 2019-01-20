import trans from '../../trans';

import GoogleMapsService from '../../services/GoogleMapsService';

const googleMapsService = new GoogleMapsService();

export default async function validGoogleMapsAddress(data, field, message, args, get) {
  
  const value = get(data, field);

  if(!value) {
    return;
  }

  const result = await googleMapsService.searchAddress(value);

  if(!result) {
    throw 'Invalid address';
  }
}