const getData = async (url, json = true) => {
    try {
        const res = await fetch(url)
        if (json) {
            return res.json()
        } else {
            return res
        }
    } catch (error) {
        console.error(error.message)
    }
}

export default getData