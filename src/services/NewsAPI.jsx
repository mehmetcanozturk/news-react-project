

export default function NewsAPI({ item, setItem }) {
    const apiKey = '5e345b4261b3416787e60a85e57538be'
    const url = 'https://newsapi.org/v2/top-headlines/sources?apiKey=' + apiKey

    fetchItems = async () => {
        const res = await fetch(url)
        if (!res.ok) throw new Error(res.statusText)
        const data = await res.json();
        setItem([...item, data]);
    }

}
