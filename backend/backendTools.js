export const callController = (action, infos, callback = null) => {
    (async () => {
        const response = await fetch('http://localhost:3021/controllerApp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action,
                ...infos
            })
        });
        if (callback !== null) {
            const data = await response.json();
            callback(data);
        }
    })();
}