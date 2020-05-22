import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WordsTableComponent } from './words-table.component';

describe('WordsTableComponent', () => {
  let component: WordsTableComponent;
  let fixture: ComponentFixture<WordsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WordsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
