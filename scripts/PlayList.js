import { getArtists, getSongs } from "./database.js"

const artists = getArtists()
const songs = getSongs()

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id.startsWith("arti")) {
            const [, artistId] = clickEvent.target.id.split("--")

            let songListString = ""

            for (const song of songs) {
                if (song.artistId === parseInt(artistId)) {
                    songListString += `${song.title} (${song.length} seconds)\n`
                }
            }

            window.alert(songListString)
        }
    }
)


export const Playlist = () => {
    let artistsHTML = "<article class='artists'>"

    for (const artist of artists) {
        artistsHTML += `
            <div id="artist--${artist.id}" class="artist">
                ${artist.firstName} ${artist.lastName}
            </div>
        `
    }

    artistsHTML += "</article>"

    return artistsHTML
}

