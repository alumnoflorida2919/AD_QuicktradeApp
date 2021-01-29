import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifyArticlePage } from './modify-article.page';

describe('ModifyArticlePage', () => {
  let component: ModifyArticlePage;
  let fixture: ComponentFixture<ModifyArticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyArticlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
