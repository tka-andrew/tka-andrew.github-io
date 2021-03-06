import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation } from "swiper";
import { ShareFacadeService } from 'src/app/services/shareFacade.service';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AchievementsComponent implements OnInit, AfterViewInit {

  // mgl-timeline settings
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';

  constructor(
    private shareFacadeService: ShareFacadeService
  ) { }

  ngOnInit(): void {
    this.shareFacadeService.startSpinner();
  }

  ngAfterViewInit(): void {
    let elem = document.getElementById('entry0');
    let evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    if (elem) {
      elem.dispatchEvent(evt);
    }
  }

  loaded(): void {
    this.shareFacadeService.stopSpinner();
  }


  onDotClick(event: { stopPropagation: () => void; }) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

}
