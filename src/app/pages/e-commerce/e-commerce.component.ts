import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { orderBy, uniqBy } from 'lodash';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'ngx-ecommerce',
    templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit {
    constructor(private http: HttpClient) {}

    attacks: Observable<any[]>;
    attackDetails: Observable<any>;
    nodes = [
        {
            id: '5.227.94.15',
            label: 'dmz',
            cozy: 'kek',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.1',
            label: 'hq switch',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.8',
            label: 'terminal',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.2',
            label: 'workstation',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.3',
            label: 'workstation',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.4',
            label: 'workstation',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.5',
            label: 'app server',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.6',
            label: 'storage server',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.7',
            label: 'db server',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.254',
            label: 'brunch switch',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.250',
            label: 'br server',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.251',
            label: 'br workstation',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.252',
            label: 'br workstation',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
        {
            id: '192.168.100.253',
            label: 'br workstation',
            det: { color: 'rgba(255, 255, 255, 0.5)' },
        },
    ];

    selectedAttack = 0;
    onSelect(e) {
      this.selectedAttack = e;
      console.log(this.selectedAttack);
    }

    getRemoteData() {
        this.attacks = timer(0, 20000).pipe(
            switchMap(() =>
                this.http
                    .get('http://77.37.238.192:8087/get-attacks')
                    .pipe(map((item: any) => orderBy(Object.entries(item.result), (e) => e[1], 'desc'))),
            ),
        );

        // this.attacks.subscribe(attack => {
        //   this.selectedAttack = orderBy(attack, (e) => e[1], 'desc')[0][0];
        // });

        this.attackDetails = this.attacks.pipe(
            switchMap(item => {
                return this.http.get(`http://77.37.238.192:8087/get-attack/${this.selectedAttack}`);
            }),
            map((item: any) => uniqBy(item.result, 'to')),
        );

        this.attackDetails.subscribe(r => {
          console.log(r);

          this.nodes = this.nodes.map((i) => {
                if (r.find(ri => ri.to === i.id)) {
                  return { ...i, det: { color: 'red' } };
                } else {
                  return {...i, det: { color: 'rgba(255, 255, 255, 0.5)' } };
                }
            });
        });
    }

    ngOnInit() {
        this.getRemoteData();
    }
}
