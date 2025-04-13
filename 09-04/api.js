export async function getNews() {
    const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=c800640326d24b22ab17a1ab64f620f8`
    )
    const jsonData = await response.json()
    console.log(jsonData.articles)
    return jsonData.articles || []
}
