import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaComponent } from './matricula.component';

describe('MatriculaComponent', () => {
  let component: MatriculaComponent;
  let fixture: ComponentFixture<MatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
