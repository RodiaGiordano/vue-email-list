const { createApp } = Vue

createApp({
  data() {
    return {
      

      listMail: [],
      
      search: false,
        
    }
  },

  methods:{
    
    takeMail(){
      this.search = true
      this.listMail = []
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

