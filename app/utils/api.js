const fetchPopularRepos = (language) => {
    const endpoint = window.encodeURI(`https://api.github.com.sreach/repositories?q=stars:>1+language:${language}&sort=start&order=desc&type=Repositories`)

    return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        if(!data.items) {
            throw new Error(data.message)
        }
        return data.items;
    });
};

export { fetchPopularRepos };