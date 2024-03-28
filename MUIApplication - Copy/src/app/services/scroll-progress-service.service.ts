// scroll-progress.service.ts
import { Injectable, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollProgressService {
  private scrollSubject = new Subject<number>();

  constructor() { }

  scrollProgress = 0;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = (scrollPosition / documentHeight) * 100;
  }

  getScrollProgress() {
    return this.scrollSubject.asObservable();
  }
}
