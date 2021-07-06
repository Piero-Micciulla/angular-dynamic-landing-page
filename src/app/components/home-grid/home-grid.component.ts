import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grid',
  templateUrl: './home-grid.component.html',
  styleUrls: ['./home-grid.component.scss']
})
export class HomeGridComponent implements OnInit {

  // grid boxes 

  boxes = [
    {
      title: 'Transform your brand',
      description: 'We are a full-service creative agency specializing in helping brands grow fast. Engage yor clients through compelling visuals that do most of the marketing for you',
      link: 'LEARN MORE',
      background: '',
      isText: true,
      border: 'yellow',
      isBottom: false

    },
    {
      title: '',
      description: '',
      link: '',
      background: '../../../assets/images/desktop/image-transform.jpg',
      isBottom: false
    },
    {
      title: '',
      description: '',
      link: '',
      background: '../../../assets/images/desktop/image-stand-out.jpg',
      isBottom: false
    },
    {
      title: 'Stand out to the right audience',
      description: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we will build and extend your brand in digital places',
      link: 'LEARN MORE',
      background: '',
      isText: true,
      border: 'pink',
      isBottom: false
    },
    {
      title: 'Graphic Design',
      description: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention',
      link: '',
      background: '../../../assets/images/desktop/image-graphic-design.jpg',
      isText: false,
      graphic: true,
      isBottom: true
    },
    {
      title: 'Photography',
      description: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
      link: 'LEARN MORE',
      background: '../../../assets/images/desktop/image-photography.jpg',
      isText: false,
      graphic: false,
      isBottom: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
