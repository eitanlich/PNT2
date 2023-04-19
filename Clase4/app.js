const app = Vue.createApp({
    data() {
        return {
          valor: 'what?',
          cantidadTotal : 0
        }
      },
      methods:{
        actualizarClicks(e){
            this.cantidadTotal++;
        }
      }
});

app.component('personaje3', {
    data(){
        return {
            cantidad: 0
        }
    },
    template: `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{this.apellido}}, {{this.nombre}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Cantidad: {{this.cantidad}}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <input type='button' @click='personajeClick()' value="Click!">
                </div>
            </div>`,
    props:['nombre', 'apellido'],
    methods:{
        personajeClick(){
            console.log('Se toco el personaje ' + this.nombre);
            this.$emit('click-personaje', 'click!!');
            this.cantidad++;
        }
    }
});

app.mount('#app');