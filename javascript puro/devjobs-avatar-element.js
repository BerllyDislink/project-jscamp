class DevJobsAvatar extends HTMLElement { //se crea una clase que puede heredar las propiedades y métodos de los elementos HTML
    constructor(){
        super(); //  se llama al constructor de HTMLEelement

        this.attachShadow({mode: 'open'}) // se crea un dom paralelo que no deja que afecten nada de afuera, y se deja en open porque si se quiere que acceda archivos javascript
        } //Se utiliza para inicialzar y hacer uso de los elementos HTMLElement y agregar nuevas funcionaliades.

        createUrl(service, username) {
            return `https://unavatar.io/${service}/${username}`;
          }
          
        render(){

            const service = this.getAttribute('service') ?? 'github' // se pueden recuperar el elmento, puesto que son del mismo elemento que está en details.html
            const username = this.getAttribute('username') ?? 'BerllyDislink'
            const size = this.getAttribute('size') ?? '40'

            const url = this.createUrl(service,username)

            console.log(size)
            
            this.shadowRoot.innerHTML = `<img src="${url}" 
            alt="${username}" 
            class="avatar">
            <style>
            img{
            border-radius:100%;
            height: ${size}px;
            width: ${size}px;
            background-size: contain;
            }
            </style>
            `
            
        }

        connectedCallback(){ //Cuando el componente se añada AL DOm, se llama al método render
            this.render()
        }
} 

customElements.define('devjobs-avatar', DevJobsAvatar) // se define un nuevo elemento, y ese elemento usará lo relacionado al extends de HTMLElement y también tendrá nuevas funcionalidades is hace se quiere
 