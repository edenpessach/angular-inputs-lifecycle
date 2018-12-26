import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';

interface LifecycleEvent {
  type: string;
  value: string;
}

@Component({
  selector: 'my-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() name: string = 'default';

  timeline: LifecycleEvent[] = [];

  constructor() {
    this.newEvent('constructor');
  }

  ngOnInit() {
    this.newEvent('ngOnInit');
  }

  ngOnChanges() {
    this.newEvent('ngOnChanges');
  }

  ngOnDestroy() {
    this.newEvent('ngOnDestroy');
  }

  private newEvent(type) {
    this.timeline.push(
      {
        type,
        value: this.name
      }
    );

  }
}
