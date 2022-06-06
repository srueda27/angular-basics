import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {
  // This Input decorator allows me to pass down data from parent component to the child component
  // The 'img' is an alias, it allows me to "call" the property with that name, but not recommended
  @Input('img')
  postImg = '';

  // Event emitter is how child component comunicate with the parent
  @Output()
  imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() called', this.postImg);
  }

  // Happens after the component is initialize, not created
  ngOnInit() {
    console.log('ngonInit() called', this.postImg);
  }

  // Whenever changes happens in the component
  ngOnChanges() {
    console.log('ngOnChanges called')
  }

  // After a change detection occurs
  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }
}
