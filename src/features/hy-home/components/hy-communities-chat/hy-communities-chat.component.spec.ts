import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyCommunitiesChatComponent } from './hy-communities-chat.component';

describe('HyCommunitiesChatComponent', () => {
  let component: HyCommunitiesChatComponent;
  let fixture: ComponentFixture<HyCommunitiesChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyCommunitiesChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyCommunitiesChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
