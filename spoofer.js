(function() {
    const originalFetch = window.fetch;

    window.fetch = function() {
        return originalFetch.apply(this, arguments).then(async (response) => {
            const url = response.url;
            
            if (url.includes('server_list.json')) {
                // Reemplaza esta URL con la de tu JSON modificado
                const modifiedDataUrl = 'https://api.jsonbin.io/v3/b/66e21824ad19ca34f8a38e6f';
                
                const modifiedResponse = await fetch(modifiedDataUrl);
                const modifiedData = await modifiedResponse.json();

                // Crear una nueva respuesta con los datos modificados
                return new Response(JSON.stringify(modifiedData), {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers
                });
            }

            return response;
        });
    };
})();
