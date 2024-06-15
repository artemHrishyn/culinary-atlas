import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp, FirebaseAppModule } from '@angular/fire/app';
import { getDatabase } from 'firebase/database';
import { provideDatabase, DatabaseModule } from '@angular/fire/database';
import { getStorage } from 'firebase/storage';
import { provideStorage, StorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { getAuth } from 'firebase/auth';
import { provideAuth, AuthModule } from '@angular/fire/auth';
import { getFirestore } from 'firebase/firestore';
import { provideFirestore, FirestoreModule } from '@angular/fire/firestore';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirebaseAppModule,
    AuthModule,
    FirestoreModule,
    DatabaseModule,
    StorageModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideClientHydration()
  ]
})

export class FirebaseModule { }
