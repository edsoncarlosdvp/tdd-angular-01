import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from 'src/shared/services/unique-id.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('LikeWidgetComponent', () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      providers: [UniqueIdService],
      imports: [FontAwesomeModule]
    });
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when id input property is present', () => {
    const someId = 'someId';

    component.id = someId;

    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called`, () => {
    const likeSpyOn = spyOn(component.liked, 'emit');

    component.like();

    expect(likeSpyOn).toHaveBeenCalled();
  })
});
