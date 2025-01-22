import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuMascoteComponent } from './meu-mascote.component';

describe('MeuMascoteComponent', () => {
  let component: MeuMascoteComponent;
  let fixture: ComponentFixture<MeuMascoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuMascoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuMascoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
