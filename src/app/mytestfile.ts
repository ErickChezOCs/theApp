import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector-name',
  templateUrl: 'name.component.html'
})

export class NameComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor() { }

}
