



const { createApp } = Vue

createApp({
  data() {
    return {
      

      listMail: [],
      
        
    }
  },

  methods:{
    
    takeMail(){

        for(let i = 0; i < 10; i++){
    
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((mail)=>{
            
                const result = mail;
                    
                this.listMail.push(mail)


            console.log(mail)
        
            })
        }
        console.log(this.listMail)
    },
    }
    




    
  
}).mount('#app')

