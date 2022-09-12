import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'second-project';
  name = "Pratibha";
  enabled = false;

 

  ngOnInit(): void {
  setInterval(()=>{
  this.enabled = !this.enabled;
  }, 1000)
}

clicked(){
  alert("You Clicked Button");
}


/*texttyped(event:Event){
  let ctrl = <HTMLInputElement>event.target;
  this.name = ctrl.value;
  //alert("Entered Text")

}*/
}
