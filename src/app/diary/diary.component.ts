import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
    slidesToShow: 4, 
    slidesToScroll: 3,
    variableWidth: true,
    prevArrow: "<i class='fa  fa-chevron-circle-left' style='position:absolute;z-index:1;font-size: 22px;color: gray;top: 20px;left: 4px;'></i>",
    nextArrow: "<i class='fa  fa-chevron-circle-right' style='position:absolute;z-index:1;font-size: 22px;color: gray;top: 20px;right: 4px;'></i>",
  };
  bigSlideConfig = {
    slidesToShow: 4, 
    slidesToScroll: 4,
    variableWidth: true,
    prevArrow: "<i class='fa  fa-chevron-circle-left' style='position:absolute;z-index:1;font-size: 33px;color: gray;top: 59px;left: 10px;'></i>",
    nextArrow: "<i class='fa  fa-chevron-circle-right' style='position:absolute;z-index:1;font-size: 33px;color: gray;top: 59px;right: 10px;'></i>",
  }
 
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
 
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
 
  afterChange(e) {
    console.log('afterChange');
  }
}
