import config from "../config.json"

import styled from "styled-components"

function HomePage () {

    const msg = "Welcome to Aluratube"

    //console.log(config.playlists)

    return (
        <div style={{ backgroundColor: "pink" }}>{ msg }

            <Menu />
            <Header/>
            <TimeLine playlists={config.playlists} />
        </div>

    )
}

export default HomePage

function Menu () {
    return (
        <div>
            Menu
        </div>
    )
}

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`
function Header () {
    return (
        <StyledHeader>
            <img src="" />

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />

                <div>
                    <h2>
                        {config.name}
                    </h2>

                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function TimeLine (props) {

    //console.log('Inside the component:', props.playlists)
    const playlistNames = Object.keys(props.playlists)

    return (
        <div>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName]
                console.log(playlistName)
                console.log(videos)

                return (
                    <section>
                        <h2>{playlistName}</h2>

                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumbnail} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}


