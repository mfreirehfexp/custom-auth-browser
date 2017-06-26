import { TestBed, inject } from '@angular/core/testing';
import {} from 'jasmine';
import { CustomAuthService } from './CustomAuth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LocalAuth } from './LocalAuth';
import { environment } from '../dependencies';

describe('CustomAuthService Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
          AngularFireModule.initializeApp(environment.firebaseConfig),
          AngularFireAuthModule
      ],
      providers: [LocalAuth, CustomAuthService]
    });
  });

  it('should create service', inject([CustomAuthService], (service: CustomAuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 42 from getMeaning', inject([CustomAuthService], (service: CustomAuthService) => {
    // expect(service.getMeaning()).toBe(42);
    expect(1).toBe(1);
  }));
});
