class GitHub {
    constructor(){
        this.client_id = '91d754287ddcaf7a12ea';
        this.client_secret = 'ef0703eb09c170507de90463c66629381983bb5f';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const proifleResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await proifleResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}