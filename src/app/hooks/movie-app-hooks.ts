import { useCallback, useEffect, useState } from 'react';
import { NowPlayingType } from '../models/MovieApp/now-playing-type';
import { getNowPlayingList } from '../services/movie-app';

export const useGetNowPlayingList = () => {
	const [nowPlaying, setNowPlaying] = useState<NowPlayingType[]>([]);

	const requestNowPlaying = useCallback(() => {
		let ignore = false;
		getNowPlayingList()
			.then((data) => {
				if (!ignore) {
					setNowPlaying(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestNowPlaying();
	}, [requestNowPlaying]);

	return { requestMovieAppNowPlaying: requestNowPlaying, movieAppNowPlaying: nowPlaying, setMovieAppNowPlaying: setNowPlaying};
}
