import { Component } from '@angular/core';
import { Options } from '@m0t0r/ngx-slider';

@Component({
  selector: 'app-ticks-values-range-slider',
  templateUrl: './ticks-values-range-slider.component.html'
})
export class TicksValuesRangeSliderComponent {
  minValue = 1;
  maxValue = 8;
  options: Options = {
    floor: 0,
    ceil: 10,
    showTicksValues: true
  };
}
