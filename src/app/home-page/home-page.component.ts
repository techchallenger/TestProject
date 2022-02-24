import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  name:string="Manoj Patil";

  profilePhotoPath:string="https://us04images.zoom.us/p/izen8ttEQxa9EXjTFMmUmA/7f53f140-8263-4cec-9aa3-18f885750df3-2658";

  profile:string="https://us04images.zoom.us/p/izen8ttEQxa9EXjTFMmUmA/7f53f140-8263-4cec-9aa3-18f885750df3-2658";
  
  n1:number=0;
  n2:number=0;
  answer:number=0;


  constructor() { }

  ngOnInit(): void {
  }

  Addition(no1:string, no2:string)
  {
    this.n1=Number(no1);
    this.n2=Number(no2);
    this.answer=this.n1 + this.n2;

  }


}
