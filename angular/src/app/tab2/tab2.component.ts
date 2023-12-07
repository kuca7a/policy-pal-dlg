import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss'],
})
export class Tab2Component {
  qrDataCombined: string = '';
  qrName: string = '';
  qrPhone: string = '';
  qrEmail: string = '';
  qrProvider: string = '';
  qrCover: string = '';
  qrPolicyNumber: string = '';
  qrVehicleMake: string = '';
  qrVehicleModel: string = '';
  qrRegPlate: string = '';

  generateQrCode() {
    console.log('Name:', this.qrName);
    console.log('Phone:', this.qrPhone);
    console.log('Email:', this.qrEmail);
    console.log('Provider:', this.qrProvider);
    console.log('Cover:', this.qrCover);
    console.log('Cover:', this.qrCover);
    console.log('Vehicle Make:', this.qrVehicleMake);
    console.log('Vehicle Model:', this.qrVehicleModel);
    console.log('Vehicle Reg Plate:', this.qrRegPlate);

    // console.log('Combined Data:', this.qrDataCombined);

    // this.qrDataCombined = `${this.qrName} ${this.qrPhone} ${this.qrEmail} ${this.qrProvider} ${this.qrCover} ${this.qrVehicleMake} ${this.qrVehicleModel}`;

    const notes = `Provider: ${this.qrProvider} Cover: ${this.qrCover} Policy Number: ${this.qrPolicyNumber} Vehicle Make: ${this.qrVehicleMake} Vehicle Model: ${this.qrVehicleModel} Registration Plate: ${this.qrRegPlate}`;

    const vCardContent = `BEGIN:VCARD
VERSION:3.0
N:${this.qrName}
TEL:${this.qrPhone}
EMAIL:${this.qrEmail}
ORG:${this.qrProvider}
NOTE:${notes}
item1.TEL:${this.qrPhone}
item1.X-ABLabel:Mobile
END:VCARD`;

    this.qrDataCombined = vCardContent;
  }
}
