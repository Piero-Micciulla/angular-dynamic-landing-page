import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-images-sequence',
  templateUrl: './images-sequence.component.html',
  styleUrls: ['./images-sequence.component.scss']
})
export class ImagesSequenceComponent implements OnInit {

  //images row

  images = [
    {
      url: '../../../assets/images/desktop/image-gallery-milkbottles.jpg'
    },
    {
      url: '../../../assets/images/desktop/image-gallery-orange.jpg'
    },
    {
      url: '../../../assets/images/desktop/image-gallery-cone.jpg'
    },
    {
      url: '../../../assets/images/desktop/image-gallery-sugarcubes.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
