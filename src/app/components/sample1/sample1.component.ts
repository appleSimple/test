import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.scss',
]
})
export class Sample1Component implements OnInit {
  @Input() text;

  public sampleData = [
    {
      "categoryName": "Platinum",
      "backgroundUrl": "https://cfair-files.s3.ap-northeast-2.amazonaws.com/events/5f5883e40934760011b9b146/boothBackgrounds/60c19e418e86cf13e6309a48.png",
      "bannerUrl": "https://cfair-files.s3.ap-northeast-2.amazonaws.com/events/5f5883e40934760011b9b146/boothBanners/60c19e418e86cf13e6309a48.png",
      "rows": [
        {
          "seq": 1,
          "booths": [
            {
              "boothId": "60c1749ee7bdb1bb6a2e6aa6",
              "boothData": {
                "boothImageUrl": "https://cfair-files.s3.ap-northeast-2.amazonaws.com/events/5f5883e40934760011b9b146/boothImages/60c1a71b4cd80d2b1cb4fcef.png"
              },
              "seq": 1
            }
          ]
        }
      ]
    },
    {
      "categoryName": "Silver",
      "backgroundUrl": "https://cfair-files.s3.ap-northeast-2.amazonaws.com/events/5f5883e40934760011b9b146/boothBackgrounds/60c1a7fb4cd80d2b1cb4fcf5.png",
      "bannerUrl": "https://cfair-files.s3.ap-northeast-2.amazonaws.com/events/5f5883e40934760011b9b146/boothBanners/60c1a7fb4cd80d2b1cb4fcf5.png",
      "rows": [
        {
          "seq": 1,
          "booths": [
            {
              "boothId": "60c1a7c04cd80d2b1cb4fcf3",
              "boothData": {
                "boothImageUrl": "https://cfair-files.s3.ap-northeast-2.amazonaws.com/events/5f5883e40934760011b9b146/boothImages/60c1a7a54cd80d2b1cb4fcf0.png"
              },
              "seq": 1
            },
            {
              "boothId": "60c1a7da4cd80d2b1cb4fcf4",
              "boothData": {
                "boothImageUrl": "https://cfair-files.s3.ap-northeast-2.amazonaws.com/events/5f5883e40934760011b9b146/boothImages/60c1a7ac4cd80d2b1cb4fcf1.png"
              },
              "seq": 2
            }
          ]
        }
      ]
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
