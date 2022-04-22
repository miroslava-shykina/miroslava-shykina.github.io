import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CenzorComponent } from './cenzor.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CenzorComponent', () => {
  let component: CenzorComponent;
  let fixture: ComponentFixture<CenzorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenzorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenzorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
