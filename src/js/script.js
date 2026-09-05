const albuns = {
    homework: {
        nome: "Homework",
        ano: "1997",
        musicas: []
    },
    discovery: {
        nome: "Discovery",
        ano: "2001",
        musicas: []
    },
    human_after_all: {
        nome: "Human After All",
        ano: "2005",
        musicas: [
            {
                nome: "Human After All",
                video: "https://www.youtube.com/watch?v=PXYeARRyDWk&list=PLSdoVPM5Wnne47ib65gVG206M7qp43us-&index=1&pp=iAQB8AUB"
            },
            {
                nome: "The Prime Time of Your Life",
                video: "https://www.youtube.com/watch?v=QwRlt1XyOg0&list=PLSdoVPM5Wnne47ib65gVG206M7qp43us-&index=2&pp=iAQB8AUB"
            },
            {
                nome: "Robot Rock",
                video: "https://www.youtube.com/watch?v=sFZjqVnWBhc&list=PLSdoVPM5Wnne47ib65gVG206M7qp43us-&index=3&pp=iAQB8AUB"
            },
            {
                nome: "Steam Machine",
                video: "https://www.youtube.com/watch?v=0sa2R-PM0Uk&list=PLSdoVPM5Wnne47ib65gVG206M7qp43us-&index=4&pp=iAQB8AUB"
            },
            {
                nome: "Make Love",
                video: "https://www.youtube.com/watch?v=UeZG0viNAjM&list=PLSdoVPM5Wnne47ib65gVG206M7qp43us-&index=5&pp=iAQB8AUB"
            },
            {
                nome: "The Brainwasher",
                video: "https://www.youtube.com/watch?v=RdVEQbWjaTE&list=PLSdoVPM5Wnne47ib65gVG206M7qp43us-&index=6&pp=iAQB8AUB"
            },
            {
                nome: "On/Off",
                video: "https://www.youtube.com/watch?v=xf5kjtSW1aM&list=PLSdoVPM5Wnne47ib65gVG206M7qp43us-&index=7&pp=iAQB8AUB"
            }, {
                nome: "Television Rules the Nation",
                video: "https://www.youtube.com/watch?v=StACmxSQKY8&list=PLSdoVPM5Wnne47ib65gVG206M7qp43us-&index=8&pp=iAQB8AUB"
            },
            {
                nome: "Technologic",
                video: "https://www.youtube.com/watch?v=D8K90hX4PrE&list=PLSdoVPM5Wnne47ib65gVG206M7qp43us-&index=9&pp=iAQB8AUB"
            },
            {
                nome: "Emotion",
                video: "https://www.youtube.com/watch?v=d-OGBZSDKBU&list=PLSdoVPM5Wnne47ib65gVG206M7qp43us-&index=10&pp=iAQB8AUB"
            }
        ]
    },
    random_access_memories: {
        nome: "Random Access Memories",
        ano: "2013",
        musicas: []
    }

};

const pagina = window.location.pathname;
if (pagina.includes("homework")) {
    carregarAlbum(albuns.homework);
}
else if (pagina.includes("discovery")) {
    carregarAlbum(albuns.discovery);
}
else if (pagina.includes("human_after_all")) {
    carregarAlbum(albuns.human_after_all);
}
else if (pagina.includes("random_access_memories")) {
    carregarAlbum(albuns.random_access_memories);
}

function carregarAlbum(album) {
    const lista = document.getElementById("lista-musicas");
    if (!lista) {
        return;
    }
    album.musicas.forEach(function (musica, index) {
        const coluna = document.createElement("div");
        coluna.className = "col-12 col-md-6 col-lg-4";
        coluna.innerHTML = `
        <div class="card bg-dark text-white h-100 shadow">
            <img src="../src/img/capa-musicas.jpg" alt="Capa do álbum Human After All" class="card-img-top music-image">
        <div class="card-body text-center p-4">
            <p class="text-secondary fw-bold">${String(index + 1).padStart(2, "0")}</p>
            <h3 class="h5 fw-bold">${musica.nome}</h3>
            <a href="${musica.video}" target="_blank" class="btn btn-light mt-3">Assistir videoclipe</a>
            </div>
        </div>
`;
        lista.appendChild(coluna);
    });
}