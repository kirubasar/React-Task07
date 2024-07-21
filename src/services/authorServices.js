const authorServices = {
    getauthors: async()=>{
        const response = await fetch('/author.json')
        const authors = await response.json();
        return authors;
    }
}

export default authorServices;