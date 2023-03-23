import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from '@angular/fire/auth';

import {
  doc,
  Firestore,
  setDoc,
  getDoc,
  collection,
  addDoc
} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(
    !!sessionStorage.getItem('loggedInUser')
  );

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  user: any;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router,
    private fs: Firestore
  ) {}

  signup(email: string, password: string, name: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then(
      (res) => {
        const uid = res.user.uid;
        const email = res.user.email;
        const user = {
          email: email,
          name: name,
        };
        const docRef = doc(this.firestore, 'users', uid);
        setDoc(docRef, user)
          .then(() => {
            console.log('Data added successfully');
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Signing up successfully...',
          background: '#212529',
          showConfirmButton: false,
          timer: 2000,
        });
        this.router.navigate(['login']);
        sendEmailVerification(res.user);
      },
      (err) => {
        if (err.code === 'auth/email-already-in-use') {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Already signed up with this email address...',
            background: '#212529',
            showConfirmButton: false,
            timer: 2000,
          });
        }
        this.router.navigate(['signup']);
      }
    );
  }

  login(email: string, password: string, redirectUrl: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logged In successfully...',
          background: '#212529',
          showConfirmButton: false,
          timer: 2000,
        });
        sessionStorage.setItem('loggedInUser', email);
        this.loggedIn.next(true);
        if (redirectUrl) {
          this.router.navigate([redirectUrl]);
        } else {
          this.router.navigate(['store/adventure']);
        }

        if (this.user?.verifyEmail == true) {
          this.router.navigate(['store/adventure']);
        }
      },
      (err) => {
        if (err.code === 'auth/wrong-password') {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Wrong Password Please Try Again',
            background: '#212529',
            showConfirmButton: false,
            timer: 2000,
          });
        }

        this.router.navigate(['login']);
      }
    );
  }

  logout() {
    signOut(this.auth).then(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logged Out successfully...',
          background: '#212529',
          showConfirmButton: false,
          timer: 2000,
        });
        this.loggedIn.next(false);
        sessionStorage.removeItem('loggedInUser');
        this.router.navigate(['']);
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Something went wrong ' + err,
          background: '#212529',
          showConfirmButton: false,
          timer: 2000,
        });

        this.router.navigate(['login']);
      }
    );
  }

  async getUserById(id: any): Promise<any> {
    const docRef = doc(this.firestore, 'users', id);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log('Document does not exist');
      }
    } catch (error) {
      console.log(error);
    }
  }

  forgotPassword(email: string) {
    sendPasswordResetEmail(this.auth, email).then(
      () => {
        this.router.navigate(['verifyemail']);
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Something went wrong ' + err,
          background: '#212529',
          showConfirmButton: false,
          timer: 2000,
        });
        this.router.navigate(['forgotpassword']);
      }
    );
  }

  sendEmailForVerification(user: any) {
    sendEmailVerification(user).then(
      () => {
        this.router.navigate(['verifyemail']);
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Something went wrong ' + err,
          background: '#212529',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    );
  }

  payNow(name:string,cardnumber:string,expiration:string,cvv:string)
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Payment Done Successfully...',
      background: '#212529',
      showConfirmButton: false,
      timer: 2000,
    });

  }

}
