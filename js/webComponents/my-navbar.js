import config from "./config.js";

export default class myNav extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await(await fetch(config.uri(myNav.url))).text()
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }
    hadledEvent(e){
        (e.type === "click") ? this.sendMessage(e) : console.log("error 404");
    }
    sendMessage(e){
        this.navLinks = this.shadowRoot.querySelector(".navbar-links")
        this.navLinks.classList.toggle(`active`)
    }
    connectedCallback(){
        Promise.resolve(myNav.components()).then(html =>{
            this.shadowRoot.innerHTML = html;
            this.mytoggle = this.shadowRoot.querySelector(".toggle");
            this.mytoggle.addEventListener("click", this.hadledEvent.bind(this))
        })
    }
}

customElements.define(config.name(myNav.url), myNav)