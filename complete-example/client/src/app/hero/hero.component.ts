import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Subject } from 'rxjs';
import { catchError, map, switchMap, takeUntil } from 'rxjs/operators' 
import { ErrorService } from '../services/error.service';
import { HeroService } from '../services/hero.service';
import { Hero } from '../types/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {

  hero: null | Hero = null;
  destroy$ = new Subject<void>();
  constructor(private heroService: HeroService,
    private socket: Socket,
    private activatedRoute: ActivatedRoute,
    private errorService: ErrorService) {
      
    }

  ngOnInit(): void {
    this.heroService.pingWithSockets();
    this.socket.fromEvent<string>('ping-ans').pipe(
      takeUntil(this.destroy$)
    ).subscribe(arg => console.log(arg));
    this.activatedRoute.params.pipe(
      map(({ id }) => id),
      switchMap(id => this.heroService.getOne(id))
    ).subscribe(hero => {
      this.hero = hero;
      console.log(hero);
    })
    // this.heroService.ping();
    // this.socket.on('ping-ans', (handshake: string) => {
    //   window.alert(handshake);
    // });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
