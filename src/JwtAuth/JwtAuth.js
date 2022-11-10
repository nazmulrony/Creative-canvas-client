export const setToken = (user, navigate, from) => {
    const currentUser = { email: user.email };

    //token req from server
    fetch('https://creative-photography-server-nazmulrony.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            localStorage.setItem('creativeCanvasToken', data.token);
            navigate(from, { replace: true });
        })
        .catch(err => console.log(err))
}