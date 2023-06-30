export const request = {
  Popular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
  TopRated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
  Trending: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2',
  Upcoming: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
}

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDg4YzVhNzcyNWQ2ZTQ0MTI5YWU4NmRiZTRmNjk5OSIsInN1YiI6IjY0OWMyMTVmZmQ0ZjgwMDBlY2IzYzg3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nw4l5I6ebpWpEFIDXdOpfXhhd5bafERuLyvsbSbsFs',
  },
}
