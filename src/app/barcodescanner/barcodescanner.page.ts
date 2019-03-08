import { Component, OnInit } from '@angular/core';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-barcodescanner',
  templateUrl: './barcodescanner.page.html',
  styleUrls: ['./barcodescanner.page.scss'],
})
export class BarcodescannerPage implements OnInit {
option:BarcodeScannerOptions;
encodText:string='';
encodedData:any={};
scannedData:any={};

  constructor(public navctrl:NavController) { }
  // ,public scanner:BarcodeScanner
  ngOnInit() {
  }
  scan(){}
  encode(){}
}
