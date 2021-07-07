import * as React from "react"


const Footer = () => {
return (
  <footer>
  <section>
    <div className="address">
      <h3>Dove siamo?</h3>
      <span>via Roma 3</span>
      <span>Casalecchio</span>
    </div>
    <div className="hours">
      <h3>Orari</h3>
      <span>Chiuso il lunedi</span>
      <span>Tutti i giorni dalle 12.00-14.00 e dalle 18.00-22.00</span>
    </div>
    <div className="contact">
      <h3>CONTATTI</h3>
      <span>051 44444444</span>
      <span>@yourSocialName</span>
    </div>
  </section>
  <p>Creato da
    <a href="https://github.com/Darkwamba" target="_blank" rel="noopener noreferrer">S.Martello</a>
  </p>
</footer>
)

}

export default Footer
