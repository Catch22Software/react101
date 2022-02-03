import React from "react";


class FilmItemRow extends React.Component{
    render() {
        return (
            <li>
                <a href={this.props.url}>{this.props.url}</a>
            </li>
        )
    }
}

class StarWars extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            loadedCharacter: false,
            name: null,
            height: null,
            homeworld: null,
            films: [],
            image: null,
        }
    }

    getNewCharacter(){
        const randomNumber = Math.ceil(Math.random() * 82)
        const url = `https://swapi.dev/api/people/${randomNumber}/`
        fetch(url).then(response => response.json()).then(data => {
            this.setState({
                name: data.name,
                height: data.height,
                homeworld: data.homeworld,
                films: data.films,
                image: data.image,
                loadedCharacter: true,
            })
        })

    }
    render() {

        const movies = this.state.films.map((url, i) => {
            return <FilmItemRow key={i} url={url}/>
        })
        return (
            <div>
                {
                    this.state.loadedCharacter &&
                    <div>
                        <img className="picture" src={this.state.image} alt="Character Portrait"/>
                        <h1>{this.state.name}</h1>
                        <p>{this.state.height} cm</p>
                        <p><a href={this.state.homeworld}>Homeworld:</a>
                        </p>
                        <ul>
                            {movies}
                        </ul>
                    </div>

                }
                <button type='button'
                        className='btn'
                        onClick={() => this.getNewCharacter()}
                >Random Character
                </button>
            </div>
        );
    }
}

export default StarWars