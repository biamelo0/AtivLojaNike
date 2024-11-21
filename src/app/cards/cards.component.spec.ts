import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`2.Deve verificar se a variavel title esta com o valor testAngular`, () => {
    const fixture = TestBed.createComponent(CardsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TestandoChamadaDeFuncao');
  });

  
  

  
});
