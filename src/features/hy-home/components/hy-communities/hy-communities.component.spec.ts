import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyCommunitiesComponent } from './hy-communities.component';

describe('HyCommunitiesComponent', () => {
  let component: HyCommunitiesComponent;
  let fixture: ComponentFixture<HyCommunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyCommunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
