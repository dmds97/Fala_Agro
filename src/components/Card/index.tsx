import logo from "../../assets/img/logo.png"
import "./style.css"

const Card = () => {
    return(
        <div className="feed-item">
          <img src={logo} alt="Imagem de Notícia 1" />
          <h2>Lorem Ipsum</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio tempore mollitia labore sequi dolore esse sapiente, omnis animi? Ad nulla veniam deleniti architecto aperiam eius repellat expedita et facilis!</p>
        </div>
    )
}

export default Card;