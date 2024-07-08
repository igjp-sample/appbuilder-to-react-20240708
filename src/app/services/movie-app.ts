import { NowPlayingType } from '../models/MovieApp/now-playing-type';

export async function getNowPlayingList(): Promise<NowPlayingType[]> {
	const response = await fetch('https://excel2json.io/api/share/15755be7-cee3-4b74-4382-08da496bf5f2');
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}
