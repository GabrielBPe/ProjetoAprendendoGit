import { Component, OnInit, Input } from '@angular/core';
import { PROVIDERS } from './DATAS';
import { ProviderRate } from './provider.model';
  
const SIZE = Array(150).fill(0).map((x, i) => i)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  datas = PROVIDERS;
  majorTdCount: number = 0;
  providersMajorList: ProviderRate[];
  numbers: Array<number>;
  title = 'app';

  ngOnInit() {
    console.log(this.datas);

    this.numbers = SIZE;

    // console.log(this.arrayColuns);
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

    this.countAndMakeArrayMajor();

  }

  getRate(bookMakerId: number, rateId: number): string {
    const rate = this.datas[bookMakerId].rates.find(x => x.idRateType === rateId + 1);
    if (rate) {
      return `${rate.value}`;
    }
    return '-';
  }


  countAndMakeArrayMajor() {
    //Descobrir quantidade de linhas que serão exibidas na tabela.

    let newArray = this.datas.map((i) => {
      return {}
    })

    for (let i = 0; i < this.datas.length; i++) {
      if (this.datas[i].qntRates > this.majorTdCount) {
        this.majorTdCount = this.datas[i].qntRates;
      }
    }
    //Montar um array com essas linhas.


    for (let i = 1; i <= 150; i++) {

      //  this.arrayMontado.push({ number: i, taxaOne: 2, taxaTwo: 3, taxaTres: 4 })

      //   this.datas.forEach(item => {
      //       item.rates.forEach(rate => {
      //         if(rate.value > 0 ){
      //           this.arrayMontado.push({number: i, taxa: rate.value});
      //         }
      //       })
      //   })
      // }

      //console.log(this.arrayMontado);

    }


  }

  


}


