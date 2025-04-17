export async function getNews() {
    const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=???`
    )
    const jsonData = await response.json()
    console.log(jsonData.articles)
    return jsonData.articles || []
}
