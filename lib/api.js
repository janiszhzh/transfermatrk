const URL = 'https://transfermarket.p.rapidapi.com'



export async function getClubPlayersByClubId(id) {
    const response = await fetch(`${URL}/clubs/get-squad?id=${id}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com',
            'X-RapidAPI-Key': 'd344203992msh99e22b4fc0ea955p16675bjsnae3875e0e99d'
        }
    })


    if (!response.ok) {
        return Promise.reject(response)
    }
    return await response.json()
}
