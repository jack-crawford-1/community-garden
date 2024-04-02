import request from 'superagent'
import ReverseGeocodeData from '../../models/reverseGeocodeModel'

export async function FetchReverseGeocodeData(
  lat: string,
  lng: string,
): Promise<ReverseGeocodeData> {
  const res = await request.get(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
  )

  return res.body
}

export default FetchReverseGeocodeData
