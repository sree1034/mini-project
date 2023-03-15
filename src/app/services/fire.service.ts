import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor(private fs: Firestore) {}

  addData(data: any) {
    const dataCollection = collection(this.fs, 'paymentdata');
    addDoc(dataCollection, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getData() {
    const dataCollection = collection(this.fs, 'paymentdata');
    return collectionData(dataCollection);
  }
}
