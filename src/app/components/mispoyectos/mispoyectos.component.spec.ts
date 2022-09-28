import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MispoyectosComponent } from './mispoyectos.component';

describe('MispoyectosComponent', () => {
  let component: MispoyectosComponent;
  let fixture: ComponentFixture<MispoyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MispoyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MispoyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
