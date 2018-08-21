import { Component, OnInit, Input } from '@angular/core';
import { ProviderRate } from '../provider.model'


const SIZE = Array(150).fill(0).map((x, i) => i)


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  datas = ProviderRate;
  majorTdCount: number = 0;
  providersMajorList: ProviderRate[];
  numbers: Array<number>;

  constructor() { }

  ngOnInit() {
    console.log(this.datas);
    this.numbers = SIZE;
    this.orderArray();
  }

  orderArray() {

    let provideAuxiliar: ProviderRate;

    // Ordenação dos providers do maior para o menor.
    for (let i = 0; i < this.datas.length; i++) {
      for (let j = 0; j < this.datas.length; j++) {
        if (this.datas[i].qntRates > this.datas[j].qntRates) {
          provideAuxiliar = this.datas[i];
          this.datas[i] = this.datas[j];
          this.datas[j] = provideAuxiliar;
        }
      }
    }


  }

  

}
