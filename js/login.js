class Login{
    constructor(){
      this.user = createElement('h2');
      this.username = createInput('');  
      this.password = createElement('h2');
      this.pass = createInput('');
      this.signin = createElement("h2");
      this.register = createButton("Register");
      this.enter = createButton("Enter");
      this.error = createElement("h2");
    }
    display(){
        this.user.show();
        this.username.show();
        this.password.show();
        this.pass.show();
        this.signin.show();
        this.register.show();
        this.enter.show();
        


        this.user.html("Username: ");
        this.user.style('font-family','cursive');
        this.user.position(width*55/128,height*2/5);
        this.username.position(width*55/128, height*56/125);
        username = this.username.value();

        this.password.html("Password: ");
        this.password.style('font-family','cursive');
        this.password.position(width*55/128, height*63/125);
        this.pass.position(width*55/128, height*14/25);
        password = this.pass.value();

        this.signin.html("Don't have an account? Register below.");
        this.signin.position(width*35/128,height*31/50);
        this.register.position(width*55/128, height*86/125);
        this.register.style('color','white');
        this.register.size(80,40);
        this.register.style('background-color','black');
        this.register.style('font-size','15px');

        this.enter.position(width*55/128,height*3/5);
        this.enter.style('color','red');
        this.enter.style('font-size','30px')
        this.enter.style('background-color','black');
        this.enter.size(100,40);


        this.register.mousePressed(()=>{
            state = "signin";
        });
        if(username!=null){
            data.getUsername();
            data.getPassword();
            data.getName();
            data.getNumber();
            data.getAddress();
            data.getMp();
            data.getMeth();
            data.getAge();
        }
        this.enter.mousePressed(()=>{

            if(username == correctUsername && password == correctPassword){
                state = "dashboard";
            }    
            if(username!==correctUsername||password!==correctPassword){
                this.error.show();
                this.error.html("Incorrect Username/Password, try again.");
                this.error.style('color','red');
                this.error.style('font-size','30px')
                this.error.position(width*2/5,height*400/1171);
            }
            else{
                this.error.hide();
            }
  

            
        });
        
        

    
        
    }
    hide(){
        this.user.hide();
        this.username.hide();
        this.password.hide();
        this.pass.hide();
        this.signin.hide();
        this.register.hide();
        this.enter.hide();

    }
}